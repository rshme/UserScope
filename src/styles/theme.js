export const colors = {
    // Material Design 3 inspired color palette
    primary: '#023e8a',        // Blue 700
    primaryVariant: '#1565C0', // Blue 800
    secondary: '#da8403',      // Mango Tango
    background: '#FAFAFA',     // Grey 50
    surface: '#FFFFFF',        // White
    error: '#F44336',          // Red 500
    onPrimary: '#FFFFFF',      // White
    onSecondary: '#000000',    // Black
    onBackground: '#212121',   // Grey 900
    onSurface: '#212121',      // Grey 900
    onError: '#FFFFFF',        // White
    disabled: '#BDBDBD',       // Grey 400
    placeholder: '#757575',    // Grey 600
    divider: '#E0E0E0',        // Grey 300
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const typography = {
    h1: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.onSurface,
    },
    h2: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.onSurface,
    },
    h3: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.onSurface,
    },
    body1: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.onSurface,
    },
    body2: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.onSurface,
    },
    caption: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.placeholder,
    },
    button: {
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
};

export const shadows = {
    small: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
};