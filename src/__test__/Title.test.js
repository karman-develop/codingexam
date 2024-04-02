import { render, screen } from "@testing-library/react";
import { Title } from "../components/Title";

describe("Title Component Test", () => {
  it("heading title", () => {
    render(<Title />);
    const headElement1 = screen.getByRole("heading", {
      name: "フロントエンドコーディング試験",
    });
    const headElement2 = screen.getByRole("heading", {
      name: "都道府県別人口推移",
    });
    expect(headElement1).toBeInTheDocument();
    expect(headElement2).toBeInTheDocument();
  });
});
