import React from "react";

import CardMedia from "@material-ui/core/CardMedia";
import { isIE, replaceHttpWithHttps } from "../../../utils";

const getImageSrc = ({ path, extension }) => replaceHttpWithHttps(`${path}.${extension}`);

/** @param {string} userAgent */
export const getImageAdditionalProps = (userAgent) => isIE(userAgent) ? {} : {
  component: "img",
  crossOrigin: "anonymous"
};

const HeroeItemImage = ({ className, name, thumbnail}) => {
  const additionalProps = getImageAdditionalProps(navigator.userAgent);
  return <CardMedia
    className={className}
    image={getImageSrc(thumbnail)}
    title={name}
    {...additionalProps}
  />
};

export default HeroeItemImage;
