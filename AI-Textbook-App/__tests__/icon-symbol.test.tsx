import React from 'react';
import { render } from '@testing-library/react-native';
import { IconSymbol } from '../components/ui/icon-symbol.ios';

describe('IconSymbol', () => {
  it("renders default correctly", () => {
    const { getByTestId } = render(<IconSymbol />);
    expect(getByTestId("icon-symbol")).toBeTruthy();
  });

  it("renders with custom color correctly", () => {
    const { getByTestId } = render(<IconSymbol color="red" />);
    expect(getByTestId("icon-symbol")).toHaveStyle({ color: "red" });
  });

  it("renders with custom size correctly", () => {
    const { getByTestId } = render(<IconSymbol size={32} />);
    expect(getByTestId("icon-symbol")).toHaveStyle({ fontSize: 32 });
  });
});
