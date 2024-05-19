import * as React from "react";
import { ThemeContext, ThemeContextType } from "./ThemeProvider";
import { render } from "../util/rtl-custom";

const TestComp = () => {
    const { theme } = React.useContext(ThemeContext) as ThemeContextType;
    return <>{theme}</>
}

it("renders component with default theme 'light'", () => {
    const { getByText } = render(<TestComp />);

    expect(getByText("light")).toBeInTheDocument();
});

