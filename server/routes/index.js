const routes = require("express").Router();

const tanksController = require("../controllers/tanksController");
const planesController = require("../controllers/planesController");
const shipsController = require("../controllers/shipsController");
const planeController = require("../controllers/planeController");
const weaponController = require("../controllers/weaponController");

routes.get("/api/weapons/:id", weaponController.getWeapon);
routes.get("/api/weapons", weaponController.listWeapons);
routes.post("/api/add_weapon", weaponController.addWeapon);
routes.patch("/api/edit_weapon/:id", weaponController.editWeapon);
routes.delete("/api/delete_weapon/:id", weaponController.deleteWeapon);

routes.use("/api/tanks", tanksController.fetchAllTanks);
routes.use("/api/planes", planesController.fetchAllPlanes);
routes.use("/api/warships", shipsController.fetchAllShips);
routes.use("/api/plane", planeController.fetchSinglePlane);
module.exports = routes;
