import {FlashListProps} from '@shopify/flash-list';

type Props<T = {}> = FlashListProps<T> & {
  loading?: boolean;
  error?: any;
};

export type SXListProps<T> = Props<T>;
