"use strict";

const User = require("../models").User;
const Favorite = require("../models").Favorite;
const UserFavorite = require("../models").UserFavorite;

exports.favsList = (req, res) => {
  return Favorite.findAll()
    .then(favs => res.status(200).send(favs))
    .catch(error => res.status(400).send(error));
};

exports.getUsers = (req, res) => {
  return User.findAll()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
};

const handleResponse = res => {
  return data => {
    console.log(data);
    res.send(data);
  };
};

const handleError = res => {
  return error => {
    // console.log(error);
    res.send(error);
  };
};

exports.listUsers = (req, res) => {
  return User.findAll({
    include: [
      {
        model: Favorite,
        as: "favorites"
        // required: true
      }
    ]
  }).then(handleResponse(res), handleError(res));
};

exports.getUser = (req, res) => {
  return User.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Favorite,
        as: "favorites"
        // required: true
      }
    ]
  }).then(handleResponse(res), handleError(res));
};

exports.addUser = (req, res) => {
  return User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(handleResponse(res), handleError(res));
};
