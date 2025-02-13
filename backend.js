"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["https://startupmentor.onrender.com"]
}));
app.get('/', (req, res) => {
    setTimeout(() => {
        fetch('https://startupmentor.onrender.com', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json());
    }, 600000);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
