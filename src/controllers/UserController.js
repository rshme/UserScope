import { User } from '../models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserController {
    constructor() {
        this.users = [];
        this.loading = false;
        this.error = null;
        this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
        this.storageKey = '@user_directory_cache';
    }

    async fetchUsers() {
        this.loading = true;
        this.error = null;

        try {
            // Try to fetch from API first
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const userData = await response.json();
            this.users = userData.map(user => new User(user));

            // Cache the data locally
            await this.cacheUsers(this.users);

            this.loading = false;
            return this.users;
        } catch (error) {
            console.log('Network error, trying to load from cache:', error);

            // Try to load from cache if network fails
            const cachedUsers = await this.loadCachedUsers();
            if (cachedUsers.length > 0) {
                this.users = cachedUsers;
                this.loading = false;
                return this.users;
            }

            // If no cache available, set error
            this.error = 'Unable to load users. Please check your connection and try again.';
            this.loading = false;
            throw error;
        }
    }

    async cacheUsers(users) {
        try {
            const jsonValue = JSON.stringify(users.map(user => ({
                ...user,
                // Store the raw data structure for easy reconstruction
                address: user.address,
            })));
            await AsyncStorage.setItem(this.storageKey, jsonValue);
        } catch (error) {
            console.log('Error caching users:', error);
        }
    }

    async loadCachedUsers() {
        try {
            const jsonValue = await AsyncStorage.getItem(this.storageKey);
            if (jsonValue) {
                const userData = JSON.parse(jsonValue);
                return userData.map(user => new User(user));
            }
            return [];
        } catch (error) {
            console.log('Error loading cached users:', error);
            return [];
        }
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }

    async retryFetch() {
        return await this.fetchUsers();
    }
}

export default new UserController();