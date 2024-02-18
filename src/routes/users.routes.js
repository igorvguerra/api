const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware");
    if(!request.body.isAdmin) {
        return response.json({message: "user unauthorized"});
    }
    next();
}  





const userController = new UsersController();

usersRoutes.post("/", myMiddleware, userController.create);

module.exports = usersRoutes;