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
  about: async () => {
    const URL = `${c.API_CONSUMER}/api/about/about`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {
      checkError(error);
      // throw error;
    }
  },
  addAbout: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/about/addAbout`;
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
  edit: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/about/edit`;
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
  delete: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/about/delete`;
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

