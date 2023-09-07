import React from "react";
import Button from "./Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Item = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  twoBtns,
  first,
}) => {
  return (
    <div
      className="item-img"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="item-container">
        <div className="item-text">
          <h3 className="item-title">{title}</h3>
          <p className="item-desc">{description}</p>
        </div>
        <div className="item-lowerThird">
          <div className="item-buttons">
            <Button imp="primary" text={leftBtnText} link={leftBtnLink} />
            {twoBtns && (
              <Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div
              className="item-expand"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ExpandMoreIcon />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
