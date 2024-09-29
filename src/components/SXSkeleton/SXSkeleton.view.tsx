import type { SXSkeletonProps } from './types';
import useViewModel from './useViewModel';

const SXSkeleton: SXSkeletonProps = ({ children, loading, ...rest }) => {
  const { generateElement } = useViewModel(rest);

  if (!loading) {
    return children;
  }

  const Skeleton = generateElement(children);
  return Skeleton;
};

export default SXSkeleton;
