import { Container, Title } from './style';

interface HeaderProps {
    title: string
}

export function Header({ title }: HeaderProps) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}


export default Header