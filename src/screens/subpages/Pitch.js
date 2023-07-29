import React from "react";
import styled from 'styled-components';
const Pitch = ({ active }) => {
    if ( !active ) return null;
    return(
        <Container>
            <Wrap>
                <a href="https://www.icc-cricket.com/about/cricket/rules-and-regulations/playing-conditions">Rules Of Cricket</a>
                <a href="https://www.itsonlycricket.com/types-of-cricket-pitches">Pitch Report & Analysis</a>
            </Wrap>
            <Img>
                <img src="/images/pitch.jpg" alt="Diff pitches"/>
            </Img>
        </Container>
    );
};

const Img = styled.div`
    border: 0.1em solid red;
    img {
        width: 100%;
    }
`;

const Wrap = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Kalam&family=Montserrat&family=Permanent+Marker&family=Satisfy&family=Shantell+Sans&family=Zeyada&display=swap');    
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    column-gap: 20%;
    
    a {
        border: 2px solid aqua;
        border-radius: 10px;
        padding: 1.5%;
        color: white;
        font-weight: bold;
        line-height: 1.7;
        letter-spacing: 1px;
        background-color: #3e5363;
        font-family: 'Kalam', cursive;
        font-size: 13px;
        &:hover {
            transform: scale(1.05);
        }
    }
`;

const Container = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 1%;
    padding-top: 9%;    
    @media (min-width: 1221px) {
        padding-top: 6%;        
        ${Img} {
            img {
                height: 325px;
            }
        }
        ${Wrap} {
            white-space: nowrap;
        }
    }

    @media (min-width: 721px) and (max-width: 1220px) {
        padding-top: 5%;    
        ${Img} {
            img {
                height: 275px;
            }
        }
        ${Wrap} {
            white-space: nowrap;
            a {
                font-size: 11px;
            }
        }
    }    

    @media (min-width: 551px) and (max-width: 720px) {
        ${Img} {
            img {
                height: 250px;
            }
        }
        ${Wrap} {
            white-space: nowrap;
            a {
                font-size: 10px;
            }
        }
    }

    @media (max-width: 550px) {
        margin-left: 0%;
        margin-right: 4%;
        ${Img} {
            img {
                height: 210px;
            }
        }
        ${Wrap} {
            a {
                padding-left: 5%;
                padding-right: 0%;
                font-size: 8px;
            }
        }
    }
`;

export default Pitch;