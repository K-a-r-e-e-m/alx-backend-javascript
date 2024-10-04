export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
        throw new TypeError('Name must be a string')
    }
    if (typeof length !== 'number') {
        throw new TypeError('length must be a number')
    }
    if (typeof students !== 'array') {
        throw new TypeError('students must be an array')
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
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
