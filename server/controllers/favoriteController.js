"use strict";
const User = require("../models").User;
const Favorite = require("../models").Favorite;
const UserFavorite = require("../models").UserFavorite;

const handleResponse = res => {
  return data => {
    // console.log(data);
    res.send(data);
  };
};

const handleError = res => {
  return error => {
    // console.log(error);
    res.send(error);
  };
};

exports.addFavorite = (req, res) => {
  console.log("BODY", req.body);
  console.log("Params", req.params);
  let newFav = {};

  Favorite.create({
    name: req.body.weapon.name,
    weaponId: req.body.weapon.id,
    picture: req.body.weapon.card,
    video: req.body.weapon.weaponType
  })
    .then(fav => {
      newFav = fav;

      return UserFavorite.create({
        userId: req.body.userId,
        favId: newFav.id
      });
    })
    .then(() => {
      console.log("NEW FAV", newFav);
      res.send(newFav);
    });
};

exports.deleteFavorite = (req, res) => {
  return UserFavorite.destroy({
    where: { favId: req.params.id }
  })
    .then(() => {
      Favorite.destroy({ where: { id: req.params.id } });
    })
    .then(handleResponse(res), handleError(res));
};

exports.getFavorite = (req, res) => {
  return Favorite.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: User,
        as: "users",
        required: true
      }
    ]
  }).then(handleResponse(res), handleError(res));
};

exports.getUserFavorites = (req, res) => {
  console.log(req.body.id);
  return Favorite.findAll()
    .then(favorites => {
      return favorites.map(fav => {
        return fav.userId === req.body.id;
      });
    })
    .then(res => console.log(res));

  // .then(favs => res.status(200).send(favs))
  // .catch(error => res.status(400).send(error));
};
