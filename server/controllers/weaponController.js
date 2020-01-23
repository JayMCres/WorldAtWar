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
  // console.log("Weapon Body", req.body);

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
  // console.log("Edit Body", req.body);
  const name = req.body.nameUpdate;
  const weaponId = req.body.weaponIdUpdate;
  const pictureone = req.body.pictureoneUpdate;
  const picturetwo = req.body.picturetwoUpdate;
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
        weaponId: weaponId,
        pictureone: pictureone,
        picturetwo: picturetwo,
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
    // console.log("weapon", weapon);
    res.json(weapon);
  });
};

exports.deleteWeapon = (req, res) => {
  return Weapon.destroy({
    where: { id: req.params.id }
  }).then(handleResponse(res), handleError(res));
};
