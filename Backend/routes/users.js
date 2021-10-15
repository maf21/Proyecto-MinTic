const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const UserController = require("../controllers/users");
router.get("", UserController.getUsers);
router.get("/:email", auth,UserController.getUser);
router.post("", UserController.addUser);
router.get("/activos", UserController.getIdentificacion);
router.get("/:id", UserController.getUserId);
module.exports = router;