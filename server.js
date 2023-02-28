const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

const PORT = 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// app.use(app.router);
// routes.initialize(app);

db.once('open', ()=> {
    app.listen(PORT, ()=> {
        console.log(`listening on ${PORT}`);
    });
});
