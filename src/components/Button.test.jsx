import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  test('renders button with correct text', () => {
    render(<Button text="Click me" />);
    
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Button text="Click me" onClick={handleClick} />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button text="Click me" disabled={true} />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
  });

  test('is enabled when disabled prop is false', () => {
    render(<Button text="Click me" disabled={false} />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeEnabled();
  });
});