import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function(props) {
    return (
        <Container>
            <ContainerHeader>
                <MyNameContainer>
                    <span>Wellerson</span>
                    <span>Software developer</span>
                </MyNameContainer>
                <ImgContainer>
                    <img src={require('./../../images/person.jpg')} />
                </ImgContainer>
            </ContainerHeader>
            <AboutContainer>
                <IconsContainer>
                    <FontAwesomeIcon className="icon" icon={faTwitter}/>
                    <FontAwesomeIcon className="icon" icon={faGithub}/>
                    <FontAwesomeIcon className="icon" icon={faMedium}/>
                    <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </IconsContainer>
            </AboutContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: blanchedalmond;
    > div {
        flex: 1;
    }
    > div:nth-child(2) {
        flex: 2;
    }
`

const ContainerHeader = styled.div`
    flex: 1;
    background: #262425;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MyNameContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    > span:nth-child(1) {
        font-size: 2.5em;
        color: #fff;
        font-family: 'Oswald';
    }
    > span:nth-child(2) {
        font-size: 1em;
        color: #9fa8b2;
        font-family: 'Oswald';
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    > img {
        margin-bottom: -70px;
        z-index: 2;
        height: 10em;
        width: 10em;
        border-radius: 50%;
    }
`
const AboutContainer = styled.div`
    background: blanchedalmond;
    flex: 2;
    padding-top: 70px;
`

const IconsContainer = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    .icon {
        font-size: 2.2em;
        margin-right: 15px;
    };
    .icon:nth-child(4) {
        margin-right: 0%;
    }
    
`