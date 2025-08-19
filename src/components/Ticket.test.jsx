import { render, screen } from '@testing-library/react';
import Ticket from './Ticket';

describe('Ticket', () => {
  test('renders ticket with provided data', () => {
    const props = {
      name: 'John Doe',
      email: 'john@example.com',
      position: 'Software Engineer',
      avatar: 'data:image/png;base64,test'
    };
    
    render(<Ticket {...props} />);
    
    // Check if the ticket container exists
    const ticket = screen.getByTestId('ticket');
    expect(ticket).toBeInTheDocument();
    
    // Check if all required fields are present
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    
    // Check if the avatar is rendered
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain('data:image/png;base64,test');
  });

  test('renders default values when no data is provided', () => {
    render(<Ticket />);
    
    // Check if the ticket container exists
    const ticket = screen.getByTestId('ticket');
    expect(ticket).toBeInTheDocument();
    
    // Check if default values are present
    expect(screen.getByText('Your Name')).toBeInTheDocument();
    expect(screen.getByText('Position')).toBeInTheDocument();
    expect(screen.getByText('email@example.com')).toBeInTheDocument();
    
    // Check if default avatar is rendered
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain('default-avatar.png');
  });
});