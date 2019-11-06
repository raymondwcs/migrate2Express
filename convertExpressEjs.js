const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/toupper',(req,res) => { // GET /toupper
    if (req.query.text) {
        res.status(200).render('message',{message:req.query.text.toUpperCase()});
    } else {
        res.status(500).render('message',{message: 'Query String Parameter Missing!'});
    }
})
app.get('/*', (req,res) => {  // Other pathnames
    res.status(500).render('message',{message: 'Invalid Pathname!'});
})
app.listen(process.env.PORT || 8099);