import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// 1. Rute Statis / Spesifik (Wajib ditaruh sebelum rute /:id)
subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals' }));
subscriptionRouter.get('/user/:id', authorize, getUserSubscription); // <-- Rute kamu di sini (/user/:id)

// 2. Rute Dinamis (/:id)
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details' }));
subscriptionRouter.post('/', authorize, createSubscription); 
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' })); // Tambahkan :id di sini
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription' }));

export default subscriptionRouter;