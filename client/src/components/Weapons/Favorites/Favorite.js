import React from "react";
import { Image, Label, Icon, Segment, Card } from "semantic-ui-react";

const Favorite = props => {
  // console.log("Favorite Props", props);
  // const tank = Object.values(props);
  // console.log("Tank Obj", tank);

  return (
    <Card>
      <Card.Content>
        <Card.Header style={{ "font-size": "9px" }}>
          <span>
            {props.name}-{props.video.toUpperCase()}
          </span>
        </Card.Header>
      </Card.Content>
      <Label size="tiny" corner="right">
        <Icon
          size="tiny"
          name="remove"
          onClick={() => props.removeFromfavorites(props.id)}
          // disabled={this.props.detailsWeapon.pictureone }
        />
      </Label>
      <Image
        size="mini"
        src={props.picture}
        onClick={() => props.addItemToDetails(props.weaponId)}
        wrapped
        ui={false}
      />
    </Card>
  );
};
export default Favorite;
