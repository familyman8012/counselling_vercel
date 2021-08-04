import React from "react";

function FeaturesItem({ item }) {
  const { title, text, imgUrl } = item;
  return (
    <div className="col-sm-4 col-md-4 col-lg-4">
      <div className="services-in">
        <figure className="services-in__img">
          <img src={imgUrl} alt="" />
        </figure>
        <h4 className="services-in__title">{title}</h4>
        <p className="services-in__text">{text}</p>
      </div>
    </div>
  );
}

export default FeaturesItem;
