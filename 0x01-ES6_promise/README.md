# ES6 Promises

## Learning Objectives
- [x] Promises (how, why, and what)
- [x] How to use the then, resolve, catch methods
- [x] How to use every method of the Promise object
- [x] Throw / Try
- [x] The await operator
- [x] How to use an async function

### utils.js
Use when you get to tasks requiring `uploadPhoto` and `createUser`.

```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```


### Response Data Format
`uploadPhoto` returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```
`createUser` returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```
