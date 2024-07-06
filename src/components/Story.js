import React, { useRef } from 'react';

const Story = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  };

  return (
    <div className="story-container">
      <div className="background-image"></div>
      <div className="text-section">
        <h2><b>Story of Subhashree</b></h2>
        <p>
          “My daughter Subhashree was born prematurely at 6 months and 8 days. Her birth weight was just 750 grams. When she didn’t cry, we had a doubt that she might have a problem,” recalls Subhashree’s concerned mother. At the age of five, Subhashree faced significant developmental delays. She couldn’t crawl, walk, or speak. The diagnosis came as a heavy blow— Cerebral Palsy. Her parents grappled with a sense of hopelessness about her future, unsure of how to navigate the complexities that lay ahead.
        </p>
        <p>
          Her life took a transformative turn when she started going to a Smile center near her village in Puri, Odisha regularly. This center specializes in providing developmental therapy and life skills to special children, creating a supportive environment tailored to their unique needs.
        </p>
        <p>
          The Smile center became a safe space for Subhashree, offering her more than just therapy— it provided a community that understood, embraced, and nurtured her potential. Developmental therapy, personalized to address the specific challenges posed by Cerebral Palsy, became the starting point for change in her life.
        </p>
        <p>
          The center not only focused on therapeutic interventions but also emphasized the development of essential life skills. Subhashree, once confined by the limitations of her condition, began to experience newfound independence. Every small achievement became a monumental step forward— be it a supported walk, or the joyous expression of her thoughts.
        </p>
        <p>
          Subhashree’s journey reflects not just her resilience but also the unwavering support and determination of her family. Her parents found renewed strength and purpose through their daughter’s remarkable progress.
        </p>
        <p>
          As Subhashree continues to defy expectations, her story stands as a testament to the transformative power of specialized care and support for children with special needs. Her story inspires us to celebrate the victories, both big and small, and highlights the importance of fostering inclusive environments where every child can thrive.
        </p>
      </div>

      <div className="myvideo-section">
        {/* Play button overlay */}
        <div className="play-button-overlay" onClick={playVideo}>
          <div className="play-button"></div>
        </div>

        {/* Video tag with controls */}
        <video
          title="Subhashree's Video"
          className="myvideo"
          height="340"
          controls  // Add controls attribute to enable play, pause, and other controls
          ref={videoRef}
        >
          <source src="videos/Subhashree.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Story;
// import React, { useRef } from 'react';

// const Story = () => {
//   const videoRef = useRef(null);

//   const playVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div className="story-container">
//       <div className="background-image"></div>
//       <div className="text-section">
//         <h2><b>Story of Subhashree</b></h2>
//         <p>
//           “My daughter Subhashree was born prematurely at 6 months and 8 days. Her birth weight was just 750 grams. When she didn’t cry, we had a doubt that she might have a problem,” recalls Subhashree’s concerned mother. At the age of five, Subhashree faced significant developmental delays. She couldn’t crawl, walk, or speak. The diagnosis came as a heavy blow— Cerebral Palsy. Her parents grappled with a sense of hopelessness about her future, unsure of how to navigate the complexities that lay ahead.
//         </p>
//         <p>
//           Her life took a transformative turn when she started going to a Smile center near her village in Puri, Odisha regularly. This center specializes in providing developmental therapy and life skills to special children, creating a supportive environment tailored to their unique needs.
//         </p>
//         <p>
//           The Smile center became a safe space for Subhashree, offering her more than just therapy— it provided a community that understood, embraced, and nurtured her potential. Developmental therapy, personalized to address the specific challenges posed by Cerebral Palsy, became the starting point for change in her life.
//         </p>
//         <p>
//           The center not only focused on therapeutic interventions but also emphasized the development of essential life skills. Subhashree, once confined by the limitations of her condition, began to experience newfound independence. Every small achievement became a monumental step forward— be it a supported walk, or the joyous expression of her thoughts.
//         </p>
//         <p>
//           Subhashree’s journey reflects not just her resilience but also the unwavering support and determination of her family. Her parents found renewed strength and purpose through their daughter’s remarkable progress.
//         </p>
//         <p>
//           As Subhashree continues to defy expectations, her story stands as a testament to the transformative power of specialized care and support for children with special needs. Her story inspires us to celebrate the victories, both big and small, and highlights the importance of fostering inclusive environments where every child can thrive.
//         </p>
//       </div>

//       <div className="myvideo-section">
//         {/* Play button overlay */}
//         <div className="play-button-overlay" onClick={playVideo}>
//           <div className="play-button"></div>
//         </div>

//         {/* Video iframe with controls */}
//         <iframe
//           title="Subhashree's Video"
//           className="myvideo"
//           height="340"
//           src="videos/Subhashree.mp4"
//           allowFullScreen={true}
//           controls  // Add controls attribute to enable play, pause, and other controls
//           ref={videoRef}
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Story;





