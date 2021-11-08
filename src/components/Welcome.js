import React from "react";
import "./Welcome.css";
const Welcome = () => {
  return (
    <>
      <div className="holder">
        <div className="content">
          <h1>A picture is worth a thousand words</h1>
          <p>
            "It clearly and beautifully captures your emotions- the joy, the
            laughter, the tears, you name it. Our pride is in offering the best
            shoots as we help you tell your story in photos."
          </p>
        <button className='btn'>View Gallary</button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
