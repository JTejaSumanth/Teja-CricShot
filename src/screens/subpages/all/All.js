import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './_all.scss';

const All = ({ active }) => {
    if ( !active ) return null;
    const battingIndex = "all/0";
    const bowlingIndex = "all/1";
    const fieldingIndex = "all/2";
    const wkIndex = "all/3";
    return(
        <Basic className='_basic'>
            <Bat className='_bat'>
                <Link to={`/video/${battingIndex}`}>
                    <img src='/images/bat.jpg' alt="Batting" />
                    <p>Batting</p>
                </Link>
            </Bat>
            <Align className='_align'>
                <Ball className='_ball'>
                    <Link to={`/video/${bowlingIndex}`}>
                        <img src='/images/ball.jpg' alt="Bowling" />
                        <p>Bowling</p>
                    </Link>
                </Ball>
                <Field className='_field'>
                    <Link to={`/video/${fieldingIndex}`}>
                        <img src='/images/field.jpg' alt="Fielding" />
                        <p>Fielding</p>
                    </Link>
                </Field>
            </Align>
            <Wk className='_wk'>
                <Link to={`/video/${wkIndex}`}>
                    <img src='/images/wk.jpg' alt="Wicket Keeping" />
                    <p>Wicket Keeping</p>
                </Link>
            </Wk>
        </Basic>
    );
};

const Basic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bat = styled.div``;

const Align = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ball = styled.div``;

const Field = styled.div``;

const Wk = styled.div``;

export default All;