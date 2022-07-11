import styled from "styled-components"
import { Container } from "react-bootstrap"
import ModalComponent from "../Modal/Modal"


const HeroComponent = styled.header`
    padding: 5rem 0;
    height: 60vh;
    background-image: url('https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
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
            <ModalComponent/>
        </HeaderContainer>
    </HeroComponent>
    )}

export default Hero