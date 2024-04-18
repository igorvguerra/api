const { Router } = require("express");
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const userController = new UsersController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update);

module.exports = usersRoutes;