import Url from 'url';
import axios from 'axios';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const res = await axios.get(uri);

  return res;
}

export default req;
