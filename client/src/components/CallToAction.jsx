import React from 'react';
import screenshotImage1 from './Screenshot (1).png'; // Import the first image
import screenshotImage2 from './Screenshot (2).png'; // Import the second image
import screenshotImage3 from './Screenshot (3).png'; // Import the third image

export default function Home() {
  return (
    <div className="home" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowX: 'auto', scrollbarColor: 'black' }}>
      {/* First Image */}
      <a href="https://priya281220.github.io/myportfolio/" target="_blank" rel="noopener noreferrer">
        <img
          src={screenshotImage2} // Use the imported second image variable as the source
          alt="Image 1"
          style={{ flex: '1', height: 'auto', backgroundColor: 'transparent', marginRight: '0.5rem' }}
        />
      </a>
      
      {/* Second Image */}
      <a href="https://priya281220.github.io/LOGINPAGE/" target="_blank" rel="noopener noreferrer">
        <img
          src={screenshotImage1} // Use the imported first image variable as the source
          alt="Image 2"
          style={{ flex: '1', height: 'auto', backgroundColor: 'transparent', margin: '0 0.5rem' }}
        />
      </a>
      
      {/* Third Image */}
      <a href="https://priya281220.github.io/bharatnetflix/" target="_blank" rel="noopener noreferrer">
        <img
          src={screenshotImage3} // Use the imported third image variable as the source
          alt="Image 3"
          style={{ flex: '1', height: 'auto', backgroundColor: 'transparent', marginLeft: '0.5rem' }}
        />
      </a>
    </div>
  );
}
