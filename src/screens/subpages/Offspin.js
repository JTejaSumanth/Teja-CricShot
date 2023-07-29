import React, {useState} from "react";
import styled from "styled-components";
import { MdPlayCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Offspin = ({ active }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => { setHoveredIndex(index); };
  const handleMouseLeave = () => { setHoveredIndex(null); };
  if ( !active ) return null;

  return(
    <Container>
      {data.map((item, index) => (
        <Wrap key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
          <img src={item.image} alt={item.name} style={{ opacity: 0.8, objectFit: 'contain' }} />
          <BgImage src={item.backgroundImage} alt="" style={item.style} />
          {hoveredIndex === index && (
            <>
              <Link to={`/video/offspin/${index}`}>
                <MdPlayCircle size={30} style={{position:'absolute',color:'black',cursor:'pointer',zIndex:'2',bottom:'0.3rem',right:'0.3rem',width:'auto',padding:'0rem',background:'whitesmoke',borderRadius:'50%'}} />
                <video autoPlay={true} loop={true} playsInline={true}>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Link>
            </>
          )}
        </Wrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding-right: 1%;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-left: 0%;
    margin-right: 2%; 
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit:cover;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: grey;    
    img {
      opacity: 0;
    }
    
    video {
      opacity: 1;
    }
  }
`;

const BgImage = styled.img`
  object-position: 70% 30%;
  object-fit: cover;
`;

const data = [
  {
    name: "Off break",
    image: "/images/bowling/offbreak.png",
    backgroundImage: "/images/bowling/off-break.jpg",
    video: "/videos/bowling/offbreak.mp4",
    style: {objectPosition: '0% 70%'},
  },
  {
    name: "Carrom ball",
    image: "/images/bowling/carrom.png",
    backgroundImage: "/images/bowling/carrom-ball.jpeg",
    video: "/videos/bowling/carrom.mp4",
  },
  {
    name: "Arm ball",
    image: "/images/bowling/arm.png",
    backgroundImage: "/images/bowling/arm-ball.jpg",
    video: "/videos/bowling/arm.mp4",
    style: {objectPosition: '0% 12%'},
  },
  {
    name: "Top spin",
    image: "/images/bowling/top.png",
    backgroundImage: "/images/bowling/top-spin.jpg",
    video: "/videos/bowling/top.mp4",
    style: {objectPosition: '40% 30%'},
  },
  {
    name: "Doosra",
    image: "/images/bowling/doosra.png",
    backgroundImage: "/images/bowling/doosra.jpg",
    video: "/videos/bowling/doosra.mp4",
  },
  {
    name: "Teesra",
    image: "/images/bowling/teesra.png",
    backgroundImage: "/images/bowling/teesra.jpg",
    video: "/videos/bowling/teesra.mp4",
    style: {objectPosition: '0% 12%'},
  },
];

export default Offspin;