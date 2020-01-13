const fetch = require("node-fetch");
const key = process.env.KEY;

exports.fetchSinglePlane = async (req, res) => {
  // console.log("Plane Req", req.body);

  const url = `https://api.worldofwarplanes.com/wowp/encyclopedia/planespecification/?application_id=${key}&plane_id=${req.body.id}`;
  const url2 = `https://api.worldofwarplanes.com/wowp/encyclopedia/planemodules/?application_id=${key}&plane_id=${req.body.id}`;
  const data = await Promise.all([
    fetch(url).then(response => response.json()), // parse each response as json
    fetch(url2).then(response => response.json())
  ]);

  const planeData = await data.map(item => {
    // console.log("item", item.data);

    return Object.values(item.data);
  });

  // console.log("planeData", planeData);

  const planeObject = await planeData.map(item => {
    return { ...item[0], ...item[1] };
  });

  res.send(planeObject);
};
