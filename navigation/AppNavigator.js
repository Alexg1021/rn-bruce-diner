import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/Order';
import ViewOrdersScreen from '../screens/ViewOrders';
import UserScreen from '../screens/User';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Order' component={OrderScreen} />
      <Tabs.Screen
        name='View'
        component={ViewOrdersScreen}
        options={() => ({
          tabBarLabel: 'View Orders',
        })}
      />
      <Tabs.Screen name='Profile' component={UserScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
