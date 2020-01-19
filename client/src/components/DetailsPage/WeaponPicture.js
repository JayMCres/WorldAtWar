import React from "react";
import { Image, List } from "semantic-ui-react";

const WeaponPicture = props => {
  // console.log("Weapon Pic Props", props);
  return <Image centered src={props.weaponPic} size="big" />;
};

export default WeaponPicture;
