import React from 'react';

const DisordersClassificationSymptoms = () => {
  return (
    
    <section className="classification">
      <div className="classification-container">

        <h2><i>Disorder Classification</i></h2>
        <div className="categories">
          {/* Learning Disorders */}
          <div className="category">
            <h3>2. Learning Disorders</h3>
            <ul>
              <li>315.00 Reading Disorder</li>
              <li>315.1 Mathematics Disorder</li>
              <li>315.2 Disorder of Written Expression</li>
            </ul>
          </div>

          {/* Communication Disorders */}
          <div className="category">
            <h3>Communication Disorders (Speech and Language Impairment)</h3>
            <ul>
              <li>315.31 Expressive Language Disorder</li>
              <li>315.32 Mixed Receptive-Expressive Language Disorder</li>
              <li>315.39 Phonologica
                l Disorder</li>
              <li>307.0 Stuttering</li>
              <li>307.9 Communication Disorder Not Otherwise Specified</li>
            </ul>
          </div>

          {/* Pervasive Developmental Disorders */}
          <div className="category">
            <h3>5. Pervasive Developmental Disorders (Autistic Spectrum Disorders)</h3>
            <ul>
              <li>299.00 Autistic Disorder</li>
              <li>299.80 Rett’s Disorder</li>
              <li>299.10 Childhood Disintegrative Disorder</li>
              <li>299.80 Asperger’s Disorder</li>
              <li>299.80 Pervasive Developmental Disorder</li>
            </ul>
          </div>

          {/* Attention-Deficit and Disruptive Behavior Disorders */}
          <div className="category">
            <h3>Attention-Defecit and Disruptive Behavior Disorders (Emotional/Behavioral Disorders)</h3>
            <ul>
              <li>314.01 Attention-Deficit/Hyperactivity Disorder Combined Type</li>
              <li>314.00 Predominately Inattentive</li>
              <li>314.01 Predominately Hyperactive-Impulsive Type</li>
              <li>314.9 Attention-Deficit/Hyperactivity Disorder Not Otherwise Specified</li>
            </ul>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default DisordersClassificationSymptoms;
