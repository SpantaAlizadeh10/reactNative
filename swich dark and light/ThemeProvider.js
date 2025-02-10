import react, {Children, createContext, useState} from "react";


export const ThemeContext = createContext({
    theme: "light",
});

export const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>{
        setTheme (theme === "light"? "dark": "light");
    };

    return (

        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
        );

};