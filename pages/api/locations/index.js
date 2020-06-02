import auth0 from '../../../lib/auth0';
import fetch from 'isomorphic-unfetch';

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default auth0.requireAuthentication(async (req, res) => {
  try {
    const callRes = await fetcher(process.env.LOCATION_URL);
    if (!callRes || callRes.statusCode !== '200') {
      return res.status(400).send();
    }
    return res.status(200).json(callRes.body);
  } catch (error) {
    //console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});
