import { useSelector } from "react-redux"

const ThemeLayout = ({children}) => {

    const theme = useSelector((state) => state.themeReducer?.theme);

  return (
    <>
        <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
            {children}
        </div>    
    </>
  )
}

export default ThemeLayout
