import React from 'react';


const PrimaryGoals = () => {
  return (
    <div className="body1">
      <h1> <b>OUR PRIMARY GOALS</b></h1>
      <div className="badge-container">
        <div className="badge goal-1">
          <h5><b>Inclusive <br></br> Education</b></h5>
        </div>
        <div className="badge goal-3">
          <h5><b>Caring <br></br> Support</b></h5>
        </div>
        <div className="badge goal-4">
          <h5><b>Recreation<br></br> and <br></br> Sports</b></h5>
        </div>
        <div className="badge goal-5">
          <h5><b>Vocational <br></br> Training</b></h5>
        </div>
        <div className="badge goal-6">
          <h5><b>Overall <br></br> Fitness</b></h5>
        </div>
        <div className="badge goal-7">
          <h5><b>Overall <br></br>Empowerment</b></h5>
        </div>
        {/* Add more badges for each goal */}
      </div>
    </div>
  );
}

export default PrimaryGoals;
