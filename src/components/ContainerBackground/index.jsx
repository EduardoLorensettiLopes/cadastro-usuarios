import { ContainerBg } from "./styles"

function Container({children,...props}){
    return(
        <ContainerBg {...props}>{children}</ContainerBg>
    )
}

export default Container