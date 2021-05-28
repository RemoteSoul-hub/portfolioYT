import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
    return (
        <FullNav>
    <Nav>
    <Logo>Logo</Logo>
    <Links>
    <Link>About Me</Link>
    <Link>Projects</Link>
    <Link>Contact</Link>
    </Links>
    </Nav>
    <Social>
        <SocialLink>
            <a href="/"><FontAwesomeIcon icon={faCoffee} /></a>
        </SocialLink>
        <SocialLink>
        <a href="/"><FontAwesomeIcon icon={faCoffee} /></a>
            </SocialLink>
        <SocialLink> 
        <a href="/"><FontAwesomeIcon icon={faCoffee} /></a>
             </SocialLink>
    </Social>
    </FullNav>
)};

const FullNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #154b8d;
    align-items: center;
    height: 10vh;
`;


const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20px;
`;

const Social = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: flex-start;
padding-right: 20px;
`;

const Links = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        visibility: hidden;
    }
`;
const Logo = styled.div`
        padding-left: 10px;
`;

const Link = styled.div`
        padding: 10px;
`;

const SocialLink = styled.div`
    margin-right: 20px;
`;

export default Header;