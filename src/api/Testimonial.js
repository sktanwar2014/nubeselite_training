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
    const URL = `${c.API_CONSUMER}/api/testimonial/list`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  addTestimonial: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/testimonial/addTestimonial`;
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
  deleteTestimonial: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/testimonial/deleteTestimonial`;
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
  getTestimonial: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/testimonial/getTestimonial`;
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
  editTestimonial: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/testimonial/editTestimonial`;
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

