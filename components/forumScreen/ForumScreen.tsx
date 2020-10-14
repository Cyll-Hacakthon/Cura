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
import CategoryModal from './CategorySelectionModal';

const DummyData = [
  {title: 'Why am I Dizzy after taking a nap?', viewsCount: '100k'},
  {title: "Why Can't I See when I close my Eye", viewsCount: '200k'},
];

const DummyCategory = [
  {label: 'General', selected: true},
  {label: 'Neurology', selected: false},
  {label: 'Pediatric', selected: false},
];

const ForumScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryList, setCategoryList] = useState<
    Array<{
      label: string;
      selected: boolean;
    }>
  >(DummyCategory);

  return (
    <>
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
            <TouchableOpacity
              style={Style.categoryBox}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text>{selectedCategory}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <QuestionList questionData={DummyData} />
      </ScrollView>
      <CategoryModal
        setSelectedCategory={(label: string) => {
          setSelectedCategory(label);
          setCategoryList(
            categoryList.map((category) => {
              const isSelected = category.label === label;
              return {
                label: category.label,
                selected: isSelected,
              };
            }),
          );
        }}
        dataList={categoryList}
        toggleModal={() => {
          setModalVisible(!modalVisible);
        }}
        visible={modalVisible}
      />
    </>
  );
};

export default ForumScreen;
