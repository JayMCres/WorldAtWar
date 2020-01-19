const fetch = require("node-fetch");
const key = process.env.KEY;

exports.fetchAllShips = async (req, res) => {
  const url = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=${key}`;

  let response = await fetch(url);

  let jsonData = await response.json();

  let shipsObject = await jsonData.data;

  res.send(shipsObject);
};
