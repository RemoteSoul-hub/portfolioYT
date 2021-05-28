import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Intro = (props) => {
    return (
    <Container>
        <SmallerContainer>
        <TitleSmall>Hey it's me</TitleSmall>
        <TitleBig>Yahya Tahoune</TitleBig>
        <TitleBig1>Design. Code. Debug</TitleBig1>
        <TitleSmall1>Creating Functional, Clean and Elegant Web Experiences.</TitleSmall1>
        <Resume>
           <a href="/"> <p>Get My Resume </p> </a>
        </Resume>
        </SmallerContainer>
    </Container>
)};

const Container = styled.div`
    background-color: #041831;
    height: 90vh;
    color: #5edcf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    position: relative;
    @media (max-width: 900px) {
        text-align: center;

    }
`;

const SmallerContainer = styled.div`
        margin-right: 15%;
        margin-bottom: 5%;
        position: relative;
        white-space: nowrap;
        @media (max-width: 900px) {
            margin-right: 0;
        }
`;

const TitleSmall = styled.h3`
color: #5edcf8;
font-weight: bold;
margin-top: 15px;

@media (max-width: 900px) {
    font-size: 15px;
}
`;

const TitleBig = styled.h1`
    color: #fff;
    font-size: 5em;
    font-weight: bold;
    margin : -10px 10px;
    letter-spacing: 1.1px;
    @media (max-width: 900px) {
        font-size: 40px;
    }
`;

const TitleSmall1 = styled(TitleSmall)`
    color: white;
`;

const TitleBig1 = styled(TitleBig)`
    color: #5edcf8;
`;

const Resume = styled.button`
font-size: 15px;
margin: 20px 22px 0px 0px;
padding: 20px 24px;
height: 56px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249,249,249);
border: none;
color: black;
font-weight: bold;  
a {
    text-decoration: none;
}
&:hover {
    background: rgb(198,198,198);
}

@media (max-width: 900px) {
    margin-left: 28%;

}

`;

export default Intro;