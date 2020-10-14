import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

type CategorySelectionModalProps = {
  dataList: Array<{label: string; selected: boolean}>;
  toggleModal: Function;
  setSelectedCategory: Function;
  visible: boolean;
};

const CategorySelectionModal = ({
  dataList,
  toggleModal,
  visible,
  setSelectedCategory,
}: CategorySelectionModalProps) => {
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={Style.contentWrapper}>
        <View>
          {dataList.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedCategory(data.label);
                }}>
                <Text
                  style={
                    data.selected
                      ? Style.dataItemActive
                      : Style.dataItemInactive
                  }>
                  {data.label}
                </Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity onPress={() => toggleModal()}>
            <Text style={Style.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Style = StyleSheet.create({
  contentWrapper: {
    marginTop: 22,
  },
  dataItemInactive: {
    padding: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'gray', //test.selectedLang2 ? '#fc5185' : 'gray',
    fontWeight: 'normal', //test.selectedLang2 ? 'bold' : 'normal',
  },
  dataItemActive: {
    padding: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default CategorySelectionModal;
