import React from "react";
import { Header, Icon, Label } from "semantic-ui-react";

const WeaponCont = props => {
  const typeWord = [props.type];
  console.log(typeWord);
  return (
    <Header as="h2" attached="top">
      <Label
        size="medium"
        as="a"
        corner="left"
        color="grey"
        onClick={props.handleIntervalStart}
      >
        <Icon name="play" disabled={props.changeInterval === true} />
      </Label>

      <Label
        size="medium"
        as="a"
        corner="right"
        color="grey"
        onClick={props.handleIntervalStop}
      >
        <Icon name="pause" disabled={props.changeInterval === false} />
      </Label>
      <Icon name="settings" />
      <Header.Content>
        {props.name_i18n}
        <Header.Subheader>
          <strong style={{ "font-size": "12px" }}>
            {props.type.toUpperCase()}
          </strong>
        </Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default WeaponCont;
