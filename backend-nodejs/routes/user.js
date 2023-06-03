import express from 'express';
import userHandler from './handlers/user.js'
const routes = express.Router();

routes.get('/user', userHandler);

export default routes;