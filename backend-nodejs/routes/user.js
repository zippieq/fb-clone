import express from 'express';
import register from './handlers/user.js'
const routes = express.Router();

routes.get('/register', register);

export default routes;