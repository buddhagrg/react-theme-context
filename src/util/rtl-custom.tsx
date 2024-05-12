import * as React from "react";
import { Theme, ThemeContext, ThemeContextType } from "../context/ThemeProvider";
import { RenderOptions, render } from "@testing-library/react";

interface ExtendedRenderedOptions extends RenderOptions {
    theme: Theme;
    toggleTheme: () => void;
};

const customRender = (
    ui: React.ReactElement<any>,
    options?: Omit<ExtendedRenderedOptions, "wrapper">
) => {
    const defaultValues: ThemeContextType = {
        theme: "light",
        toggleTheme: () => { }
    };

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
        return (
            <ThemeContext.Provider value={{ ...defaultValues, ...options }}>
                {children}
            </ThemeContext.Provider>
        );
    }

    return render(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
export { customRender as render };