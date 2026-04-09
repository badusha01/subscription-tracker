import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controller/subscription.controller.js';

const subscriptionRoute = Router();

subscriptionRoute.get('/', (req, res) => res.send({title: 'GET all subscriptions'}));

subscriptionRoute.get('/:id', (req, res) => res.send({title: 'GET subscription details'}));

subscriptionRoute.post('/', authorize, createSubscription);

subscriptionRoute.put('/:id', (req, res) => res.send({title: 'UPDATE subscription'}));

subscriptionRoute.delete('/:id', (req, res) => res.send({title: 'DELETE subscription'}));

subscriptionRoute.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRoute.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscriptions'}));

subscriptionRoute.get('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals'}));



export default subscriptionRoute;