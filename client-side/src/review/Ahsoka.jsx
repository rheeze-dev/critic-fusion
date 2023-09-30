import { useState } from 'react';
import './Ahsoka.css';
import CircleIcon from '@mui/icons-material/Circle';
import Button from 'react-bootstrap/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Ahsoka() {
    const [showVideo, setShowVideo] = useState(false);
  
    const handlePlayVideo = () => {
      setShowVideo(true);
    };
    
    return (
      <div className='ahsoka'>
        <div className="ahsoka_header">
          <div className="ahsoka_background">
            <img src="./images/ahsoka_background.jpg" alt="" />
          </div>
          <div className="ahsoka_image">
            <img src="./images\ahsoka 1440.jpg" alt="" />
          </div>
  
          <div className="ahsoka_title">
            <h1>Ahsoka</h1>
            <div className="ahsoka_info">
              <h3>2023</h3>
              <CircleIcon  className='circle_icon' />
              <h3>Action</h3>
            </div>
          </div>
  
          <div className="ahsoka_extras">
            <Button className='video_button' variant="light"  onClick={handlePlayVideo}>Watch Trailer <PlayArrowIcon className='play_arrow_icon'/></Button>
          </div>
          
          {showVideo && (
            <div className="video_overlay">
              <video width="640" height="360" controls>
                <source src="https://www.youtube.com/watch?v=J_1EXWNETiI&list=PPSV" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>  
          )}
  
        </div>
  
        <div className="ahsoka__body">
            <div className="ahsoka__container">
              
            </div>
          </div>
      </div>
    )
  }

export default Ahsoka
