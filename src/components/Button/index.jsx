import { Container } from "./style"

const Button = ({children, onclick}) => {
    return(
        <Container onClick={onclick}>
        {children}
        </Container>
    )
}

export default Button;