/**import { defineAuth } from '@aws-amplify/backend';*/

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
/**export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes:{
    preferredUsername: {
      mutable: true,
      required: false
    }
  }
});*/
import { referenceAuth } from '@aws-amplify/backend';
export const auth = referenceAuth({
  userPoolId:'us-east-1_2smtF6ZtW',
  identityPoolId: 'us-east-1:6a271046-6577-48b9-893a-f78379efa592',
  authRoleArn: 'arn:aws:cognito-identity:us-east-1:881490115999:identitypool/us-east-1:6a271046-6577-48b9-893a-f78379efa592',
  unauthRoleArn: 'arn:aws:cognito-identity:us-east-1:881490115999:identitypool/us-east-1:6a271046-6577-48b9-893a-f78379efa592',
  userPoolClientId:'ftg98iecdtq9773kmeq11stg4,
});
