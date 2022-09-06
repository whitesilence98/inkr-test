import * as React from "react";

import {setItem} from "@utils/localStorage.utils";

interface ThemeContextProps {
   isDark: boolean;
   theme: "dark" | "light";
   handleToggle?: () => void;
}

export const ThemeProvider: React.FC = ({children}) => {
   const [isDark, setIsDark] = React.useState(false);

   const theme = React.useMemo(() => {
      return isDark ? "dark" : "light";
   }, [isDark]);

   const handleToggle = (): void => {
      setIsDark(prev => !prev);
      setTimeout(() => setItem<string>("theme", isDark ? "light" : "dark"), 100);
   };

   return (
      <ThemeContext.Provider value={{isDark, theme, handleToggle}}>
         <div data-theme="dark">{children}</div>
      </ThemeContext.Provider>
   );
};

export const ThemeContext = React.createContext<ThemeContextProps>({
   isDark: false,
   theme: "dark",
});

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;
