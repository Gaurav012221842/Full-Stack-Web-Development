const app=require('./app.js');
const PORT=process.env.PORT || 5000;
app.get('/', function(req, res) {
    res.send('Hello World!');
});
app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});