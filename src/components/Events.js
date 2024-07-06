import React from 'react';

const SpecialActivitiesCards = () => {
  return (
    <section className="container mt-5">
        <h2> Major Events & Programmes Offered</h2>
        <br></br>
        <br></br>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card medium-card">
            <img src="images/cardgirlsit.jpeg" className="card-img-top" alt="Child with Special Needs" />
            <div className="card-body">
              <h5 className="card-title">Support Programs</h5>
              <p className="card-text">Explore our wide range of support programs designed to help children with special needs achieve their full potential.</p>
              <p className="card-text">Join our community events to connect with other families and professionals who are passionate about supporting children with special needs.</p>
             <p className="card-text">Duration: 2 years</p>
             <a href="https://localhost:3000" className="btn btn-dark">Learn More</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card medium-card">
            <img src="images/disboystand.jpeg" className="card-img-top" alt="Child with Special Needs" />
            <div className="card-body">
              <h5 className="card-title">Community Events</h5>
              <p className="card-text">Join our community events to connect with other families and professionals who are passionate about supporting children with special needs.</p>
             <p className="card-text">Duration: 2 years</p>
              <p className="card-text">Cost: Free</p>
              <a href="https://localhost:3000" className="btn btn-dark">See Events</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card medium-card">
            <img src="images/yogacard.webp" className="card-img-top" alt="Child with Special Needs" />
            <div className="card-body">
              <h5 className="card-title">Resources</h5>
              <p className="card-text">Access a variety of resources, articles, and tools to help you navigate the journey of raising and supporting children with special needs.</p>
        
              <p className="card-text">Duration: 2 years</p>
              <p className="card-text">Cost: Free</p>
              <a href="https://localhost:3000" className="btn btn-dark">View Resources</a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card medium-card">
            <img src="images/cardold.webp" className="card-img-top" alt="Educational Activities" />
            <div className="card-body">
              <h5 className="card-title">Educational Activities</h5>
              <p className="card-text">Engage in a variety of educational activities tailored to the learning needs of special children.</p>
              <p className="card-text">Duration: 2 years</p>
              <p className="card-text">Cost: Free</p>
              <a href="https://localhost:3000" className="btn btn-dark">View Resources</a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card medium-card">
            <img src="images/cardboyenjoy.jpeg" className="card-img-top" alt="Fun Events" />
            <div className="card-body">
              <h5 className="card-title">Fun Events</h5>
              <p className="card-text">Participate in fun and engaging events that promote social interaction and recreational learning.</p>
              <p className="card-text">Duration: 2 years</p>
              <p className="card-text">Cost: Free</p>
              <a href="https://localhost:3000" className="btn btn-dark">View Resources</a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="card medium-card">
            <img src="images/girlplay.webp" className="card-img-top" alt="Mind Sharpening Activities" />
            <div className="card-body">
              <h5 className="card-title">Mind Sharpening Activities</h5>
              <p className="card-text">Challenge your cognitive abilities with mind sharpening activities that cater to special needs children.</p>
              <p className="card-text">Duration: 2 years</p>
              <p className="card-text">Cost: Free</p>
              <a href="https://localhost:3000" className="btn btn-dark">View Resources</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialActivitiesCards;
