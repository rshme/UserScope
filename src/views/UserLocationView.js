import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { colors, spacing, typography, shadows } from '../styles/theme';

const { width, height } = Dimensions.get('window');

const UserLocationView = ({ route }) => {
    const { user } = route.params;
    const coordinates = user.getCoordinates();

    const mapStyle = [
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
        },
    ];

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...coordinates,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={mapStyle}
                showsUserLocation={false}
                showsMyLocationButton={false}
                toolbarEnabled={false}>
                <Marker
                    coordinate={coordinates}
                    title={user.name}
                    description={user.getFullAddress()}
                />
            </MapView>

            {/* User Info Card Overlay */}
            <View style={styles.userInfoCard}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userAddress}>{user.getFullAddress()}</Text>
                <Text style={styles.coordinates}>
                    📍 {coordinates.latitude.toFixed(6)}, {coordinates.longitude.toFixed(6)}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: width,
        height: height,
    },
    userInfoCard: {
        position: 'absolute',
        bottom: spacing.xl,
        left: spacing.md,
        right: spacing.md,
        backgroundColor: colors.surface,
        borderRadius: 12,
        padding: spacing.md,
        ...shadows.large,
    },
    userName: {
        ...typography.h3,
        marginBottom: spacing.xs,
    },
    userAddress: {
        ...typography.body1,
        color: colors.placeholder,
        marginBottom: spacing.xs,
    },
    coordinates: {
        ...typography.caption,
        color: colors.secondary,
        fontFamily: 'monospace',
    },
});

export default UserLocationView;