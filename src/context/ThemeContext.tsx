import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";

// 1. Define the Atmosphere (Theme Types)
export type Theme = "light" | "dark" | "ocean" | "forest";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

// 2. Create the Context Object (the Atmosphere)
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Define the Ventilation System (Provider)
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    const handleSetTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    // Set initial theme on mount
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
            {/* Distribute the atmosphere to the entire tree */}
            <div className="theme-wrapper">
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// 4. Custom Hook — the Receiver (useContext)
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
