import React from "react";
import Link from "next/link";

function ServiceItem({ item }) {
  const { title, text, link, imgUrl, alt } = item;
  return (
    <div className="col-sm-3 col-md-3 col-lg-3">
      <div className="treatments-box">
        <figure className="treatments-box__img">
          <Link href={link}>
            <a>
              <img src={imgUrl} alt={alt} />
            </a>
          </Link>
        </figure>
        <h3 className="treatments-box__title">
          <Link href={link}>
            <a>{title}</a>
          </Link>
        </h3>
        <div className="treatments-box__text">
          <p>{text}</p>
        </div>
        <a href="single_service.html" className="treatments-box__btn">
          more
        </a>
      </div>
    </div>
  );
}

export default ServiceItem;
