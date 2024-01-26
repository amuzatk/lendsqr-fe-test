// __tests__/HelloWorld.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from '../components/HelloWorld';

describe('HelloWorld component', () => {
  it('renders the hello world message', () => {
    render(<HelloWorld />);
    const helloWorldElement = screen.getByText(/hello, world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
});
