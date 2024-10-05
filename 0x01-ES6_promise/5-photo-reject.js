export default function uploadPhoto(filename) {
  return Promise.reject(() => console.error(`${filename} cannot be processed`));
}
