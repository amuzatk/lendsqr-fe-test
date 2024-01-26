import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageHeader from '.';

// Mock the import of PageHeader
jest.mock('.', () => ({
  __esModule: true,
  default: jest.fn(),
}));


describe('PageHeader component', () => {
  it('renders "Back to Users" text', () => {
    render(<PageHeader />);
    const backToUsersText = screen.getByText(/Back to Users/i); // Using a regular expression
    expect(backToUsersText).toBeInTheDocument();
  });
});








