import { ThemeProvider } from "./context/ThemeProvider";
import App from "./App";
import { render } from "./util/rtl-custom";

describe("<App />", () => {
    it("renders the default theme 'light'", () => {
        const expectedText = "Current Theme is: light"
        const { getByText } = render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );

        expect(getByText(expectedText)).toBeInTheDocument();
    });
});