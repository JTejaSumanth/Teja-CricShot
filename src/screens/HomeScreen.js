import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Categoriesbar from '../components/categoriesbar/Categoriesbar';
import All from './subpages/all/All';
import Orthodox from './subpages/Orthodox';
import Unorthodox from './subpages/Unorthodox';
import Fast from './subpages/Fast';
import Offspin from './subpages/Offspin';
import Legspin from './subpages/Legspin';
import Fielding from './subpages/Fielding';
import Wk from './subpages/Wk';
import Pitch from './subpages/Pitch';

const HomeScreen = () => {
  const defaultKeyword = 'All';
  const storedDefaultKeyword = localStorage.getItem('defaultKeyword') || defaultKeyword;
  const [activeKeyword, setActiveKeyword] = useState(storedDefaultKeyword);
  const handleKeywordClick = (keyword) => setActiveKeyword(keyword);
  const keywords = ['All', 'Orthodox Batting', 'Unorthodox Batting', 'Fast Bowling', 'Off-spin Bowling', 'Leg-spin Bowling', 'Fielding', 'Wicket Keeping', 'Types of Pitches & Rules'];
  useEffect(() => { 
    localStorage.setItem('defaultKeyword', activeKeyword); 
  }, [activeKeyword]);

  return (
    <Div className='homescreen'>
      <Info>
        <p>* Click on a keyword for appropriate sections.</p>
      </Info>
      <Container>
        <Categoriesbar keywords={keywords} activeKeyword={activeKeyword} onKeywordClick={handleKeywordClick} />
        <All active={activeKeyword === 'All'} />
        <Orthodox active={activeKeyword === 'Orthodox Batting'} />
        <Unorthodox active={activeKeyword === 'Unorthodox Batting'} />
        <Fast active={activeKeyword === 'Fast Bowling'} />
        <Offspin active={activeKeyword === 'Off-spin Bowling'} />
        <Legspin active={activeKeyword === 'Leg-spin Bowling'} />
        <Fielding active={activeKeyword === 'Fielding'} />
        <Wk active={activeKeyword === 'Wicket Keeping'} />
        <Pitch active={activeKeyword === 'Types of Pitches & Rules'} />
      </Container>
    </Div>
  );
};

const Div = styled.div`
  background: #121417;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
`;

const Info = styled.p`
  padding-left: 2%;
  font-size: 10px;
  letter-spacing: 1.5px;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 0px;
  @media (min-width: 1231px) { 
    font-size: 12px;
  }  
`;

export default HomeScreen;