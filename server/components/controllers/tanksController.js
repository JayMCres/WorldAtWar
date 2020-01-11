const fetch = require("node-fetch");
const key = process.env.KEY;

exports.fetchAllTanks = async (req, res) => {
  const url = `https://api.wotblitz.com/wotb/encyclopedia/vehicles/?application_id=${key}`;

  let response = await fetch(url);

  let jsonData = await response.json();

  let tanksArray = await [jsonData];

  let tanksData = await tanksArray.map(item => {
    return item.data;
  });
  console.log("Tanks Response", tanksData);

  res.send(tanksData);
};
