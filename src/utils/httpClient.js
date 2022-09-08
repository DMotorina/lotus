import axios from 'axios'

const httpClient = axios.create();
httpClient.defaults.xsrfHeaderName = "X-CSRFTOKEN";
httpClient.defaults.xsrfCookieName = "csrftoken";

export { httpClient }