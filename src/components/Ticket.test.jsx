import { render, screen } from '@testing-library/react';
import Ticket from './Ticket';

describe('Ticket', () => {
  test('renders ticket with provided data', () => {
    const props = {
      name: 'John Doe',
      position: 'Software Engineer',
      avatar: 'data:image/png;base64,test',
      ticketNumber: '#123456'
    };
    
    render(<Ticket {...props} />);
    
    // Check if the ticket container exists
    const ticket = screen.getByTestId('ticket');
    expect(ticket).toBeInTheDocument();
    
    // Check if all required fields are present
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    
    // Check if the avatar is rendered
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain('data:image/png;base64,test');
    
    // Check if ticket number is displayed
    expect(screen.getByText('#123456')).toBeInTheDocument();
  });

  test('renders default values when no data is provided', () => {
    render(<Ticket />);
    
    // Check if the ticket container exists
    const ticket = screen.getByTestId('ticket');
    expect(ticket).toBeInTheDocument();
    
    // Check if default values are present
    expect(screen.getByText('Your Name')).toBeInTheDocument();
    expect(screen.getByText('Position')).toBeInTheDocument();
    
    // Check if default avatar is rendered
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
  });

  test('does not render content when avatar is not provided', () => {
    const props = {
      name: 'John Doe',
      position: 'Software Engineer',
      ticketNumber: '#123456'
      // No avatar provided
    };
    
    render(<Ticket {...props} />);
    
    // When no avatar is provided, the content should not render
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Software Engineer')).not.toBeInTheDocument();
  });
});