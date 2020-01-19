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
    // const planeItems = Object.values(item.data);
    // const array =[...planeItems.specification, ...]
    // console.log("item", planeItems.specification);

    return Object.values(item.data);
  });
  // const planeDataTwo = await data.map(items => {
  //   const dataPoints = Object.values(items.data);
  //   return dataPoints;
  // });
  // console.log("planeData", planeData);

  const planeObject = await planeData.map(item => {
    const newObj = { ...item[0], ...item[1] };

    return newObj;
  });

  // const newPlaneObj = [
  //   ...Object.values(planeData[0]),

  //   ...Object.values(planeData[1])
  // ];

  // const planeDetails = newPlaneObj.map(item => {
  //   return item.specification;
  // });
  // console.log(
  //   " planeObject ",

  //   planeDetails[0]
  // );

  res.send(planeObject);
};
