const express = require('express');
const cors = require('cors');

const participantController = require('./controllers/participantController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('OK');
});

app.get('/participant', participantController.index);
app.post('/participant', participantController.create);

app.listen(3333);