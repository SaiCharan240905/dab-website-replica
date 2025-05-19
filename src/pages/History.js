import React from 'react';
import './History.css'; // Import the updated CSS file

const History = () => {
  return (
    <div className="history-section">
      <h2 className="fade-in-up">History of Diamonds</h2>
      <p className="fade-in-up">
        Golconda diamonds, mined in the Godavari delta of Andhra Pradesh and Telangana, India, were highly valued. Golconda Fort in Hyderabad was a key centre for diamond enhancement and trading. These Type IIa diamonds, pure and nitrogen-free, are large and exceptionally clear, earning the reputation of being diamonds of the first water. The term 'Golconda Diamond' signifies unmatched quality. Production declined after 2,000 years of mining, and now Golconda diamonds are considered antique, rare, and precious. 
        Notable examples include the Kohinoor, Nassak Diamond, Hope Diamond, Idol's Eye, Daria-i-Noor, Regent, Dresden Green, and Orlov. Other remarkable diamonds like the Florentine Yellow, Akbar Shah, Nizam, and Great Mogul are no longer traceable.
      </p>
      <p className="fade-in-up">
        The Golconda Diamond Mine, dating back to 1725 CE, holds a significant place in history and is part of the esteemed collection of Pieter van der Aa, a renowned Dutch publisher known for his meticulous preparation of maps and atlases. 
        The Golconda region, recognised for its diamond-rich deposits, became famous for producing some of the world's most remarkable diamonds. Pieter van der Aa, with his dedication to detail and accuracy, meticulously documented and preserved the rich heritage of the Golconda Diamond Mine. 
        His collection stands as a testament to the rich history and enduring legacy of this renowned diamond mining region.
      </p>

      {/* Top 10 Famous Diamonds Section */}
      <div className="diamonds-paragraph">
        <h2 className="fade-in-up">Top 10 Famous Diamonds in the World</h2>
        <ul className="diamonds-list fade-in-up">
          <li><strong>1. Koh-i-Noor Diamond:</strong> 105.6 carats, from India. Currently part of the British Crown Jewels.</li>
          <li><strong>2. Cullinan Diamond:</strong> 3,106 carats (original rough), from South Africa. Largest rough diamond ever found; cut into multiple stones.</li>
          <li><strong>3. Hope Diamond:</strong> 45.52 carats, from India. Famous for its deep blue color and "curse" legend; housed in the Smithsonian.</li>
          <li><strong>4. The Centenary Diamond:</strong> 273.85 carats (cut), from South Africa (Premier Mine). Noted for its flawless clarity and D-color.</li>
          <li><strong>5. The Regent Diamond:</strong> 140.64 carats, from India. Once owned by Napoleon; now displayed in the Louvre Museum.</li>
          <li><strong>6. The Orlov Diamond:</strong> 189.62 carats, from India. Part of the Russian Imperial Sceptre.</li>
          <li><strong>7. The Dresden Green Diamond:</strong> 41 carats, from India. A rare natural green diamond, housed in Germany.</li>
          <li><strong>8. The Tiffany Yellow Diamond:</strong> 128.54 carats, from South Africa. Famous for its yellow hue; worn by Audrey Hepburn and Beyoncé.</li>
          <li><strong>9. The Great Star of Africa (Cullinan I):</strong> 530.2 carats, from South Africa. Largest cut diamond from the Cullinan stone; mounted on the British Sovereign’s Sceptre.</li>
          <li><strong>10. The Sancy Diamond:</strong> 55.23 carats, from India. Pale yellow, with a rich history tied to French and English royalty.</li>
        </ul>
      </div>
    </div>
  );
};

export default History;
