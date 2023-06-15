import { useSelector } from "react-redux"

const Text = ({children, size, weight, marginT, marginB, marginR, marginL , padding}) => {

    const theme = useSelector((state) => state.themeReducer?.theme);

    const textStyle = {
        fontSize : size ? `${size}rem` : undefined,
        fontWeight : weight ? `${weight}` : undefined,
        marginTop : marginT ? `${marginT}px` : undefined,
        marginBottom : marginB ? `${marginB}px` : undefined,
        marginRight : marginR ? `${marginR}px` : undefined,
        marginLeft : marginL ? `${marginL}px` : undefined,
        padding : padding ? `${padding}px` : undefined,
    }

  return (
    <>
        <p className={`${theme === "dark" ? `text-white` : "text-black" }`} style={textStyle}>
            {children}
        </p>
    </>
  )
}

export default Text
