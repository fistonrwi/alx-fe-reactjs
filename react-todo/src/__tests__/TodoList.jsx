// src/__tests__/TodoList.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders todo list and adds, toggles, and deletes todos', () => {
  render(<TodoList />);
  
  // Add a new todo
  fireEvent.change(screen.getByPlaceholderText(/add new todo/i), { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByText(/add todo/i));

  // Check if the todo is added
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
  
  // Toggle the todo
  fireEvent.click(screen.getByText('Test Todo'));
  expect(screen.getByText('Test Todo')).toHaveClass('completed'); // Assuming completed todos have a class 'completed'
  
  // Delete the todo
  fireEvent.click(screen.getByText('Delete')); // Assuming there is a delete button
  expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
});
