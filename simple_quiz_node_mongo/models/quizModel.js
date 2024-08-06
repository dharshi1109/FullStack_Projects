const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const quizModel = mongoose.model('quizzes', quizSchema)

module.exports = quizModel