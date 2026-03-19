import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock framer-motion for tests
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    button: 'button',
    span: 'span',
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useState: vi.fn(),
  useEffect: vi.fn(),
}));

// Mock window.scrollTo
window.scrollTo = vi.fn();
