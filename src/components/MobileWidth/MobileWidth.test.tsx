import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MobileWidth } from "./MobileWidth";

describe("MobileWidth", () => {
  it("should render properly", () => {
    render(
      <MobileWidth>
        <div>Test Render</div>
      </MobileWidth>
    );
    expect(screen.getByText("Test Render")).toBeDefined();
  });
});
