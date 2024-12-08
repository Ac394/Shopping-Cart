import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Video() {
  return (
    <VideoSection>
      <div>
        <h3>Venice Signature Collection</h3>
        <p>
          Embrace the perfect blend of bold and chic. Redefine your wardrobe with standout designs that make every
          moment unforgettable.
        </p>
        <NavLink to="/women">Discover More ➜</NavLink>
      </div>
      <video autoPlay muted loop>
        <source src="src/assets/video/home_video_01.mp4" type="video/mp4" />
      </video>
    </VideoSection>
  );
}

const VideoSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  max-width: 1440px;
  height: 560px;
  overflow: hidden;

  & div {
    position: absolute;
    padding: 30px;
    width: 600px;
    color: white;
    text-shadow: 1px 1px 2px #08080890;
    margin-bottom: 60px;
    z-index: 1;

    h3 {
      font-size: 32px;
    }

    p {
      font-weight: 500;
      font-size: 18px;
    }

    a {
      display: block;
      color: white;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      margin-top: 15px;
    }
  }

  & video {
    object-fit: cover;
    object-position: bottom;
    width: 100%;
  }
`;
