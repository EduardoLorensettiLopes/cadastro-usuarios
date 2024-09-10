import { Background } from "./stylex"

function TopBackground({children, ...props}){
    return(
        <Background {...props} >{children}</Background>
    )
}

export default TopBackground