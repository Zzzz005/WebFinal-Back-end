import React from 'react';
import "./footer.css"

function App() {
  const bubbles = [];
  for (let i = 0; i < 128; i++) {
    bubbles.push(
      <div
        className="bubble"
        style={{
          '--size': `${2 + Math.random() * 4}rem`,
          '--distance': `${6 + Math.random() * 4}rem`,
          '--position': `${-5 + Math.random() * 110}%`,
          '--time': `${2 + Math.random() * 2}s`,
          '--delay': `${-1 * (2 + Math.random() * 2)}s`,
        }}
        key={i}
      ></div>
    );
  }

  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">{bubbles}</div>
        <div className="content">
          <div>
            <div>
              <b>Contact</b>
              <a href="#">aralkhanzhansaya@gmail.com</a>
            </div>
            <div>
              <b>I am</b>
              <a href="#">Aralkhan Zhansaya</a>

            </div>
          </div>
          <div>
            <p>IT-2203</p>
          </div>
        </div>
      </div>
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
