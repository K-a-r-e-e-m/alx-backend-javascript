export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Remove unused variable
    // var task = true;
    // var task2 = false;
  }

  return [task, task2];
}
