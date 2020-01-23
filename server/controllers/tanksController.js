const fetch = require("node-fetch");
const key = process.env.KEY;

exports.fetchAllTanks = async (req, res) => {
  const url = `https://api.wotblitz.com/wotb/encyclopedia/vehicles/?application_id=${key}`;
  // const url = `https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${key}`;

  let response = await fetch(url);

  let jsonData = await response.json();

  let tanksObject = await jsonData.data;

  let tanks = await Object.values(tanksObject).filter(tank => {
    return (
      tank.nation === "usa" ||
      tank.nation === "ussr" ||
      tank.nation === "germany"
    );
  });

  // console.log("tanks", tanks);

  res.send(tanks);
};
