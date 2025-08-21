import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Image from './Image';

describe('Image', () => {
  test('renders file input', () => {
    render(<Image />);
    
    expect(screen.getByLabelText(/avatar/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /click to upload/i })).toBeInTheDocument();
  });

  test('calls onImageChange when file is selected', async () => {
    const user = userEvent.setup();
    const mockOnImageChange = jest.fn();
    
    render(<Image onImageChange={mockOnImageChange} />);
    
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const input = screen.getByLabelText(/avatar/i);
    
    await user.upload(input, file);
    
    // Check that onImageChange was called
    expect(mockOnImageChange).toHaveBeenCalled();
  });

  test('shows preview when file is selected', async () => {
    const user = userEvent.setup();
    
    render(<Image />);
    
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const input = screen.getByLabelText(/avatar/i);
    
    await user.upload(input, file);
    
    // Check that preview is shown
    expect(screen.getByRole('img', { name: /preview/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /remove image/i })).toBeInTheDocument();
  });

  test('calls onImageChange with null when image is cleared', async () => {
    const user = userEvent.setup();
    const mockOnImageChange = jest.fn();
    
    render(<Image onImageChange={mockOnImageChange} />);
    
    // First upload a file
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const input = screen.getByLabelText(/avatar/i);
    
    await user.upload(input, file);
    
    // Then clear the image
    const clearButton = screen.getByRole('button', { name: /remove image/i });
    await user.click(clearButton);
    
    // Check that onImageChange was called with null
    expect(mockOnImageChange).toHaveBeenCalledWith(null);
  });
});