import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors({
    origin: ["https://startupmentor.onrender.com"]
}))

app.get('/', (req, res) => {
    setTimeout(() => {
    fetch('https://startupmentor.onrender.com',
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            }
        }
        
    ) 
    .then(res => res.json())
    },600000)
});


app.listen(3000, () => {
	console.log('Server is running on port 3000');
});