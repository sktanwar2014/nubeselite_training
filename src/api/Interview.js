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
    const URL = `${c.API_CONSUMER}/api/interview/list`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  addInterview: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/addInterview`;
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
  addSection: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/addSection`;
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
  sectionList: async () => {
    const URL = `${c.API_CONSUMER}/api/interview/sectionList`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  getInterview: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/getInterview`;
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
  editInterview: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/editInterview`;
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
  deleteInterview: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/deleteInterview`;
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
  getSection: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/getSection`;
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
  editSection: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/editSection`;
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
  deleteSection: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/interview/deleteSection`;
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

