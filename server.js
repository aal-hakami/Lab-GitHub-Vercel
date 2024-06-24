const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const name = 'Asem Al-Hakami';
    const className = 'WEB322';
    const currentGMT = new Date().toISOString();
    res.send(`${name} - ${className} - ${currentGMT}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
