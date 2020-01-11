const fetch = require("node-fetch");
const key = process.env.KEY;

exports.fetchAllPlanes = async (req, res) => {
  const url = `https://api.worldofwarplanes.ru/wowp/encyclopedia/planes/?application_id=${key}`;

  let response = await fetch(url);

  let jsonData = await response.json();

  let planesArray = await [jsonData];

  let planesData = await planesArray.map(item => {
    return item.data;
  });
  // console.log("Tanks Response", tanksData);

  res.send(planesData);
};
