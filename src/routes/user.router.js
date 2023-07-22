const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter
    .route("/")
	.get(getAll)
    .post(create);

    //By id
userRouter
    .route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update);
    

module.exports = userRouter;