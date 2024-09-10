import { Container } from "./styles"

function ContainerUsers({children, ...props}){
    return(
        <Container {...props}>{children}</Container>
    )
}

export default ContainerUsers