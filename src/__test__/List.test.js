import { render, screen, fireEvent } from "@testing-library/react";
import { List } from "../components/List";

const propsItem = {
  prefName: "北海道",
  prefCode: 1,
};

const propsName = "大阪";

const mock = jest.fn();

describe("List Component Test", () => {
  test("render label & radio element", () => {
    render(<List item={propsItem} name={propsName} onChange={mock} />);

    fireEvent.click(screen.getByRole("radio"));

    expect(screen.getByText(/北海道/i)).toBeInTheDocument();
  });
});
