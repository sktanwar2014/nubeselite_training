export default {
  'config-development': {
    API_URL : 'http://localhost:3000',
    AUTH_URL : 'http://localhost:3000',        
  },
  // 'config-prod': {
  //   API_URL: '',
  //   AUTH_URL: '',
  // },
  get 'development-local-stag'() {
    return this['config-development'];
  },
  get 'production-production-prod'() {
    return this['config-prod'];
  },
};
