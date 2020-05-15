import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';
import passport from '../../../lib/passport';
import { localStrategy } from '../../../lib/password-local';

const handler = nextConnect();

handler.use(middleware);
passport.use(localStrategy);

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });

handler.get(async (req, res) => {
  const user = await authenticate('local', req, res);
  // session is the payload to save in the token, it may contain basic info about the user
  const session = { ...user };
  console.log('location.index.js; get');
  console.log(session);
  console.log(req.user);
  if (!req.user) {
    return res.json(401).send('Unauthenticated');
  } else {
    return res.json(200).send([]);
  }
});

export default handler;
