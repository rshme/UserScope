import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import UserListView from './src/views/UserListView';
import UserLocationView from './src/views/UserLocationView';
import { colors } from './src/styles/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Stack.Navigator
            initialRouteName="UserList"
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.primary,
                elevation: 4,
              },
              headerTintColor: colors.onPrimary,
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
              },
            }}>
          <Stack.Screen
              name="UserList"
              component={UserListView}
              options={{ title: 'User Directory' }}
          />
          <Stack.Screen
              name="UserLocation"
              component={UserLocationView}
              options={{ title: 'User Location' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;