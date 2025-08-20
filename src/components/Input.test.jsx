import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  test('renders input with label', () => {
    render(<Input label="Test Label" type="text" />);
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders input with placeholder', () => {
    render(<Input label="Test Label" type="text" placeholder="Test placeholder" />);
    
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  test('displays error message when provided', () => {
    render(<Input label="Test Label" type="text" error="Test error message" />);
    
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  test('calls onChange when input value changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Input label="Test Label" type="text" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'test value');
    
    expect(handleChange).toHaveBeenCalled();
  });

  test('has correct name attribute when provided', () => {
    render(<Input label="Test Label" type="text" name="testName" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'testName');
  });

  test('has correct value when provided', () => {
    render(<Input label="Test Label" type="text" value="test value" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test value');
  });
});