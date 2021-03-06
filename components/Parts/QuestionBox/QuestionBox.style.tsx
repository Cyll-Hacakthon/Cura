import {StyleSheet} from 'react-native';
import {CuraColor} from '../../../util';

const QuestionBoxStyle = StyleSheet.create({
  questionBoxStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 20,
    height: 90,
    width: '85%',
    backgroundColor: CuraColor.Green,
    elevation: 5,
  },
  userImage: {
    width: 47,
    height: 47,
    backgroundColor: CuraColor.White,
    borderRadius: 5,
  },
  questionUserImageBox: {
    padding: 10,
  },
  questionTitle: {
    color: 'white',
  },
  questionTitleBox: {
    flex: 1,
    padding: 10,
  },
  questionViewsCountBox: {
    flexDirection: 'column-reverse',
  },
  questionViewContent: {
    flexDirection: 'row',
    padding: 10,
    height: '50%',
  },
  questionViewCountsText: {
    color: 'white',
  },
});

export default QuestionBoxStyle;
