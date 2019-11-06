# From Vanilla Node.js to Express and EJS
Examples in this project help you migrate to [`Express`]{https://expressjs.com} and [`EJS`]{https://ejs.co}.

## convert.js
A Node.js server accepts `GET /toupper?text=xxx`, converts value of query string variable `text` to uppercase without using any framework.

## convertExpress.js
A Node.js server accepts `GET /toupper?text=xxx`, converts value of query string variable `text` to uppercase using Express.

## convertExpressEjs.js
A Node.js server accepts `GET /toupper?text=xxx`, converts value of query string variable `text` to uppercase using Express and EJS.  Study EJS template in folder `views/message.ejs`. 

## Getting Started

### Installing
```
npm install express ejs
```
### Running
```
1. node convert
2. node convertExpress
3. node convertExpressEjs
```
### Testing
Send a GET request to http://localhost:8099/toupper?text=lowercase
