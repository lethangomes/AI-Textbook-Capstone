import React from 'react';
import { render } from '@testing-library/react-native';
import { IconSymbol } from '../components/ui/icon-symbol.ios';

describe('IconSymbol', () => {
  it('renders default correctly', () => {
    const { getByTestId } = render(
      <IconSymbol name="star" color="red" />
    );

    const symbol = getByTestId('icon-symbol');
    expect(symbol.props.tintColor).toBe('red');
  });
});
