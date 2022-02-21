import React from 'react';
import { Modal, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import colors from 'styles/generalStyles/colors';
import styles from './styles';

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            source={require('assets/animations/done.json')}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

export default UploadScreen;
