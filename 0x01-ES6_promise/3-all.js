import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(data.body, data.firstName, data.lastName);
    })
    .catch(() => new Error('Signup system offline'));
}
