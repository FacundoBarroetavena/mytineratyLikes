const express = require("express");
const Router = express.Router();
const citiesRouter = require('./citiesRoutes');
const homeRouter = require('./homeRoute');
const itineraryRouter = require('./itineraryRoutes');
const userRouter = require('./usersRoutes');
const favouriteRouter = require('./favouritesRoutes');

Router.use('/api/cities/', citiesRouter);
Router.use('/api',homeRouter);
Router.use('/api/itineraries/',itineraryRouter);
Router.use('/api/users/', userRouter);
Router.use('/api/favourties/', favouriteRouter);

module.exports = Router;