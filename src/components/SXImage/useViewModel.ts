import { useState } from 'react';

const useViewModel = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoadComplete = () => setIsLoading(false);

  return { isLoading, onLoadComplete };
};

export default useViewModel;
