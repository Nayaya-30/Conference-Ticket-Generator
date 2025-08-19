import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders ticket generator title', () => {
    render(<App />);
    
    expect(screen.getByText(/ticket generator/i)).toBeInTheDocument();
  });

  test('renders form inputs', () => {
    render(<App />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/job position/i)).toBeInTheDocument();
  });

  test('shows error messages for empty required fields', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const generateButton = screen.getByRole('button', { name: /generate my ticket/i });
    await user.click(generateButton);
    
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/job position is required/i)).toBeInTheDocument();
  });

  test('shows error for invalid email', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const emailInput = screen.getByLabelText(/email address/i);
    await user.type(emailInput, 'invalid-email');
    
    const generateButton = screen.getByRole('button', { name: /generate my ticket/i });
    await user.click(generateButton);
    
    expect(screen.getByText(/email address is invalid/i)).toBeInTheDocument();
  });

  test('enables button when form is valid', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const positionInput = screen.getByLabelText(/job position/i);
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(positionInput, 'Developer');
    
    const generateButton = screen.getByRole('button', { name: /generate my ticket/i });
    expect(generateButton).toBeEnabled();
  });
});