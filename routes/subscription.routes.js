import { Router } from 'express';

const subscriptionRoute = Router();

subscriptionRoute.get('/', (req, res) => res.send({title: 'GET all subscriptions'}));

subscriptionRoute.get('/:id', (req, res) => res.send({title: 'GET subscription details'}));

subscriptionRoute.post('/', (req, res) => res.send({title: 'CREATE subscription '}));

subscriptionRoute.put('/:id', (req, res) => res.send({title: 'UPDATE subscription'}));

subscriptionRoute.delete('/:id', (req, res) => res.send({title: 'DELETE subscription'}));

subscriptionRoute.get('/user/:id', (req, res) => res.send({title: 'GET all user subscriptions'}));

subscriptionRoute.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscriptions'}));

subscriptionRoute.get('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals'}));



export default subscriptionRoute;