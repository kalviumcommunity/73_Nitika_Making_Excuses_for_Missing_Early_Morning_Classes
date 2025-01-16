const express = require('express');
const app = express();
app.get('/ping', (req, res)=>{
    res.json({message: 'pong'});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on the port ${PORT}`);
});