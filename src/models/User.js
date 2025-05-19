export class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.address = {
            street: data.address.street,
            suite: data.address.suite,
            city: data.address.city,
            zipcode: data.address.zipcode,
            geo: {
                lat: parseFloat(data.address.geo.lat),
                lng: parseFloat(data.address.geo.lng),
            },
        };
        this.phone = data.phone;
        this.website = data.website;
        this.company = data.company;
        this.avatar = `https://picsum.photos/seed/${this.id}/200/200`;
    }

    getFullAddress() {
        return `${this.address.street}, ${this.address.city} ${this.address.zipcode}`;
    }

    getCoordinates() {
        return {
            latitude: this.address.geo.lat,
            longitude: this.address.geo.lng,
        };
    }
}
