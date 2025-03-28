//import { defineBackend } from '@aws-amplify/backend';
import { referenceAuth } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/*defineBackend({
  auth,
  data,
});*/
referenceAuth({
  auth,
  data,
});
