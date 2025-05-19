import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../styles/theme';

const LoadingSpinner = ({ message = 'Loading...' }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    message: {
        ...typography.body1,
        marginTop: spacing.md,
        color: colors.placeholder,
    },
});

export default LoadingSpinner;