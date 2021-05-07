import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CachedImage } from 'react-native-img-cache2';
import {Icon} from 'react-native-elements';

class FullscreenImage extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      tabBarVisible: false
    }
  };

  render() {
    const imagePath = this.props.navigation.getParam('image');
    const image = <CachedImage source={imagePath} style={styles.imageStyle} resizeMode='contain' />;
    return (
      <View style={styles.container}>
        {image}
        <Icon name='close' type='material' color='white' undergrayColor='transparent' containerStyle={{position: 'absolute', left: 10, top: 10}} onPress={() => {
          this.props.navigation.goBack();
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  }
});

export default FullscreenImage;