import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screen/HomeScreen"
import { TabIcon } from "./components"
import { COLORS, icons } from "./constants"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "./screen/AccountScreen"

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    showLabel: false,
                    style: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        elevation: 0,
                        backgroundColor: COLORS.white,
                        borderTopColor: "transparent",
                        height: 100
                    }
                }}
            >
                <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />
                }}
            />
                <Tab.Screen 
                name="Account" 
                component={AccountScreen}
                options={{
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.personal} />
                }} 
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default App;