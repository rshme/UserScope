import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { colors, spacing, typography, shadows } from '../styles/theme';

const UserCard = ({ user, onAddressPress }) => {
    return (
        <View style={styles.card}>
            {/* User Avatar and Basic Info */}
            <View style={styles.headerSection}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View style={styles.basicInfo}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.username}>@{user.username}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <Text style={styles.userId}>#{user.id}</Text>
            </View>

            {/* Address Section */}
            <TouchableOpacity
                style={styles.addressSection}
                onPress={() => onAddressPress(user)}
                activeOpacity={0.7}>
                <Text style={styles.addressLabel}>Address</Text>
                <Text style={styles.addressText}>{user.getFullAddress()}</Text>
                <Text style={styles.coordinatesText}>
                    {user.address.geo.lat.toFixed(4)}, {user.address.geo.lng.toFixed(4)}
                </Text>
                <Text style={styles.tapHint}>Tap to view on map</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        marginHorizontal: spacing.md,
        marginVertical: spacing.sm,
        borderRadius: 12,
        padding: spacing.md,
        ...shadows.medium,
    },
    headerSection: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: spacing.md,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.disabled,
    },
    basicInfo: {
        flex: 1,
        marginLeft: spacing.md,
    },
    name: {
        ...typography.h3,
        marginBottom: spacing.xs,
    },
    username: {
        ...typography.body2,
        color: colors.primary,
        marginBottom: spacing.xs,
    },
    email: {
        ...typography.body2,
        color: colors.placeholder,
    },
    userId: {
        ...typography.caption,
        color: colors.placeholder,
        fontWeight: 'bold',
    },
    addressSection: {
        backgroundColor: colors.background,
        borderRadius: 8,
        padding: spacing.md,
        borderLeftWidth: 4,
        borderLeftColor: colors.secondary,
    },
    addressLabel: {
        ...typography.caption,
        color: colors.primary,
        marginBottom: spacing.xs,
        fontWeight: '600',
    },
    addressText: {
        ...typography.body1,
        marginBottom: spacing.xs,
    },
    coordinatesText: {
        ...typography.caption,
        color: colors.placeholder,
        marginBottom: spacing.xs,
    },
    tapHint: {
        ...typography.caption,
        color: colors.secondary,
        fontStyle: 'italic',
    },
});

export default UserCard;