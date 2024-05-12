import * as React from "react";
import { ThemeContext, ThemeContextType } from "./context/ThemeProvider";

function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      Current Theme is: {theme}
      <br />
      <button
        type="button"
        onClick={toggleTheme}
        className="btn"
      >Switch Theme</button>
    </>
  );
}

export default App
