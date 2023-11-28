import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Server is listening") 
})

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('Server listening on port: ' + port)
});

// CORs -> Cross origin requests -> dont allow all request. only same origin requests are allowed. Need whitelisting of IP
// proxy -> same base urls. not only makes easy base variable, but also makes same origin request.
// /api -> standarised
// tool chain -> react/vite -> any front end bundler

app.get('/api/jokes', (req, res) => {
    const joke = [
        {
          "id": "0001",
          "type": "donut",
          "name": "Cake",
          "ppu": 0.55
        },
        {
          "id": "0002",
          "type": "jilebi",
          "name": "Raised",
          "ppu": 0.55
        },
        {
          "id": "0003",
          "type": "tres LEches",
          "name": "Old Fashioned",
          "ppu": 0.55
        },
        {
          "id": "0003",
          "type": "laddu",
          "name": "Old Fashioned",
          "ppu": 0.55
        }
      ]
    res.send(joke)
});