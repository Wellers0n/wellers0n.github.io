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
                    <a href="">
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </a>
                    <a href="">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                    <a href="">
                        <FontAwesomeIcon className="icon" icon={faMedium} />
                    </a>
                    <a href="">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </a>
                </IconsContainer>
                <AboutMeContainer>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, distinctio iste? Hic vero
                        minima perspiciatis molestias beatae dolor, expedita laborum, deleniti ad reprehenderit suscipit
                        perferendis optio quidem accusantium soluta ex.
                    </span>
                </AboutMeContainer>
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
    padding-top: 15px;
    > span:nth-child(1) {
        font-size: 2.5em;
        color: #fff;
        font-family: 'Josefin Sans';
    }
    > span:nth-child(2) {
        font-size: 1em;
        color: #9fa8b2;
        font-family: 'Josefin Sans';
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
    background: #fff;
    flex: 2;
    padding-top: 70px;
`

const IconsContainer = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    > a {
        color: #262425;
        margin-right: 15px;
    }
    > a:nth-child(4) {
        margin-right: 0px;
    }
    .icon {
        font-size: 2.2em;
    }
`

const AboutMeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    > span {
        text-align: center;
        width: 50%;
        font-size: 1.3em;
        font-family: 'Josefin Sans';
    }
`
