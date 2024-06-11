import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import EmojiPicker from "./components/EmojiPicker";

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [showAppOptions, setShowAppOptions] = useState(false)

  const pickImageAsync = async () => {

    const [selectedImage, setSelectedImage] = useState(null);
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>

        
      ) : (
      <><View style={styles.imageContainer}>
            <ImageViewer
              placeholderImageSource={PlaceholderImage}
              selectedImage={selectedImage} />
          </View><View style={styles.footerContainer}>
              <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
              <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
            </View></>
            
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
