import App from "./App";
import { render } from "./util/rtl-custom";

describe("<App />", () => {
    it("renders the default theme 'light'", () => {
        const expectedText = "Current Theme is: light"
        const { getByText } = render(<App />);

        expect(getByText(expectedText)).toBeInTheDocument();
    });
});