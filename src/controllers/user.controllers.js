const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const user = await User.findAll();
    return res.json(user);
});

const create = catchError(async(req, res) => {
    const userCreate = await User.create(req.body);
    return res.status(201).json(userCreate);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const userSelector = await User.findByPk(id);
    if(!userSelector) return res.sendStatus(400);
    return res.json(userSelector)
});

const destroy = catchError(async(req, res) =>{
    const { id } = req.params;
    const userDestroy = await User.destroy({ where: { id } });
    if(!userDestroy) return res.sendStatus(400);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const userUpdate = await User.update(req.body, {
        where: { id }, returning: true
    });
    if(userUpdate[0] === 0) return res.sendStatus(400);
    return res.json(userUpdate[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}