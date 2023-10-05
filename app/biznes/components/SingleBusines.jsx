import React from "react";

import Image from "next/image";
import businessData from "../data/data.jsx";

const ForBusinessSingle = () => {

  const renderBusinessContent = () => {
    return businessData.map((data, index) => (
      <div className="BusinesContentWrapper" key={index}>
        <div className="ImageContent">
          <Image className="Image" src={data.image} alt={`Business ${index + 1}`} />
        </div>
        <div className="TextContent">
          <div className="TextContentInner">
            <h4 className="TextConentHeading h4">{data.heading}</h4>
            <h6 className="TextConentParagraph h6">{data.paragraph}</h6>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="ContentBusiness">
        {renderBusinessContent()}
      </section>
    </>
  );
};

export default ForBusinessSingle;
