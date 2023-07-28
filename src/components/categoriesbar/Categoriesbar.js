import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./_categoriesbar.scss";

const Categoriesbar = ({ keywords, activeKeyword, onKeywordClick }) => {
  const defaultKeyword = 'All';
  const [selectedKeyword, setSelectedKeyword] = useState(activeKeyword);
  useEffect(() => { setSelectedKeyword(activeKeyword || defaultKeyword); }, [activeKeyword]);
  useEffect(() => { setSelectedKeyword(activeKeyword || defaultKeyword); }, [activeKeyword]);
  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
    onKeywordClick(keyword);
  };

  return (
    <Nav className="categoriesbar">
      {keywords.map((keyword) => (
        <button key={keyword} className={selectedKeyword === keyword ? 'active' : ''} onClick={() => handleKeywordClick(keyword)}>
          {keyword}
        </button>
      ))}
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 0;
  display: flex;
  overflow-x: scroll;
`;

export default Categoriesbar;