import React from 'react'
import { render, fireEvent, cleanup, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(() => cleanup())

test('renders without crashing', () => {
  render(<App />)
})
