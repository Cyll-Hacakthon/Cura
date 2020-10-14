import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Style from './ForumScreen.style';
import {Font} from '../../util';
import QuestionList from '../Parts/QuestionList/QuestionList';
import {Picker} from '@react-native-community/picker';

const DummyData = [
  {title: 'Why am I Dizzy after taking a nap?', viewsCount: '100k'},
  {title: "Why Can't I See when I close my Eye", viewsCount: '200k'},
];

const DummyCategory = [
  {label: 'Neurology', value: 'neurology'},
  {label: 'Pediatric', value: 'pediatric'},
];

const ForumScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <ScrollView style={Style.container}>
      <View style={Style.topBox}>
        <View style={Style.panel}>
          <Text style={{...Font.Heading1, ...Style.title}}>Forum</Text>
          <TouchableOpacity style={Style.addButton}>
            <MaterialIcons name="add-circle" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{...Style.panel, ...Style.questionPanelTopMargin}}>
          <View style={Style.searchSection}>
            <MaterialIcons
              name="search"
              size={25}
              color="black"
              style={Style.searchIcon}
            />
            <TextInput
              style={Style.input}
              placeholder="Question"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={Style.categoryBox}>
            <Picker selectedValue={selectedCategory}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
      </View>
      <QuestionList questionData={DummyData} />
    </ScrollView>
  );
};

export default ForumScreen;
