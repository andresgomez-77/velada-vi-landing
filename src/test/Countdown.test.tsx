import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Countdown } from '../components/Countdown/Countdown';

// Mock useCountdown hook
vi.mock('../hooks/useCountdown', () => ({
  useCountdown: () => ({
    days: 25,
    hours: 12,
    minutes: 30,
    seconds: 45,
  }),
}));

describe('Countdown', () => {
  it('renders all time units', () => {
    const futureDate = new Date('2026-07-25T20:00:00+02:00');
    render(<Countdown targetDate={futureDate} />);
    
    expect(screen.getByText('DÍAS')).toBeInTheDocument();
    expect(screen.getByText('HORAS')).toBeInTheDocument();
    expect(screen.getByText('MIN')).toBeInTheDocument();
    expect(screen.getByText('SEG')).toBeInTheDocument();
  });

  it('displays time values correctly', () => {
    const futureDate = new Date('2026-07-25T20:00:00+02:00');
    render(<Countdown targetDate={futureDate} />);
    
    // Los valores deberían estar en el documento
    expect(screen.getByText(/25/)).toBeInTheDocument();
    expect(screen.getByText(/12/)).toBeInTheDocument();
    expect(screen.getByText(/30/)).toBeInTheDocument();
    expect(screen.getByText(/45/)).toBeInTheDocument();
  });
});
