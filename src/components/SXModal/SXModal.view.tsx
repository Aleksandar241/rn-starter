import React from 'react';
import {Modal, View} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated, {FadeIn, FadeOut, SlideInDown} from 'react-native-reanimated';

import {SXAvoidKeyboard} from '../SXAvoidKeyboard';
import {SXIcon} from '../SXIcon';
import styles from './styles';
import type {SXModalProps} from './types';
import useViewModel from './useViewModel';

const SXModal: SXModalProps = ({
  testID = 'SX-MODAL',
  isVisible,
  hasCloseIcon = true,
  children,
  keyboardOffset = 0,
  contentContainerStyle,
  onHide,
}) => {
  const {animatedStyles, backgroundColor, gesture, onClose} = useViewModel({
    onHide,
  });

  return (
    <Modal
      animationType="none"
      testID={testID}
      visible={isVisible}
      transparent
      statusBarTranslucent>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={styles.overlay}
          entering={FadeIn}
          exiting={FadeOut}>
          <Animated.View
            entering={SlideInDown}
            style={[styles.modal, animatedStyles]}>
            <View
              style={[
                styles.contentContainer,
                {backgroundColor},
                contentContainerStyle,
              ]}>
              <View style={styles.closeIconContainer}>
                {hasCloseIcon && <SXIcon icon="close" onPress={onClose} />}
              </View>
              {keyboardOffset > 0 ? (
                <SXAvoidKeyboard offset={keyboardOffset}>
                  {children}
                </SXAvoidKeyboard>
              ) : (
                children
              )}
            </View>
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </Modal>
  );
};

export default SXModal;
