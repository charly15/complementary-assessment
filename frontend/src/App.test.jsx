import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

beforeEach(() => {
  vi.restoreAllMocks();
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Hello from API!' })
    })
  );
});

test('renders header and fetched message', async () => {
  render(<App />);
  expect(screen.getByText(/Complementary Assessment/i)).toBeInTheDocument();

  // espera a que aparezca el texto de la API
  await waitFor(() => screen.getByText(/Message from API:/i));
  expect(screen.getByText(/Hello from API!/i)).toBeInTheDocument();
});
