const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// not a database, just some in-memory storage for this simple app
const DUMMY_PRODUCTS = [
    {
        id: 1223,
        title: "MacBook Pro",
        price: 1200,
        brand: "APPLE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        opsys: "Mac OS",
        memory: 16,
        disc: "256 GB"
    },
    {
        id: 7688,
        title: "HP Pavillon",
        price: 900,
        brand: "HP",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        opsys: "Windows",
        memory: 8,
        disc: "1T"
    },
    {
        id: 3748,
        title: "My Toshiba",
        price: 700,
        brand: "TOSHIBA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        opsys: "Linux",
        memory: 4,
        disc: "512 GB"
    },
    {
        id: 1530,
        title: "Len XP",
        price: 1800,
        brand: "LENOVO",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        opsys: "Windows",
        memory: 16,
        disc: "2T"
    },
    {
        id: 8076,
        title: "ACER Aspire 5",
        price: 500,
        brand: "ACER",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        opsys: "Linux",
        memory: 4,
        disc: "256 GB"
    },
    {
        id: 5342,
        title: "APPLE",
        price: 1400,
        brand: "Macbook 13 pul",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        opsys: "Mac OS",
        memory: 4,
        disc: "1T"
    },
]; 

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.get('/products', (req, res, next) => {
  res.status(200).json({ products: DUMMY_PRODUCTS });
});

app.listen(5000); // start Node + Express server on port 5000
