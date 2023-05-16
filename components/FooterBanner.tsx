import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

interface FooterBannerProps {
  footerBanner: {
    discount: string;
    largeText1: string;
    largeText2: string;
    saleTime: string;
    smallText: string;
    midText: string;
    product: string;
    buttonText: string;
    image: string;
    desc: string;
  };
}

const FooterBanner: React.FC<FooterBannerProps> = ({ footerBanner }) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  } = footerBanner;

  const imageUrl = urlFor(image).url() as string;

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <img
            src={imageUrl}
            className="footer-banner-image"
            alt="Footer Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
