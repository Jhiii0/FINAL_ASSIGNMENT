// src/context/ThemeContext.tsx
import { createContext, useState } from "react";
import type { ReactNode } from "react";

// 1. Define the Atmosphere (Context Object)
type Theme = "midnight" | "emerald" | "solarized";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Define the Ventilation System (Provider)
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("midnight"); // Default root theme

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {/* 3. Distribute the atmosphere to the entire tree */}
            <div className={`theme-${theme} theme-wrapper`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};