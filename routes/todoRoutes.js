const express = require('express');
const router = express.Router();

const todoController = require('../app/http/todoController');

router.get("/test", todoController.test);
router.post("/create", todoController.create);
router.get("/", todoController.todoShow);
router.get("/:id", todoController.todoDetails);
router.put("/:id/update", todoController.todoUpdate);
router.post("/:id/delete", todoController.todoDelete);

module.exports = router;