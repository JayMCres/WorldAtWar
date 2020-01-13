const routes = require("express").Router();

const tanksController = require("../controllers/tanksController");
const planesController = require("../controllers/planesController");
const shipsController = require("../controllers/shipsController");
const planeController = require("../controllers/planeController");

routes.use("/api/tanks", tanksController.fetchAllTanks);
routes.use("/api/planes", planesController.fetchAllPlanes);
routes.use("/api/warships", shipsController.fetchAllShips);
routes.use("/api/plane", planeController.fetchSinglePlane);
module.exports = routes;
