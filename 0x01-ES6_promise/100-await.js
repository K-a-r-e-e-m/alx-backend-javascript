import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photoVar = null;
  let userVar = null;
  try {
    photoVar = await uploadPhoto();
    userVar = await createUser();
  } catch (error) {
    photoVar = null;
    userVar = null;
  }
  return {
    photo: photoVar,
    user: userVar,
  };
}
