import React, {useState} from "react";
import styled from "styled-components";
import { MdPlayCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Fast = ({ active }) => {
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
              <Link to={`/video/fast/${index}`}>
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
  object-position: 0% 30%;
  object-fit: cover;
`;

const data = [
  {
    name: "Inswinger",
    image: "/images/bowling/inswing.png",
    backgroundImage: "/images/bowling/in-swing.jpg",
    video: "/videos/bowling/inswinger.mp4",
  },
  {
    name: "Outswinger",
    image: "/images/bowling/outswing.png",
    backgroundImage: "/images/bowling/out-swing.jpg",
    video: "/videos/bowling/outswinger.mp4",
    style: {objectPosition: '0% 45%'},
  },
  {
    name: "Reverse swing",
    image: "/images/bowling/reverse.png",
    backgroundImage: "/images/bowling/reverse-swing.jpg",
    video: "/videos/bowling/reverse.mp4",
    style: {objectPosition: '0% 60%'},
  },
  {
    name: "Bouncer",
    image: "/images/bowling/bouncer.png",
    backgroundImage: "/images/bowling/bouncer.jpg",
    video: "/videos/bowling/bouncer.mp4",
    style: {objectPosition: '0% 20%'},
  },
  {
    name: "Seam bowling",
    image: "/images/bowling/seam.png",
    backgroundImage: "/images/bowling/cross-seam.jpg",
    video: "/videos/bowling/cross.mp4",
    style: {objectPosition: '0% 0%'},
  },
  {
    name: "yorker",
    image: "/images/bowling/yorker.png",
    backgroundImage: "/images/bowling/yorker.jpg",
    video: "/videos/bowling/yorker.mp4",
    style: {objectPosition: '0% 98%'},
  },
  {
    name: "Off cutter",
    image: "/images/bowling/off.png",
    backgroundImage: "/images/bowling/off-cutter.jpg",
    video: "/videos/bowling/off.mp4",
    style: {objectPosition: '0% 45%'},
  },
  {
    name: "Leg cutter",
    image: "/images/bowling/leg.png",
    backgroundImage: "/images/bowling/leg-cutter.jpg",
    video: "/videos/bowling/leg.mp4",
    style: {objectPosition: '0% 45%'},
  },
  {
    name: "Knuckle ball",
    image: "/images/bowling/knuckle.png",
    backgroundImage: "/images/bowling/knuckle-ball.jpg",
    video: "/videos/bowling/knuckle.mp4",
    style: {objectPosition: '0% 60%'},
  },
  {
    name: "Slower ball",
    image: "/images/bowling/slower.png",
    backgroundImage: "/images/bowling/slower-ball.jpg",
    video: "/videos/bowling/slower.mp4",
  },
];

export default Fast;