import React, {useState} from "react";
import styled from "styled-components";
import { MdPlayCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Orthodox = ({ active }) => {
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
              <Link to={`/video/orthodox/${index}`}>
                <MdPlayCircle size={30} style={{position:'absolute',color:'black',cursor:'pointer',zIndex:'2',bottom:'0.3rem',right:'0.3rem',width:'auto',padding:'0rem',background:'whitesmoke',borderRadius:'50%'}} />
                <video autoPlay={true} loop={true} playsInline={true} style={{objectFit:'cover'}}>
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
  margin-bottom: 1%;
  margin-right: 1%;
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
    name: "Cover drive",
    image: "/images/batting/cover.png",
    backgroundImage: "/images/batting/cover.jpg",
    video: "/videos/batting/cover.mp4",
    style: {objectPosition: '0% 60%'},
  },
  {
    name: "Straight drive",
    image: "/images/batting/straight.png",
    backgroundImage: "/images/batting/straight.jpg",
    video: "/videos/batting/straight.mp4",
  },
  {
    name: "Pull shot",
    image: "/images/batting/pull.png",
    backgroundImage: "/images/batting/pull.jpg",
    video: "/videos/batting/pull.mp4",
  },
  {
    name: "Flick shot",
    image: "/images/batting/flick.png",
    backgroundImage: "/images/batting/flick.jpg",
    video: "/videos/batting/flick.mp4",
    style: {objectPosition: '0% 100%'},
  },
  {
    name: "On drive",
    image: "/images/batting/on.png",
    backgroundImage: "/images/batting/on.jpg",
    video: "/videos/batting/on.mp4",
  },
  {
    name: "Sweep shot",
    image: "/images/batting/sweep.png",
    backgroundImage: "/images/batting/sweep.jpg",
    video: "/videos/batting/sweep.mp4",
  },
  {
    name: "Square drive",
    image: "/images/batting/square.png",
    backgroundImage: "/images/batting/square.jpg",
    video: "/videos/batting/square.mp4",
  },
  {
    name: "Cut shot",
    image: "/images/batting/cut.png",
    backgroundImage: "/images/batting/cut.jpg",
    video: "/videos/batting/cut.mp4",
    style: {objectPosition: '0% 65%'},
  },
  {
    name: "Slog sweep",
    image: "/images/batting/slog.png",
    backgroundImage: "/images/batting/slog.jpg",
    video: "/videos/batting/slog.mp4",
    style: {objectPosition: '0% 55%',objectFit: 'fill'},
  },
  {
    name: "Backfoot punch",
    image: "/images/batting/punch.png",
    backgroundImage: "/images/batting/punch.jpg",
    video: "/videos/batting/punch.mp4",
    style: {objectPosition: '0% 70%'},
  },
  {
    name: "Reverse sweep",
    image: "/images/batting/reverse.png",
    backgroundImage: "/images/batting/reverse-sweep.jpg",
    video: "/videos/batting/reverse.mp4",
    style: {objectPosition: '0% 0%'},
  },
  {
    name: "Hook shot",
    image: "/images/batting/hook.png",
    backgroundImage: "/images/batting/hook.jpg",
    video: "/videos/batting/hook.mp4",
  },
  {
    name: "Off drive",
    image: "/images/batting/off.png",
    backgroundImage: "/images/batting/off.jpeg",
    video: "/videos/batting/off.mp4",
    style: {objectPosition: '0% 0%'},
  },
  {
    name: "Frontfoot defense",
    image: "/images/batting/front.png",
    backgroundImage: "/images/batting/front.jpg",
    video: "/videos/batting/front.mp4",
  },
  {
    name: "Backfoot defense",
    image: "/images/batting/back.png",
    backgroundImage: "/images/batting/back.jpg",
    video: "/videos/batting/back.mp4",
    style: {objectPosition: '0% 25%'},
  },
  {
    name: "Leg glance",
    image: "/images/batting/legglance.png",
    backgroundImage: "/images/batting/legglance.jpg",
    video: "/videos/batting/legglance.mp4",
    style: {objectPosition: '0% 75%'},

  },
];

export default Orthodox;