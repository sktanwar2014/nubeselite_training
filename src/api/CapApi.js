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
    check: async ({ cancelToken, ...payload }) => {
        const URL = `${c.API_CONSUMER}/api/capt/check`;
        try {
            const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
                cancelToken,
                data: payload,
            }));
            return data;
        } catch (error) {
            checkError(error);
            // throw error;
        }
    }
};

