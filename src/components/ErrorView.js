import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../styles/theme';

const ErrorView = ({ message, onRetry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorIcon}>⚠️</Text>
            <Text style={styles.title}>Oops! Something went wrong</Text>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: spacing.xl,
    },
    errorIcon: {
        fontSize: 64,
        marginBottom: spacing.lg,
    },
    title: {
        ...typography.h2,
        marginBottom: spacing.md,
        textAlign: 'center',
    },
    message: {
        ...typography.body1,
        color: colors.placeholder,
        textAlign: 'center',
        marginBottom: spacing.xl,
        lineHeight: 22,
    },
    retryButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md,
        borderRadius: 24,
        ...shadows.small,
    },
    retryButtonText: {
        ...typography.button,
        color: colors.onPrimary,
    },
});

export default ErrorView;