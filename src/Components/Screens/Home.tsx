import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
export default function(props) {
    return (
        <Container>
            <ContainerTitle>
                <Title>Wellerson</Title>
                <SubTitle>Software developer</SubTitle>
            </ContainerTitle>
            <ContainerImg>
                <img src={require('./../../images/person.jpg')} />
            </ContainerImg>
            <ContainerAbout>
                <Icons>
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </Icons>
                <div>aaa</div>
            </ContainerAbout>
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
        display: flex;
        flex: 1;
    }
`
const ContainerTitle = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    padding-top: 10px;
    justify-content: flex-start;
    align-items: center;
    background: #262425;
`

const ContainerImg = styled.div`
    background: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    > img {
        border-radius: 50%;
        box-sizing: border-box;
        height: 200px;
        width: 200px;
        margin-top: -40px;
    }
`

const Title = styled.span`
    font-size: 3.5em;
    color: #fff;
    font-family: 'Oswald', sans-serif;
`
const SubTitle = styled.span`
    font-size: 1.5em;
    color: #a5a5a6;
    font-family: 'Oswald', sans-serif;
`

const ContainerAbout = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: blanchedalmond;

`

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 15px;
    /* background: red; */
    .icon {
        font-size: 2em;
        margin-right: 8px;
    }
`
const About = styled.div`
    
`