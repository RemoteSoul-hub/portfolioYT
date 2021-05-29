import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
    return (
        <FullNav>
    <Nav>
    <Logo>Logo</Logo>
    <Links>
   <a href="/"><span>About Me</span></a>
   <a href="/"><span>Projects</span></a>
   <a href="/"><span>Contact</span></a>
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
        <SocialLink> 
        <a href="/"><FontAwesomeIcon icon={faCoffee} /></a>
         </SocialLink>
    </Social>
    </FullNav>
)};

const FullNav = styled.div`
    position: fixed;
     top: 0;
     left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #154b8d;
    align-items: center;
    height: 10vh;
    z-index: 1000;
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
align-items: center;
display: flex;
flex-flow: row no-wrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;
        a{
            padding: 10px;
            display: flex;
            min-width: 100px;
            z-index: auto;
            text-decoration: none;
            span {
                color: rgb(249,249,249);
                font-size: 16px;
                letter-spacing: 1.1px;
                line-height: 1.08;
                padding: 2px 0px;
                white-space: no-wrap;
                position: relative;
                &:before {
                    background-color: #5edcf8;
                    border-radius: 0 0 4px 4px;
                    bottom: -6px;
                    content: "";
                    height: 2px;
                    left: 0px;
                    opacity: 0;
                    position: absolute;
                    right: 0px;
                    transform-origin: left center;
                    transform: scaleX(0);
                    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                    visibility: hidden;
                    width: auto;
                }
            }
            &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
        }
    @media (max-width: 768px) {
        /* visibility: hidden; */
        display: none;
    }
`;
const Logo = styled.div`
        padding-left: 10px;
`;


const SocialLink = styled.div`
    margin-right: 20px;
`;


export default Header;