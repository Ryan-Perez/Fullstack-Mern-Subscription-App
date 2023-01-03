import styled from "styled-components"
import { Container } from "react-bootstrap"
import ModalComponent from "../Modal/Modal"


const HeroComponent = styled.header`
    padding: 5rem 0;
    height: 60vh;
    background-image: url('landscape.jpg');
    background-size: cover;
    background-position: center;
`

const HeaderContainer = styled.div`
    background-color: rgb(54, 81, 94);
    padding: 3rem;
    color: white;
    width: 32.5rem;
    `

const Heading = styled.h1`
    font-size: 5rem;
`

const SubHeading = styled.h3`
    margin: 1 rem 0;
    font-weight: 400;
`

const Hero = () => {
    return (
    <HeroComponent>
        <HeaderContainer>
            <Heading>Feed your mind with the best</Heading>
            <SubHeading>
                Grow, learn, and become more successful by reading some of the top articles by highly reputable individuals.
            </SubHeading>
            <ModalComponent 
                text='Signup' variant="primary" isSignupFlow={true}
            />
            <ModalComponent 
                text='Login' variant='danger' isSignupFlow={false}
            />
        </HeaderContainer>
    </HeroComponent>
    )}

export default Hero