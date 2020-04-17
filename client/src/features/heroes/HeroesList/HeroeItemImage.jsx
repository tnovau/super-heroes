import React from "react";

import { isIE, replaceHttpWithHttps } from "../../../utils";
import CardMedia from "@material-ui/core/CardMedia";

const getImageSrc = ({ path, extension }) => replaceHttpWithHttps(`${path}.${extension}`);
const getImageAdditionalProps = () => isIE(navigator.userAgent) ? {} : {
  component: "img",
  crossOrigin: "anonymous"
};

const HeroeItemImage = ({ className, name, thumbnail}) => {
  const additionalProps = getImageAdditionalProps();
  return <CardMedia
    className={className}
    image={getImageSrc(thumbnail)}
    title={name}
    {...additionalProps}
  />
};

export default HeroeItemImage;
