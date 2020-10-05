import React, {useState} from 'react';
import {View, Text, Image, Switch} from 'react-native';
import Style from './SettingScreen.style';
import {CuraColor} from '../../util';
import {Feather} from '@expo/vector-icons';

const userImage = require('../../assets/images/gitlab-logo.png');

interface IOptionButtonBox {
  iconName: string;
  boxTitle: string;
  children?: React.ReactElement;
}

const SettingScreen = () => {
  const [trackingIsEnable, setTrackingEnable] = useState(false);
  const toggleSwitch = () => setTrackingEnable((prevState) => !prevState);

  const TopBox = () => {
    return (
      <View style={Style.topBox}>
        <View style={Style.profileBox}>
          <Image style={Style.userImage} source={userImage} />
          <View style={Style.wordBox}>
            <Text style={Style.nameText}>Wendy Moe</Text>
            <Text style={Style.mailText}>WendyNo5@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  };

  const MainButtonBox = () => {
    return (
      <View style={Style.mainButtonBox}>
        <View>
          <View style={Style.mainButton}>
            <Feather name="message-square" size={35} color="#ffffff" />
          </View>
          <Text style={Style.mainButtonTitle}>Question</Text>
        </View>
        <View>
          <View style={Style.mainButton}>
            <Feather name="users" size={35} color="#ffffff" />
          </View>
          <Text style={Style.mainButtonTitle}>Follow-Up</Text>
        </View>
      </View>
    );
  };

  const OptionButtonBox = ({
    iconName,
    boxTitle,
    children,
  }: IOptionButtonBox) => {
    const ArrowIcon = (
      <Feather
        style={Style.iconContainer}
        name="chevron-right"
        color={CuraColor.Green}
        size={25}
      />
    );
    return (
      <View style={Style.optionButton}>
        <Feather style={Style.iconContainer} name={iconName} size={20} />
        <Text style={Style.wordContainer}>{boxTitle}</Text>
        {children ? children : ArrowIcon}
      </View>
    );
  };
  return (
    <>
      <View>
        <TopBox />
        <View style={Style.optionSelectionBox}>
          <MainButtonBox />
          <OptionButtonBox iconName="eye" boxTitle="Healthcare Data Tracing">
            <Switch
              style={Style.iconContainer}
              trackColor={{false: '#767577', true: CuraColor.LightGreen}}
              thumbColor={trackingIsEnable ? CuraColor.DarkGreen : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={trackingIsEnable}
            />
          </OptionButtonBox>
          <OptionButtonBox iconName="user" boxTitle="Personal Information" />
          <OptionButtonBox iconName="list" boxTitle="Healthcare Records" />
          <OptionButtonBox iconName="database" boxTitle="Data Management" />
          <View style={Style.optionButton} />
        </View>
      </View>
    </>
  );
};

export default SettingScreen;
