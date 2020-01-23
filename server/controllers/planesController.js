const fetch = require("node-fetch");
const key = process.env.KEY;

exports.fetchAllPlanes = async (req, res) => {
  const url = `https://api.worldofwarplanes.com/wowp/encyclopedia/planes/?application_id=${key}`;

  let response = await fetch(url);

  let jsonData = await response.json();

  let planesObject = await jsonData.data;
  // console.log("Planes", planesObject);

  let planes = Object.values(planesObject).filter(plane => {
    return (
      plane.nation === "usa" ||
      plane.nation === "germany" ||
      plane.nation === "uk"
    );
  });

  res.send(planes);
};
