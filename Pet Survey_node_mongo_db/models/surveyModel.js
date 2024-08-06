const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: true
    },
    answer2: {
        type: Number,
        required: true
    },
    answer3: {
        type: String,
        required: true
    },
    answer4: {
        type: String,
        required: true
    },
    answer5: {
        type: Number,
        required: true
    }
});

const SurveyModel = mongoose.model('Survey', surveySchema);

module.exports = SurveyModel;
