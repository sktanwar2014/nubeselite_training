import axios from 'axios';
import * as c from './Constants';
import { authHeader } from './AuthHeader';
import checkError from './HttpClient';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: {
    'Content-Type': 'application/json',
  },
  headers: authHeader(),
});

export default {
  list: async () => {
    const URL = `${c.API_CONSUMER}/api/course/list`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  addSCourse: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/addCourse`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  editSCourse: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/editSCourse`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  addLecture: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/addLecture`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  lecture: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/lecture`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  editLecture: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/editLecture`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  course: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/course`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  addSCourse: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/addCourse`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  getCourse: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/getCourse`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  getLectures: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/getLectures`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  deleteLecture: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/deleteLecture`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  getCourseFaq: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/getCourseFaq`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },

  addBatch: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/addBatch`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  batches: async () => {
    const URL = `${c.API_CONSUMER}/api/course/batches`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  getCourseBatches: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/getCourseBatches`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  getBatch: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/getBatch`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  editBatch: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/editBatch`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  deleteBatch: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/deleteBatch`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  addFaq: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/addFaq`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  faqs: async () => {
    const URL = `${c.API_CONSUMER}/api/course/faqs`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },

  getFaq: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/getFaq`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  editFaq: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/editFaq`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  deleteFaq: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/deleteFaq`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  addCertification: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/addCertification`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  certifications: async () => {
    const URL = `${c.API_CONSUMER}/api/course/certifications`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  sectionList: async () => {
    const URL = `${c.API_CONSUMER}/api/course/sectionList`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  addSection: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/addSection`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  deleteMainCourse: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/deleteMainCourse`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  getMainCourse: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/getMainCourse`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
  editMainCourse: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/course/editMainCourse`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      // throw error;
    }
  },
};

