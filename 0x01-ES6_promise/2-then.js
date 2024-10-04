export default function handleResponseFromAPI(promise) {
  return new Promise(() => {
    promise.then(function () {
      return {
        status: 200,
        body: 'success',
      };
    }).catch(() => {
      return Error();
    }).then(
      console.log('Got a response from the API')
    )
  });
}
