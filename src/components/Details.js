import React, { useEffect } from 'react';

const Details1 = () => {
  useEffect(() => {
    const bubbles = [
      { text: 'Assessment (Aankalan)', top: 20, left: 280 },
      { text: 'Integration (Ekikaran)', top: 20, left: 800 },
      { text: 'Evaluation (Mulyankan)', top: 130, left: 10 },
      { text: 'Inclusion (Samavesh)', top: 130, left: 1080 },
      { text: 'Adaptation (Anukulan)', top: 165, left: 540 },
    ];

    const mindMap = document.getElementById('mindMap');

    bubbles.forEach((bubbleData, index) => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.textContent = bubbleData.text;
      bubble.style.top = `${bubbleData.top}px`;
      bubble.style.left = `${bubbleData.left}px`;

      // Add an event listener for each bubble (if needed)
      bubble.addEventListener('click', () => {
        // Handle bubble click event (if needed)
        console.log(`Clicked on ${bubbleData.text}`);
      });

      mindMap.appendChild(bubble);
    });
  }, []);

  return (
    <div className="details-container">
      <h2> WHy Ignimindz ?</h2>
      <p>
        “While disabled people are often presented as inspirational
        subjects in public spaces, their lives are still plagued by stigma
        and an indifferent social system.”
        <b>-writes Abhishek Annica, a writer and disability rights activist.</b>
      </p>
      <p>
        As India struggles to represent its differently-abled citizens in its reports,
        the rising concern about the education of children
        who fall under the category of ‘special needs’ comes into sharp focus.
        <b>The Special Needs for Children </b> website plays a crucial role in addressing the diverse educational
        requirements of children with special needs. It serves as a comprehensive platform to cater to their
        unique learning needs and foster an inclusive educational environment. Moreover, this platform serves as
        a comprehensive, accessible, and supportive platform that addresses informational, emotional, and educational needs of
        the community. It plays a vital role in fostering an inclusive and understanding society.
      </p>

      <div className="mind-map" id="mindMap"></div>
    </div>
  );
};

export default Details1;

// import React, { useEffect } from 'react';

// const Details1 = () => {
//   useEffect(() => {
//     const bubbles = [
//       { text: 'Assessment (Aankalan)', top: 50, left: 50 },
//       { text: 'Integration (Ekikaran)', top: 50, left: 200 },
//       { text: 'Evaluation (Mulyankan)', top: 200, left: 50 },
//       { text: 'Inclusion (Samavesh)', top: 200, left: 200 },
//       { text: 'Adaptation (Anukulan)', top: 125, left: 125 },
//     ];

//     const mindMap = document.getElementById('mindMap');

//     bubbles.forEach((bubbleData, index) => {
//       const bubble = document.createElement('div');
//       bubble.classList.add('bubble');
//       bubble.textContent = bubbleData.text;
//       bubble.style.top = `${bubbleData.top}px`;
//       bubble.style.left = `${bubbleData.left}px`;

//       // Add an event listener for each bubble (if needed)
//       bubble.addEventListener('click', () => {
//         // Handle bubble click event (if needed)
//         console.log(`Clicked on ${bubbleData.text}`);
//       });

//       mindMap.appendChild(bubble);
//     });
//   }, []);

//   return (
//     <div className="details-container">
//       <h2>Who, What & Why We?</h2>
//       <p>
//         “While disabled people are often presented as inspirational
//         subjects in public spaces, their lives are still plagued by stigma
//         and an indifferent social system.”
//         <b>-writes Abhishek Annica, a writer and disability rights activist.</b>
//       </p>
//       <p>
//         As India struggles to represent its differently-abled citizens in its reports,
//         the rising concern about the education of children
//         who fall under the category of ‘special needs’ comes into sharp focus.
//         <b>The Special Needs for Children </b> website plays a crucial role in addressing the diverse educational
//         requirements of children with special needs. It serves as a comprehensive platform to cater to their
//         unique learning needs and foster an inclusive educational environment. Moreover, this platform serves as
//         a comprehensive, accessible, and supportive platform that addresses informational, emotional, and educational needs of
//         the community. It plays a vital role in fostering an inclusive and understanding society.
//       </p>


//       <div className="mind-map" id="mindMap"></div>
//     </div>
//   );
// };

// export default Details1;
// // import React from 'react';


// // const Details1 = () => {
// //   return (
// //     <div className="details-container">
      
// //       <h2>Who, What & Why We?</h2>
// //       <p>“While disabled people are often presented as inspirational
// //         subjects in public spaces, their lives are still plagued by stigma
// //         and an indifferent social system.”
// //         <b>       -writes Abhishek Annica, a writer and disability rights activist.</b></p>
// //       <p>As India struggles to represent its differently-abled citizens in its reports,
// //         the rising concern about the education of children
// //         who fall under the category of ‘special needs’ comes into sharp focus.
// //       <b>The Special Needs for Children </b> website plays a crucial role in addressing the diverse educational
// //         requirements of children with special needs. It serves as a comprehensive platform to cater to their
// //         unique learning needs and foster an inclusive educational environment. Moreover, this platform serves as
// //         a comprehensive, accessible, and supportive platform that addresses informational, emotional, and educational needs of
// //         the community. It plays a vital role in fostering an inclusive and understanding society.
// //       </p>

// //       <h3><ul><li>Assessment (Aankalan)</li></ul></h3>
// //       <p>
// //         Assessment involves gathering information to understand the student-teacher performance and/or
// //         classroom functioning. It is an interactive process that provides formative and diagnostic insights,
// //         recognizing areas of strength and identifying aspects that require attention or improvement.
// //       </p>

// //       <h3><ul><li>Integration (Ekikaran)</li></ul></h3>
// //       <p>
// //         Integration, in the context of students with disabilities, refers to providing education within regular
// //         classrooms. The focus is on adapting the learning environment to ensure successful participation for
// //         children with special needs.
// //       </p>

// //       <h3><ul><li>Evaluation (Mulyankan)</li></ul></h3>
// //       <p> This involves making a value judgment on a performance
// //         since they are graded or scored. They are summative in nature .and are
// //         considered as actual measure of level of quality at the time of evaluation. </p>

// //         <h3><ul><li>Inclusion (Samavesh)</li></ul></h3>
// //         <p> Inclusive education refers to education of all students, where all
// // the students are equal participants in the learning process.</p>
// // <h3><ul><li>Adaptation (Anukulan)</li></ul></h3>
// // <p> Adaptation refers to adjusting assessments, material,
// // curriculum, or classroom environment to accommodate a student’s needs
// // so he / she can participate in, and achieve the teaching-learning goals. </p>

     
// //     </div>
// //   );
// // };

// // export default Details1;
