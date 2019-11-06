const express = require('express');
const app = express();

app.get('/toupper',(req,res) => {
    if (req.query.text) {
        res.status(200).type('.html')
        .end(`<html><body><h1>${req.query.text.toUpperCase()}</h1></body></html>`);
    } else {
        res.status(500).type('.html')
        .end(`<html><body><h1>Query String Parameter Missing!</h1></body></html>`);
    }
})
app.get('/*', (req,res) => {
    res.status(500).type('.html')
       .end(`<html><body><h1>Unknown Pathname!</h1></body></html>`);
})
app.listen(process.env.PORT || 8099);