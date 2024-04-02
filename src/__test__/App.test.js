import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

jest.mock("recharts", () => {
  const OriginalModule = jest.requireActual("recharts");
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe("Title Component Test", () => {
  it("render Japan47 & Click to Japan1 display graph", async () => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
      }));

    render(<App />);
    //初期状態
    expect(await screen.findByText(/東京都/)).toBeInTheDocument();
    expect(await screen.findByText(/北海道/)).toBeInTheDocument();
    expect(await screen.findAllByRole("radio")).toHaveLength(47);
    const inputNode1 = await screen.findByLabelText("北海道");
    expect(inputNode1).toBeChecked();
    expect(await screen.findByText(2035)).toBeInTheDocument();
    expect(await screen.findByText(2045)).toBeInTheDocument();
    expect(await screen.findByText(4500000)).toBeInTheDocument();
    //年少人口
    const inputNodeText1 = screen.getByText("年少人口");
    fireEvent.click(inputNodeText1);
    expect(await screen.findByText(2035)).toBeInTheDocument();
    expect(await screen.findByText(2045)).toBeInTheDocument();
    expect(await screen.findByText(1350000)).toBeInTheDocument();
    //二番目
    const inputNode2 = await screen.findByLabelText("秋田県");
    fireEvent.click(inputNode2);
    fireEvent.change(inputNode2, {
      target: { checked: true },
    });
    expect(inputNode2).toBeChecked();
    expect(await screen.findByText(2035)).toBeInTheDocument();
    expect(await screen.findByText(2045)).toBeInTheDocument();
    expect(await screen.findByText(1050000)).toBeInTheDocument();
    //年少人口
    const inputNodeText2 = screen.getByText("年少人口");
    fireEvent.click(inputNodeText2);
    expect(await screen.findByText(2035)).toBeInTheDocument();
    expect(await screen.findByText(2045)).toBeInTheDocument();
    expect(await screen.findByText(450000)).toBeInTheDocument();
  });
});
