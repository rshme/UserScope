import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    RefreshControl,
} from 'react-native';
import UserController from '../controllers/UserController';
import UserCard from '../components/UserCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorView from '../components/ErrorView';
import { colors, spacing } from '../styles/theme';

const UserListView = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const fetchedUsers = await UserController.fetchUsers();
            setUsers(fetchedUsers);
        } catch (err) {
            setError(UserController.error || 'Failed to load users');
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        try {
            const fetchedUsers = await UserController.retryFetch();
            setUsers(fetchedUsers);
            setError(null);
        } catch (err) {
            setError(UserController.error || 'Failed to refresh users');
        } finally {
            setRefreshing(false);
        }
    };

    const handleAddressPress = (user) => {
        navigation.navigate('UserLocation', { user });
    };

    const renderUserItem = ({ item }) => (
        <UserCard user={item} onAddressPress={handleAddressPress} />
    );

    if (loading && users.length === 0) {
        return <LoadingSpinner message="Loading users..." />;
    }

    if (error && users.length === 0) {
        return <ErrorView message={error} onRetry={loadUsers} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderUserItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[colors.primary]}
                        tintColor={colors.primary}
                    />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        paddingVertical: spacing.sm,
    },
});

export default UserListView;