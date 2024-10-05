import handleProfileSignup from './6-final-user';

async function displaySignupResult() {
  try {
    const results = await handleProfileSignup('FirstName', 'LastName', 'filename.jpg');
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}

displaySignupResult();
