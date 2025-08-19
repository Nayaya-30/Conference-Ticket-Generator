// Simple test file to verify all components can be imported and rendered without errors
import { render } from '@testing-library/react';
import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Image from './Image.jsx';
import Ticket from './Ticket.jsx';

// Test that components can be rendered without throwing errors
try {
  render(<Input label="Test" />);
  console.log('Input component: OK');
} catch (error) {
  console.error('Input component error:', error);
}

try {
  render(<Button text="Test" />);
  console.log('Button component: OK');
} catch (error) {
  console.error('Button component error:', error);
}

try {
  render(<Image />);
  console.log('Image component: OK');
} catch (error) {
  console.error('Image component error:', error);
}

try {
  render(<Ticket />);
  console.log('Ticket component: OK');
} catch (error) {
  console.error('Ticket component error:', error);
}

console.log('All component tests completed');