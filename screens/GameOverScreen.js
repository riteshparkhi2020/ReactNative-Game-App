import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{' '}
            <Text style={styles.heighlight}>{roundsNumber}</Text> rounds to
            guess the number <Text style={styles.heighlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  heighlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
