const express = require('express');
const Course = require('../controllers/course/course.js');
const courseRouter = express.Router();


courseRouter.route('/list').get(Course.all);
courseRouter.route('/sectionList').get(Course.sectionList);
courseRouter.route('/addSection').post(Course.addSection);
courseRouter.route('/deleteMainCourse').post(Course.deleteMainCourse);
courseRouter.route('/getMainCourse').post(Course.getMainCourse);
courseRouter.route('/editMainCourse').post(Course.editMainCourse);
courseRouter.route('/addCourse').post(Course.addCourse);
courseRouter.route('/course').get(Course.course);
courseRouter.route('/getCourse').post(Course.getCourse);
courseRouter.route('/editSCourse').post(Course.editSCourse);
courseRouter.route('/getCourseBatches').post(Course.getCourseBatches);

courseRouter.route('/lecture').post(Course.lecture);
courseRouter.route('/addLecture').post(Course.addLecture);
courseRouter.route('/getLectures').post(Course.getLectures);
courseRouter.route('/editLecture').post(Course.editLecture);
courseRouter.route('/deleteLecture').post(Course.deleteLecture);

courseRouter.route('/batches').get(Course.batches);
courseRouter.route('/addBatch').post(Course.addBatch);
courseRouter.route('/getBatch').post(Course.getBatch);
courseRouter.route('/editBatch').post(Course.editBatch);
courseRouter.route('/deleteBatch').post(Course.deleteBatch);

courseRouter.route('/faqs').get(Course.faqs);
courseRouter.route('/addFaq').post(Course.addFaq);
courseRouter.route('/getFaq').post(Course.getFaq);
courseRouter.route('/editFaq').post(Course.editFaq);
courseRouter.route('/deleteFaq').post(Course.deleteFaq);
courseRouter.route('/getCourseFaq').post(Course.getCourseFaq);
courseRouter.route('/certifications').get(Course.certifications);
courseRouter.route('/addCertification').post(Course.addCertification);

module.exports = courseRouter;