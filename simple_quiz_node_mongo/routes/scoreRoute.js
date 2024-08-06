const quizModel = require('../models/quizModel')
const userModel = require('../models/userModel')

const giveScore = async (req, res) => {
    try{
        const answers = req.body.answers
        const userDetails = req.body.userDetails

        if (!userDetails || !userDetails.username || !userDetails.email) {
            return res.status(400).json({ message: 'User details are missing or invalid' });
        }

        const questions = await quizModel.find()
        
        let score = 0
        questions.forEach((question, index) => {
            if(question.answer === answers[index]){
                score++
            }
        })

        const newUser = new userModel({
            username: userDetails.username,
            email: userDetails.email,
            score: score
        })

        await newUser.save()

        res.json({ 
            username: newUser.username,
            email: newUser.email,
            score: newUser.score 
        });
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Can\'t calculate scores'
        })
    }

}

module.exports = giveScore