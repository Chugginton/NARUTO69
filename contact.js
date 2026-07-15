const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public')); 

app.post('/contact', (req, res) => {
    const { email, message } = req.body;
    console.log(`✉️ New Ninja Scroll from ${email}: "${message}"`);
    res.status(200).json({ success: true, message: "Scroll received!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});