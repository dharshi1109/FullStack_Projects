const express = require('express');
const mongoose = require('mongoose');
const surveyRoute = require('./routes/surveyRoutes');
const SurveyModel = require('./models/surveyModel');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Pet")
        console.log("MongoDB connected successfully")
    } catch (err) {
        console.log(err)
    }
}

connectDB()

const app = express()

app.use(bodyParser.json())
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.post('/survey', surveyRoute);
app.get('/survey/results', async (req, res) => {
    try {
        const surveyResults = await SurveyModel.find({});
        res.json(surveyResults);
    } catch (error) {
        console.error('Error fetching survey results:', error.message);
        res.status(500).json({ error: 'Failed to fetch survey results' });
    }
});

const PORT = 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
