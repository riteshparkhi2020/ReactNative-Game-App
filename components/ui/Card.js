import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 10 : 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    //Android property
    elevation: 4,
    //iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
