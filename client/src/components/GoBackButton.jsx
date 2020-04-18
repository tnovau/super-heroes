import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";

const GoBackButton = ({ onClick, ...props }) => <IconButton
  color="secondary"
  onClick={onClick}
  {...props}
>
  <ArrowBack />
</IconButton>;

export default GoBackButton;
