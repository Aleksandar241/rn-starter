import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import {Device} from '@constants';

import {SXIcon} from '../SXIcon';
import styles from './styles';
import type {SXModalProps} from './types';
import useViewModel from './useViewModel';

const SXModal: SXModalProps = ({
  testID = 'SX-MODAL',
  isVisible,
  hasCloseIcon = true,
  children,
  style,
  contentContainerStyle,
  onHide,
}) => {
  const {backgroundColor} = useViewModel();

  return (
    <Modal
      isVisible={isVisible}
      testID={testID}
      onSwipeComplete={onHide}
      useNativeDriver
      hasBackdrop
      onBackdropPress={onHide}
      style={[styles.modal, {backgroundColor}, style]}
      deviceHeight={Device.HEIGHT}
      deviceWidth={Device.WIDTH}
      propagateSwipe>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <View style={styles.closeIconContainer}>
          {hasCloseIcon && <SXIcon icon="close" onPress={onHide} />}
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default SXModal;
