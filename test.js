// Simple test to validate our implementation
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './src/App';

// Mock DOM
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Create a simple test container
const container = document.createElement('div');
document.body.appendChild(container);

// Test rendering the app
try {
  act(() => {
    const root = createRoot(container);
    root.render(React.createElement(App));
  });
  
  console.log('✅ App renders successfully');
  
  // Check if the title is present
  if (container.textContent.includes('Conference Ticket Generator')) {
    console.log('✅ Title is present');
  } else {
    console.log('❌ Title is missing');
  }
  
  // Check if form inputs are present
  const inputs = container.querySelectorAll('input');
  if (inputs.length >= 3) {
    console.log('✅ Form inputs are present');
  } else {
    console.log('❌ Some form inputs are missing');
  }
  
} catch (error) {
  console.error('❌ Error rendering app:', error);
}

// Clean up
document.body.removeChild(container);