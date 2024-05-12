import * as React from "react";

export type Theme = "light" | "dark";

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme => (theme === "light") ? "dark" : "light");
    }

    React.useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}