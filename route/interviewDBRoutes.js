//importing package
const express = require('express');
const aptiQA = require('../model/aptiQA');
const interviewedUser = require('../model/interviewedUser');

// initialising
const router = express.Router();

//routes for getting and inserting aptitude questions
router.get('/getQA', (req, res, next) => {
    aptiQA.find((error, result) => {
        if (error)
            res.status(404).json({
                Messsage: 'Some Error Occured',
                ErrorDetail: Error
            });
        else
            res.status(200).json(result);
    });
});

router.post('/getQA', (req, res, next) => {
    var data = new aptiQA(req.body);
    data.save((error, result) => {
        if (error)
            res.status(404).json({
                Messsage: 'Some Error Occured',
                ErrorDetail: Error
            });
        else
            res.status(200).json(result);
    })
});

//routes for user who have apperead for interview
router.get('/getUser', (req, res, next) => {
    interviewedUser.find((error, result) => {
        if (error)
            res.status(404).json({
                Messsage: 'Some Error Occured',
                ErrorDetail: Error
            });
        else
            res.status(200).json(result);
    });
});

router.post('/getUser', (req, res, next) => {
    var data = new interviewedUser(req.body);
    data.save((error, result) => {
        if (error)
            res.status(404).json({
                Messsage: 'Some Error Occured',
                ErrorDetail: Error
            });
        else
            res.status(200).json(result);
    })
});
//exporting router
module.exports = router;