import { fireEvent, render, screen } from "@testing-library/react";
import { Chart } from "../components/Chart";

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

describe("Chart Component Test", () => {
  // const data = [{ year: 2045, value: 5000 }];
  it("render display", async () => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
      }));

    render(<Chart />);
  });
});
