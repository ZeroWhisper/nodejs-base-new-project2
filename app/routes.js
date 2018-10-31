const express = require('express');
const routes = express.Router();

const authMiddleware = require('./middlewares/auth');
const flashMiddleware = require('./middlewares/flash');
const guestMiddleware = require('./middlewares/guest');
const errorMiddleware = require('./middlewares/error');

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');
const categoryController = require('./controllers/categoryController');
const snippetController = require('./controllers/snippetController');

routes.use(flashMiddleware);
routes.use('/app', authMiddleware);

// GET, POST, PUT, DELETE

/**
 * User, geral para testes
 */
// routes.get('/', userController.index);
routes.get('/', (req, res) => {
  res.redirect('/auth');
});

/**
 * Auth
 */
routes.get('/auth', guestMiddleware, authController.signin);
routes.get('/auth/signup', guestMiddleware, authController.signup);
routes.get('/auth/signout', authController.signout);
routes.post('/auth/register', authController.register);
routes.post('/auth/authenticate', authController.authenticate);

/**
 * Dashboard
 */
routes.get('/app/dashboard', dashboardController.index);

/**
 * Categories
 */
routes.get('/app/categories/:id', categoryController.show);
routes.post('/app/categories/create', categoryController.store);

/**
 * Snippets
 */
routes.get('/app/categories/:categoryId/snippets/:id', snippetController.show);
routes.post('/app/categories/:categoryId/snippets/create', snippetController.store);
routes.put('/app/categories/:categoryId/snippets/:id', snippetController.update);
routes.delete('/app/categories/:categoryId/snippets/:id', snippetController.destroy);


routes.use(errorMiddleware.generic);
routes.use(errorMiddleware.log);

module.exports = routes;