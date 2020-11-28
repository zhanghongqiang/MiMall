let baseURL;

switch(process.env.NODE_ENV){
  case "development":
    baseURL = 'dev/api';
    break;
  case "production":
    baseURL = 'pro/api'
    break;
  default:
    baseURL = 'pro/api'
    break;
}

export default {
  baseURL
}