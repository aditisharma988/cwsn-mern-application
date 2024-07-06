// Video.js
import React, { useState, useRef } from 'react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoContainerRef = useRef(null);

  const handlePlayPause = (videoId) => {
    const video = document.getElementById(videoId);

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="video-container">
      <h1 >OUR Glimpses</h1>
      <div className="video-slider">
        <div className="arrow left" onClick={() => videoContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>
          {'<'}
        </div>
        <div className="video-row" ref={videoContainerRef}>
          <div className={`video ${isPlaying ? 'playing' : ''}`} onClick={() => handlePlayPause('video1')}>
            <video id="video1" width="400" height="300" controls>
              <source src="videos/v4excr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={`video ${isPlaying ? 'playing' : ''}`} onClick={() => handlePlayPause('video2')}>
            <video id="video2" width="400" height="300" controls>
              <source src="videos/v3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={`video ${isPlaying ? 'playing' : ''}`} onClick={() => handlePlayPause('video3')}>
            <video id="video3" width="400" height="300" controls>
              <source src="videos/v1walk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={`video ${isPlaying ? 'playing' : ''}`} onClick={() => handlePlayPause('video3')}>
            <video id="video3" width="400" height="300" controls>
              <source src="videos/v2pntg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={`video ${isPlaying ? 'playing' : ''}`} onClick={() => handlePlayPause('video3')}>
            <video id="video3" width="400" height="300" controls>
              <source src="videos/v6dnce.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="arrow right" onClick={() => videoContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })}>
          {'>'}
        </div>
      </div>
    </section>
  );
};

export default Video;
