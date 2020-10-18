import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CuraColor} from '../../../util';

import TakeNumberScreen from '../../takeNumberScreen/TakeNumberScreen';
import QueueInformationScreen from '../../QueueInformationScreen/QueueInformationScreen';
import NumberInformationScreen from '../../NumberInformationScreen/NumberInformationScreen';

const Stack = createStackNavigator();

const TakeNumberContainer = () => {
  const [takenNumber, setTakenNumber] = useState(true);

  return (
    <Stack.Navigator initialRouteName="Take Number">
      {takenNumber ? (
        <Stack.Screen
          name="Number Information"
          component={NumberInformationScreen}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="Take Number"
            component={TakeNumberScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Queue Information"
            component={QueueInformationScreen}
            options={{
              headerTitle: '',
              headerTintColor: CuraColor.White,
              headerBackTitleVisible: true,
              headerBackTitle: 'Back',
              headerTransparent: true,
              headerStatusBarHeight: 15,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default TakeNumberContainer;
