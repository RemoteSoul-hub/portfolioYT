import styled from 'styled-components';

const Contact = (props) => {
    return <Container id="Contact">
        <TopContainer>
        <Line></Line>
        <Title><BlueText>C</BlueText>ontact</Title>
        </TopContainer>
        <Flex>
            <TextDescription>
                <h2>Currently Looking for new opportunities, my mail inbox is always open. Whether you want to start a conversation or just send some good vibes, I'll try my best to get back to you!</h2>
                <hr/>
            </TextDescription>
        </Flex>
        <h1>My E-Mail:</h1>
        <Resume>
           <a href="/"> <p>yahya.tahoune@gmail.com </p> </a>
        </Resume>
    </Container>
}
const Container = styled.div`
    margin-bottom: 50px;
    background-color: #041831;
    height: 70vh;
    color: #5edcf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    position: relative;
    padding: 0 26px;
    h1{
        margin-top: 1.5em;
        color:#5edcf8; 
    }
    h2{
        margin-top: 1.5em;
        font-weight: normal;
    }
    `;
    const TopContainer = styled.div`
    margin-right: 41%;
    position: relative;
    white-space: nowrap;
    padding: 50px;
`;
const Line = styled.div`
    display: block;
    position: relative;
    background-color: #5edcf8;
    width: 100%;
    height: 5px; 
    border-radius: 5px;
    transform: scale(0.8);
    transition: transform 250ms ease-in;
    margin-left: -110%;
    @media (max-width: 768px) {
        position: absolute;
    }
`;
const Title = styled.div`
    font-size: 32px;
    text-align: left;
    margin-left: -100%;
    font-weight: bold;
    display: block;
    @media (max-width: 768px) {
        position: absolute;
    }
`;

const BlueText = styled.div`
 color: #5edcf8;
 display: inline;
 font-weight: bold;
`;
const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const TextDescription = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
        h2 {
            font-size: 22px;
            padding: 20px;
        }
        h3 {
            font-size: 16px;
            font-weight: normal;
            padding: 10px;
        }
        h4 {
            font-size: 14px;
            font-weight: normal;
            padding: 10px;
        }
        @media (max-width: 768px) {
            width: auto;
        }
`;
const Resume = styled.button`
font-size: 15px;
margin-top: 20px;
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

@media (max-width: 1000px) {
    height: 20px;
    font-size: 12px;
}
`;

export default Contact;