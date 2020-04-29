const Course = require('../../models/course/course.js');

const all = async function (req, res, next) {
  try {
    const courseList = await new Course({}).all();
    res.send({ courseList });
  } catch (err) {
    next(err);
  }
};

const sectionList = async function (req, res, next) {
  try {
    const sectionList = await new Course({}).sectionList();
    res.send({ sectionList });
  } catch (err) {
    next(err);
  }
};
const addSection = async function (req, res, next) {
  const courseParam = {
    course: req.body.course,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    await newCourse.addSection();
    const courseList = await new Course({}).sectionList();
    res.send({ courseList });
  } catch (err) {
    next(err);
  }
};

const deleteMainCourse = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    await newCourse.deleteMainCourse();
    const sectionList = await new Course({}).sectionList();
    res.send({ sectionList });
  } catch (err) {
    next(err);
  }
};
const getMainCourse = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.getMainCourse();
    res.send({ course });
  } catch (err) {
    next(err);
  }
};
const editMainCourse = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
    course: req.body.course,
    status: req.body.status
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.editMainCourse();
    res.send({ course });
  } catch (err) {
    next(err);
  }
};
const addCourse = async function (req, res, next) {
  const courseParam = {
    mid: req.body.mid,
    name: req.body.name,
    about: req.body.about,
    advantages: req.body.advantages,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.addCourse();
    const courseList = await new Course({}).all();

    res.send({ course });
  } catch (err) {
    next(err);
  }
};

const course = async function (req, res, next) {
  try {

    const course = await new Course().course();
    res.send({ course });
  } catch (err) {
    next(err);
  }
};



const getCourseBatches = async function (req, res, next) {
  const courseParam = {
    cid: req.body.cid,
  };
  try {
    const newCourse = new Course(courseParam);
    const batches = await newCourse.getCourseBatches();
    res.send({ batches });
  } catch (err) {
    next(err);
  }
};
const getCourse = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.getCourse();
    res.send({ course });
  } catch (err) {
    next(err);
  }
};
const editSCourse = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
    mid: req.body.mid,
    name: req.body.name,
    about: req.body.about,
    advantages: req.body.advantages,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.editSCourse();
  } catch (err) {
    next(err);
  }
};


const lecture = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const lecture = await newCourse.lecture();
    res.send({ lecture });
  } catch (err) {
    next(err);
  }
};

const editLecture = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const lecture = await newCourse.editLecture();
    res.send({ lecture });
  } catch (err) {
    next(err);
  }
};

const getLectures = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const lectures = await newCourse.getLectures();
    res.send({ lectures });
  } catch (err) {
    next(err);
  }
};

const deleteLecture = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    await newCourse.deleteLecture();
    const lecturesList = await new Course({ id: req.body.courseid }).getLectures();
    res.send({ lecturesList });
  } catch (err) {
    next(err);
  }
};

const addLecture = async function (req, res, next) {
  const courseParam = {
    cid: req.body.cid,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    await newCourse.addLecture();
    const lecturesList = await new Course({ id: req.body.cid }).getLectures();
    res.send({ lecturesList });
  } catch (err) {
    next(err);
  }
};


const batches = async function (req, res, next) {
  try {

    const batchList = await new Course({}).batches();
    res.send({ batchList });
  } catch (err) {
    next(err);
  }
};

const addBatch = async function (req, res, next) {
  const courseParam = {
    title: req.body.title,
    batch_name: req.body.batch_name,
    cid: req.body.cid,
    start_date: req.body.start_date,
    days: req.body.days,
    duration: req.body.duration,
    fees: req.body.fees,
    time: req.body.time,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.addBatch();
    const batchList = await new Course({}).batches();
    res.send({ batchList });
  } catch (err) {
    next(err);
  }
};

const getBatch = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const batch = await newCourse.getBatch();
    res.send({ batch });
  } catch (err) {
    next(err);
  }
};
const editBatch = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
    title: req.body.title,
    batch_name: req.body.batch_name,
    cid: req.body.cid,
    start_date: req.body.start_date,
    days: req.body.days,
    duration: req.body.duration,
    fees: req.body.fees,
    time: req.body.time,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const batch = await newCourse.editBatch();
    res.send({ batch });
  } catch (err) {
    next(err);
  }
};

const deleteBatch = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.deleteBatch();
    const batchList = await new Course({}).batches();
    res.send({ batchList });
  } catch (err) {
    next(err);
  }
};
const faqs = async function (req, res, next) {
  try {
    const faqList = await new Course({}).faqs();
    res.send({ faqList });
  } catch (err) {
    next(err);
  }
};

const addFaq = async function (req, res, next) {
  const courseParam = {
    cid: req.body.cid,
    question: req.body.question,
    answer: req.body.answer,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.addFaq();
    const faqList = await new Course({}).faqs();

    res.send({ faqList });
  } catch (err) {
    next(err);
  }
};


const getFaq = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const faq = await newCourse.getFaq();
    res.send({ faq });
  } catch (err) {
    next(err);
  }
};

const getCourseFaq = async function (req, res, next) {
  const courseParam = {
    cid: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const faqs = await newCourse.getCourseFaq();
    res.send({ faqs });
  } catch (err) {
    next(err);
  }
};
const editFaq = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
    cid: req.body.cid,
    question: req.body.question,
    answer: req.body.answer,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const faq = await newCourse.editFaq();
    res.send({ faq });
  } catch (err) {
    next(err);
  }
};

const deleteFaq = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.deleteFaq();
    const faqList = await new Course({}).faqs();

    res.send({ faqList });
  } catch (err) {
    next(err);
  }
};
const certifications = async function (req, res, next) {
  try {

    const certificationList = await new Course({}).certifications();
    res.send({ certificationList });
  } catch (err) {
    next(err);
  }
};

const addCertification = async function (req, res, next) {
  const courseParam = {
    cid: req.body.cid,
    certification: req.body.certification,
    image: req.body.image,
    status: req.body.status,
  };
  try {
    const newCourse = new Course(courseParam);
    const course = await newCourse.addCertification();
    const certificationList = await new Course({}).certifications();

    res.send({ certificationList });
  } catch (err) {
    next(err);
  }
};

module.exports = { all, sectionList, addSection, addCourse, deleteMainCourse, getMainCourse, editMainCourse, course, editSCourse, getCourse, getCourseBatches, lecture, deleteLecture, addLecture, getLectures, editLecture, addBatch, batches, getBatch, editBatch, deleteBatch, faqs, addFaq, editFaq, getCourseFaq, getFaq, deleteFaq, certifications, addCertification };