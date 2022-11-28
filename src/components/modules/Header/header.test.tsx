import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './index';

describe('Components', () => {
  it('render header component', () => {
    render(<Header />);

    const headerLogo = screen.getByAltText('logo-header');

    expect(headerLogo).toBeInTheDocument();
  });
});
