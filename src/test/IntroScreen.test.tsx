import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntroScreen } from "../components/Intro/IntroScreen";

// Mock framer-motion
/* eslint-disable @typescript-eslint/no-explicit-any */
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useState: vi.fn((init) => {
    // Simular que isLoaded es true
    if (init === false) return [true, vi.fn()];
    return [init, vi.fn()];
  }),
  useEffect: vi.fn((cb) => cb()),
}));
/* eslint-enable @typescript-eslint/no-explicit-any */

describe("IntroScreen", () => {
  it("renders the intro screen with title", async () => {
    const mockOnEnter = vi.fn();
    render(<IntroScreen onEnter={mockOnEnter} />);

    await waitFor(() => {
      expect(screen.getByText(/LA VELADA/i)).toBeInTheDocument();
    });
  });

  it("renders the enter button", async () => {
    const mockOnEnter = vi.fn();
    render(<IntroScreen onEnter={mockOnEnter} />);

    await waitFor(() => {
      expect(screen.getByText(/ENTRAR AL EVENTO/i)).toBeInTheDocument();
    });
  });

  it("calls onEnter when button is clicked", async () => {
    const mockOnEnter = vi.fn();
    const user = userEvent.setup();

    render(<IntroScreen onEnter={mockOnEnter} />);

    const button = await screen.findByText(/ENTRAR AL EVENTO/i);
    await user.click(button);

    expect(mockOnEnter).toHaveBeenCalled();
  });
});
