import {
    BsFillSunFill,
    BsFillMoonFill,
} from "react-icons/bs";
import styles from '../Header/header.module.css';
import { useDispatch, useSelector } from "react-redux";
import {themeReducer} from '../../store/features/themeSlice';

const ThemeSwitch = () => {

    // dark-light-mode toggle state

    const dispatch = useDispatch();

    const theme = useSelector((state) => state.themeReducer?.theme);

    const handleThemeChange = (theme) => {
        dispatch(themeReducer(theme))
    }

    // hover:text-[#0e1630] //hover moon

    return (
        <>
            <div className={`${styles['theme-icon']}`}>
            {
                theme === "light" ? <BsFillMoonFill className={`cursor-pointer text-[#ffffff] hover:text-stone-500 text-md ease-in duration-100`} onClick={() => handleThemeChange("dark")} /> : <BsFillSunFill className={`cursor-pointer text-[#ffffff] hover:text-yellow-300 text-md ease-in duration-100`} onClick={() => handleThemeChange("light")} />
            }
            </div>
        </>
    )
}

export default ThemeSwitch
