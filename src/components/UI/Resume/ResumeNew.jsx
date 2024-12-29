// 'use client'
// import React, { useEffect, useState } from 'react';
// import pdf from '../../../assets/pdf/Untitled.pdf';
// const ResumeNew = () => {
//   const [width, setWidth] = useState(1200);
  
//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       {/* PDF Viewer using iframe */}
//       <div className="resume flex justify-center mb-6">
//         <iframe
//           src={pdf} // Local path inside public folder
//           frameBorder="0"
//           width={width > 786 ? width * 0.8 : width} // Responsive width based on screen size
//           height="800px" // Set a fixed height or adjust as needed
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ResumeNew;
