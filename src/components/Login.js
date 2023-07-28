import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken)
    const history = useHistory();
    const handleLogin = () => {
        dispatch(login())
    };
    useEffect(() => {
        if (accessToken) {
           history.push('/')
        }
    }, [accessToken, history])   
    return (
        <Container>
            <Content>
                <CTA>
                    <Logo>    
                        <LogoOne src="/images/icon.png" alt="Cricshot"/>
                    </Logo>
                    <SignUp onClick={handleLogin}>GET IN NOW</SignUp>
                    <Description>
                        This is a beautiful website for cricket lovers & beginners to 
                        learn and improve their skills in both batting & bowling from the 
                        tutorial videos available on this site.
                    </Description>
                    <Sponsor>
                        <CTALogoOne src="/images/sponsor-1.png" alt="" />
                        <CTALogoTwo src="/images/sponsor-2.png" alt="" />
                    </Sponsor>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};
  
const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background: black;
    z-index: -1;
`;
  
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    width: 80%
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.png");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    opacity: 0.3;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
`;

const LogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 40%;
    height: 70%;
    z-index: 2;
    border: 2px solid black;
    box-shadow: 5px 5px 25px pink;
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Kalam&family=Montserrat&family=Permanent+Marker&family=Satisfy&family=Shantell+Sans&family=Zeyada&display=swap');    
    font-family: 'Kalam', cursive;
    font-size: 40px;
    color: white;
`;

const SignUp = styled.button`
    font-weight: bold;
    color: black;
    background-color: #ffa500;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 15px;
    text-decoration: none;
    z-index: 2;
    
    &:hover {
        background-color: #000000;
        color: #ffa500;
        box-shadow: 2px 2px 20px skyblue;
        text-decoration: none;
    }
`;

const Description = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Kalam&family=Montserrat&family=Permanent+Marker&family=Satisfy&family=Shantell+Sans&family=Zeyada&display=swap');    
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 16px;
    margin: 0 0 24px;
    font-weight: bold;
    line-height: 1.7;
    letter-spacing: 1px;
    font-family: 'Kalam', cursive;
`;

const Sponsor = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 25%;
    height: 60%;
    z-index: 2;
    opacity: 0.9;
    background-color: #ffffff;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 25%;
    height: 60%;
    z-index: 2;
    opacity: 0.9;
    background-color: #ffffff;
`;

export default Login;