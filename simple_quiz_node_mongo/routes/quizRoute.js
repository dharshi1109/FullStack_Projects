const quizModel = require('../models/quizModel')

const retrieveData = async (req, res) => {
    try {
        const data = await quizModel.find()
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Can\'t retrieve the questions'
        })
    }
}

module.exports = retrieveData