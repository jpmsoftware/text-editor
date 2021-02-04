const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/new.ejs');
});

app.use((req, res) => {
    res.end('Error 404 not found');
})