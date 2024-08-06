const SurveyModel = require('../models/surveyModel');

const surveyRoute = async (req, res) => {
    try {
        const surveyData = req.body;

        const newSurvey = new SurveyModel(surveyData);

        await newSurvey.save();

        res.status(201).json({ message: 'Survey submitted successfully' });
    } catch (error) {
        console.error('Error submitting survey:', error.message);
        res.status(500).json({ error: 'Failed to submit the survey' });
    }
};

module.exports = surveyRoute;
