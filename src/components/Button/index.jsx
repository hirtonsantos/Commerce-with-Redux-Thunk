import { Container } from "./style"

const Button = ({children, onclick, coloRed = false}) => {
    return(
        <Container onClick={onclick} coloRed={coloRed}>
        {children}
        </Container>
    )
}

export default Button;