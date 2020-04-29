const express = require('express');
const Interview = require('../controllers/interview.js');
const interviewRouter = express.Router();



interviewRouter.route('/list').get(Interview.all);
interviewRouter.route('/addInterview').post(Interview.addInterview);
interviewRouter.route('/addSection').post(Interview.addSection);
interviewRouter.route('/sectionList').get(Interview.sectionList);

interviewRouter.route('/deleteSection').post(Interview.deleteSection);
interviewRouter.route('/getSection').post(Interview.getSection);
interviewRouter.route('/editSection').post(Interview.editSection);

interviewRouter.route('/deleteInterview').post(Interview.deleteInterview);
interviewRouter.route('/getInterview').post(Interview.getInterview);
interviewRouter.route('/editInterview').post(Interview.editInterview);


module.exports = interviewRouter;