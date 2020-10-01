import useLocalStorage from "./useLocalStorage"

const useDarkMode = (key,initalValue) => { 
    const [darkMode, setDarkMode] = useLocalStorage(key, initalValue);
    //Again we are deconstructing out the darkmode value
    return [darkMode, setDarkMode];
};
//Only a ziggs main would countinue reading this far
export default useDarkMode;