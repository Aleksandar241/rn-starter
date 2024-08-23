import React from 'react';

import {render} from '@testing-library/react-native';

import SXImage from './SXImage.view';

describe('SXImage', () => {
  it('should render correctly', () => {
    // @ts-ignore
    const {getByTestId} = render(<SXImage testID={'SX-IMAGE'} />);
    expect(getByTestId('SX-IMAGE')).toBeDefined();
  });

  it('should render with the provided source', () => {
    const source = 'https://example.com/image.jpg';
    const {getByTestId} = render(
      <SXImage testID={'SX-IMAGE'} source={source} />,
    );
    const image = getByTestId('SX-IMAGE');
    expect(image.props.source[0].uri).toEqual(source);
  });

  it('should render with the provided content fit', () => {
    const contentFit = 'contain';
    const source = 'https://example.com/image.jpg';
    const {getByTestId} = render(
      <SXImage testID={'SX-IMAGE'} source={source} contentFit={contentFit} />,
    );
    const image = getByTestId('SX-IMAGE');
    expect(image.props.contentFit).toEqual(contentFit);
  });
});
