import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import { HomeTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const MainNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#EF4444', // red-500
                tabBarInactiveTintColor: '#9CA3AF', // gray-400
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
};

export default MainNavigator;
