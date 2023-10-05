import React from "react";

import OpinionBigStar from "../../public/static/Opinion/OpinionBigStar.png";
import OpinionSurnameImage from "../../public/static/Opinion/OpinionSurnameImage.png";

import opinionsData from "./data/opinion";
import Image from "next/image";

const ClientsOpinion = () => {



  const renderOpinions = () => {
    return opinionsData.map((opinion, index) => (
      <div className="WrapperOpinion" key={index}>
        <div className="WrapperOpinionLeft">
          <div className="WrapperOpinionStars">
            {opinion.stars.map((star, i) => (
              <Image key={i} src={star} alt={`Star ${i + 1}`} />
            ))}
          </div>
          <h6 className="WrapperOpinionHeading h6-600">{opinion.title}</h6>
          <h6 className="ParagraphOpinionHeading h6-300">{opinion.text}</h6>
          <div className="sign">
            <Image src={OpinionSurnameImage} alt="Author Image" />
            <p className="Surname body-small">
              {opinion.author}
              <p className="from body-small-smaller">{opinion.location}</p>
            </p>
          </div>
        </div>
        <div className="WrapperOpinionRight">
          <Image className="BigFoto" src={opinion.image} alt="Opinion Image" />
        </div>
      </div>
    ));
  };

  return (
    <>

      <section className="Opinions">
        <div className="MainWrapper">
          <h3 className="MainWrapperHeading h3">Opinie klientów</h3>
          <div className="StarsWrapper">
            {Array(5).fill(OpinionBigStar).map((star, index) => (
              <Image key={index} src={star} alt={`Big Star ${index + 1}`} />
            ))}
          </div>
          <div className="MarkPlace">
            <p className="body-small">Średnia ocena <span></span></p>
          </div>
        </div>
        {renderOpinions()}
      </section>
      
    </>
  );
};

export default ClientsOpinion;
