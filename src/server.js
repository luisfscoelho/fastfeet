import express from 'express';

const server = express();

server.get('/', (req, res) => res.json({ ok: true }));

server.listen(3333);
