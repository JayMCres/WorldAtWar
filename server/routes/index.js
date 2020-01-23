const routes = require("express").Router();

const usersController = require("../controllers/usersController");
const tanksController = require("../controllers/tanksController");
const planesController = require("../controllers/planesController");
const shipsController = require("../controllers/shipsController");
const planeController = require("../controllers/planeController");
const weaponController = require("../controllers/weaponController");
const favoriteController = require("../controllers/favoriteController");

routes.use("/api/users", usersController.listUsers);
routes.use("/api/users/:id", usersController.getUser);
routes.post("/api/signup", usersController.addUser);

routes.get("/api/weapons/:id", weaponController.getWeapon);
routes.get("/api/weapons", weaponController.listWeapons);
routes.post("/api/add_weapon", weaponController.addWeapon);
routes.patch("/api/edit_weapon/:id", weaponController.editWeapon);
routes.delete("/api/delete_weapon/:id", weaponController.deleteWeapon);

routes.use("/api/tanks", tanksController.fetchAllTanks);
routes.use("/api/planes", planesController.fetchAllPlanes);
routes.use("/api/warships", shipsController.fetchAllShips);
routes.use("/api/plane", planeController.fetchSinglePlane);

routes.use("/api/user_favorite", favoriteController.addFavorite);
routes.delete("/api/delete_favorite/:id", favoriteController.deleteFavorite);
routes.get("/api/user_favorite/:id", favoriteController.getFavorite);

module.exports = routes;
