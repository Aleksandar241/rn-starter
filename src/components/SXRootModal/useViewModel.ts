import {useRootModalStore} from '@stores';

const useViewModel = () => {
  const {content, pop} = useRootModalStore();
  const modalContent = content?.[content?.length - 1];

  return {
    content: modalContent,
    onHide: pop,
  };
};

export default useViewModel;
