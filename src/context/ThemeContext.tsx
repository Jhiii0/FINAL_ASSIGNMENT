// src/context/ThemeContext.tsx
import { createContext, useState } from "react";
import type { ReactNode } from "react";

// 1. Define the Atmosphere (Context Object)
type Theme = "light" | "dark" | "ocean" | "forest";
type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Define the Ventilation System (Provider)
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {/* 3. Distribute the atmosphere to the entire tree */}
            <div className={`theme-${theme} min-h-screen`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};