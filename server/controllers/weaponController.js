"use strict";

const Weapon = require("../models").Weapon;

const handleResponse = res => {
  return data => {
    console.log(data);
    res.send(data);
  };
};

const handleError = res => {
  return error => {
    console.log(error);
    res.send(error);
  };
};
exports.listWeapons = (req, res) => {
  return Weapon.findAll()
    .then(weapons => {
      res.send(weapons);
    })
    .then(handleError(res));
};

exports.addWeapon = (req, res) => {
  console.log("Weapon Body", req.body);

  const name = req.body.name;
  const weaponId = req.body.weaponId;
  const type = req.body.weaponId;
  const pictureone = req.body.pictureone;
  const picturetwo = req.body.picturetwo;
  const video = req.body.video;
  return Weapon.create({
    name: name,
    weaponId: weaponId,
    type: type,
    pictureone: pictureone,
    picturetwo: picturetwo,
    video: video
  }).then(newWeapon => {
    res.json(newWeapon);
  });
};

exports.editWeapon = (req, res) => {
  const name = req.body.nameUpdate;
  const type = req.body.typeUpdate;
  const subtype = req.body.subtypeUpdate;
  const power = req.body.powerUpdate;
  const ceiling = req.body.ceilingUpdate;
  const country = req.body.countryUpdate;
  const dimensions = req.body.dimensionsUpdate;
  const weight = req.body.weightUpdate;
  const crew = req.body.crewUpdate;
  const imageone = req.body.imageoneUpdate;
  const imagetwo = req.body.imagetwoUpdate;
  const imagethree = req.body.imagethreeUpdate;
  const imagefour = req.body.imagefourUpdate;
  const description = req.body.descriptionUpdate;
  const propulsion = req.body.propulsionUpdate;
  const speed = req.body.speedUpdate;
  const range = req.body.rangeUpdate;
  const armor = req.body.armorUpdate;
  const weaponone = req.body.weapononeUpdate;
  const weapontwo = req.body.weapontwoUpdate;
  const weaponthree = req.body.weaponthreeUpdate;
  const weaponfour = req.body.weaponfourUpdate;
  const video = req.body.videoUpdate;
  Weapon.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(updatedWeapon => {
      // console.log("FoundNote", updatedNote);
      updatedWeapon.update({
        name: name,
        type: type,
        subtype: subtype,
        power: power,
        ceiling: ceiling,
        country: country,
        dimensions: dimensions,
        weight: weight,
        crew: crew,
        imageone: imageone,
        imagetwo: imagetwo,
        imagethree: imagethree,
        imagefour: imagefour,
        description: description,
        propulsion: propulsion,
        speed: speed,
        range: range,
        armor: armor,
        weaponone: weaponone,
        weapontwo: weapontwo,
        weaponthree: weaponthree,
        weaponfour: weaponfour,
        video: video
      });
    })
    .then(newWeapon => {
      console.log(newWeapon);
      res.json(newWeapon);
    });
};

exports.getWeapon = (req, res) => {
  // console.log("req", req.params.id);
  Weapon.findOne({
    where: {
      weaponId: req.params.id
    }
  }).then(weapon => {
    console.log("weapon", weapon);
    res.json(weapon);
  });
};

exports.deleteWeapon = (req, res) => {
  return Weapon.destroy({
    where: { id: req.params.id }
  }).then(handleResponse(res), handleError(res));
};
