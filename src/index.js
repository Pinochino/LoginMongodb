const express = require('express');
const express = require('path');
const express = require('bcrypt');

const app = express();


// use ejs as the view engine
app.set('view engine', "ejs");



const port = 5000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
