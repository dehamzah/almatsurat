import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { NumberControl } from "./NumberControl";
import { describe, expect, it, vi } from "vitest";

describe("NumberControl", () => {
  it("renders the component with the provided value", () => {
    render(
      <NumberControl
        value={5}
        onClickReduce={vi.fn()}
        onClickIncrement={vi.fn()}
      />
    );

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls onClickReduce when the minus button is clicked", () => {
    const mockReduceFn = vi.fn();
    render(
      <NumberControl
        value={5}
        onClickReduce={mockReduceFn}
        onClickIncrement={vi.fn()}
      />
    );

    const minusButton = screen.getByTestId("reduce-button");
    fireEvent.click(minusButton);

    expect(mockReduceFn).toHaveBeenCalledTimes(1);
  });

  it("calls onClickIncrement when the plus button is clicked", () => {
    const mockIncrementFn = vi.fn();
    render(
      <NumberControl
        value={5}
        onClickReduce={vi.fn()}
        onClickIncrement={mockIncrementFn}
      />
    );

    const plusButton = screen.getByTestId("increment-button");
    fireEvent.click(plusButton);

    expect(mockIncrementFn).toHaveBeenCalledTimes(1);
  });

  it("displays the updated value when props change", () => {
    const { rerender } = render(
      <NumberControl
        value={5}
        onClickReduce={vi.fn()}
        onClickIncrement={vi.fn()}
      />
    );

    expect(screen.getByText("5")).toBeInTheDocument();

    // Rerender with a new value
    rerender(
      <NumberControl
        value={10}
        onClickReduce={vi.fn()}
        onClickIncrement={vi.fn()}
      />
    );

    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
