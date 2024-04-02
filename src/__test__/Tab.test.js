import { render, screen } from "@testing-library/react";
import { Tab } from "../components/Tab";

describe("Tab Component Test", () => {
  it("tab text", () => {
    render(<Tab />);

    expect(screen.getByText(/総人口/i)).toBeInTheDocument();
    expect(screen.getByText(/年少人口/i)).toBeInTheDocument();
    expect(screen.getByText(/生産年齢人口/i)).toBeInTheDocument();
    expect(screen.getByText(/老年人口/i)).toBeInTheDocument();
  });
});
