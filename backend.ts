import express from 'express';

const app = express();



app.get('/', (req, res) => {
    setTimeout(() => {
    fetch('https://startupmentor.onrender.com') 
    .then(res => res.json())
    },600000)
});


app.listen(3000, () => {
	console.log('Server is running on port 3000');
});