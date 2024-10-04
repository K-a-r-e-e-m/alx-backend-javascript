export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!(students instanceof Array)) {
      throw new TypeError('students must be an array');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
    if (typeof newLength !== 'number') {
      throw new TypeError('length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
    if (!(newStudents instanceof Array)) {
      throw new TypeError('students must be an array');
    }
    if (!newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
  }
}
