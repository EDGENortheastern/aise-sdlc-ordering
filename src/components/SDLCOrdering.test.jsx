import { render, screen } from "@testing-library/react";
import SDLCOrdering from "./SDLCOrdering";

describe("SDLCOrdering", () => {
  it("renders all SDLC phases", () => {
    render(<SDLCOrdering />);

    expect(screen.getByText(/Feasibility Study/i)).toBeInTheDocument();
    expect(screen.getByText(/Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Maintenance/i)).toBeInTheDocument();
  });
});
