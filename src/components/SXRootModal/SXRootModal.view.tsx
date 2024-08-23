import React from 'react';

import {SXModal} from '../SXModal';
import type {SXRootModalProps} from './types';
import useViewModel from './useViewModel';

const SXRootModal: SXRootModalProps = ({testID = 'SX-ROOT_MODAL'}) => {
  const {content, onHide} = useViewModel();

  return (
    <SXModal
      testID={testID}
      isVisible={!!content}
      children={content}
      onHide={onHide}
    />
  );
};

export default SXRootModal;
