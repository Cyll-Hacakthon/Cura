import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';
import {CuraColor} from '../../../util';

import HomeContainer from '../HomeContainer/HomeContainer';
import ForumScreen from '../../forumScreen/ForumScreen';
import SettingContainer from '../../Parts/SettingContainer/SettingContainer';
import TakeNumberContainer from '../../Parts/TakeNumberContainer/TakeNumberContainer';
import NotificationScreen from '../../notificationScreen/NotificationScreen';

const Tab = createBottomTabNavigator();

const NavContainer = () => {
  const screens = [
    {name: 'Home', component: HomeContainer},
    {name: 'Forum', component: ForumScreen},
    {name: 'Take Number', component: TakeNumberContainer},
    {name: 'Notification', component: NotificationScreen}, // Change Component
    {name: 'Setting', component: SettingContainer},
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName: string;

            switch (route.name) {
              case 'home':
                iconName = 'home';
                break;
              case 'Forum':
                iconName = 'monitor';
                break;
              case 'Take Number':
                iconName = 'clipboard';
                break;
              case 'Setting':
                iconName = 'settings';
                break;
              case 'Notification':
                iconName = 'bell';
                break;
              default:
                iconName = 'home';
            }

            return <Feather name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          inactiveBackgroundColor: CuraColor.LightGreen,
          inactiveTintColor: CuraColor.White,
          activeTintColor: CuraColor.Green,
          keyboardHidesTabBar: true,
        }}>
        {screens.map((screen, index) => {
          return (
            <Tab.Screen
              key={index}
              name={screen.name}
              component={screen.component}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
