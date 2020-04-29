const Interview = require('../models/interview.js');

const all = async function (req, res, next) {
  try {
    const interviewList = await new Interview({}).all();
    res.send({ interviewList });
  } catch (err) {
    next(err);
  }
};

const addInterview = async function (req, res, next) {
  const interviewParam = {
    sid: req.body.sid,
    question: req.body.question,
    answer:req.body.answer,
    status: req.body.status,
  };
  try {
    const newInterview = new Interview(interviewParam);
    await newInterview.addInterview();
    const interviewList = await new Interview({}).all();
    res.send({interviewList});
  } catch (err) {
    next(err);
  }
};
const sectionList = async function (req, res, next) {
  try {
    const sectionList = await new Interview({}).sectionList();
    res.send({ sectionList });
  } catch (err) {
    next(err);
  }
};
const addSection = async function (req, res, next) {
  const interviewParam = {
    title: req.body.title,
    status: req.body.status,
  };
  try {
    const newInterview = new Interview(interviewParam);
    await newInterview.addSection();
    const interviewList = await new Interview({}).sectionList();
    res.send({interviewList});
  } catch (err) {
    next(err);
  }
};

const getSection = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newInterview = new Interview(courseParam);
    const section= await newInterview.getSection();
    // const sectionList = await new Interview({}).sectionList();
    res.send({section});
  } catch (err) {
    next(err);
  }
};
const editSection = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
    title: req.body.title,
    status: req.body.status,
  };
  try {
    const newSection = new Interview(courseParam);
    const section= await newSection.editSection();
    res.send({section});
  } catch (err) {
    next(err);
  }
};


const deleteSection = async function (req, res, next) {
  const sectionParam = {
    id: req.body.id,
  };
  try {
    const newSection = new Interview(sectionParam);
    await newSection.deleteSection();
    const sectionList = await new Interview({}).sectionList();
    
    res.send({sectionList});
  } catch (err) {
    next(err);
  }
};


const getInterview = async function (req, res, next) {
  const interviewParam = {
    id: req.body.id,
  };
  try {
    const newInterview = new Interview(interviewParam);
    const interview= await newInterview.getInterview();
    res.send({interview});
  } catch (err) {
    next(err);
  }
};
const editInterview = async function (req, res, next) {
  const interviewParam = {
    id: req.body.id,
    sid: req.body.sid,
    question: req.body.question,
    answer:req.body.answer,
    status: req.body.status,
  };
  try {
    const newInterview = new Interview(interviewParam);
    const interview= await newInterview.editInterview();
    res.send({interview});
  } catch (err) {
    next(err);
  }
};


const deleteInterview = async function (req, res, next) {
  const interviewParam = {
    id: req.body.id,
  };
  try {
    const newInterview = new Interview(interviewParam);
    await newInterview.deleteInterview();
    const interviewList = await new Interview({}).all();
    
    res.send({interviewList});
  } catch (err) {
    next(err);
  }
};
module.exports = { all,addInterview,addSection,sectionList,getSection,editSection,deleteSection,getInterview,editInterview,deleteInterview};