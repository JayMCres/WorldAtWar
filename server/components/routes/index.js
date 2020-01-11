const routes = require("express").Router();

const tanksController = require("../controllers/tanksController");
const planesController = require("../controllers/planesController");
const warshipsController = require("../controllers/warshipsController");

routes.use("/api/tanks", tanksController.fetchAllTanks);
routes.use("/api/planes", planesController.fetchAllPlanes);
routes.use("/api/warships", warshipsController.fetchAllShips);

module.exports = routes;
