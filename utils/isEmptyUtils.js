// Check if array has length
export function isNotEmptyArray(verifyArray) {
  if (verifyArray && verifyArray.constructor === Array) {
    return verifyArray.length > 0;
  }
  if (
    process.env.NODE_ENV !== "test" &&
    process.env.NODE_ENV !== "production"
  ) {
    // eslint-disable-next-line
    console.warn(
      `[isNotEmptyArray]: The array being verified is not an array: ${verifyArray}`
    );
  }
  return null;
}

// Check if array is empty or not
export function isEmptyArray(verifyArray) {
  if (verifyArray && verifyArray.constructor === Array) {
    return verifyArray.length === 0;
  }
  if (
    process.env.NODE_ENV !== "test" &&
    process.env.NODE_ENV !== "production"
  ) {
    // eslint-disable-next-line
    console.warn(
      `[isEmptyArray]: The array being verified is not an array: ${verifyArray}`
    );
  }
  return null;
}

// Check if object is empty or not
export function isEmptyObject(verifyObject) {
  if (verifyObject && verifyObject.constructor === Object) {
    return Object.keys(verifyObject).length === 0;
  }
  if (
    process.env.NODE_ENV !== "test" &&
    process.env.NODE_ENV !== "production"
  ) {
    // eslint-disable-next-line
    console.warn(
      `[isEmptyObject]: The object being verified is not an object: ${verifyObject}`
    );
  }
  return null;
}

// Check if object is NOT empty
export function isNotEmptyObject(verifyObject) {
  if (verifyObject && verifyObject.constructor === Object) {
    return Object.keys(verifyObject).length > 0;
  }
  if (
    process.env.NODE_ENV !== "test" &&
    process.env.NODE_ENV !== "production"
  ) {
    // eslint-disable-next-line
    console.warn(
      `[isNotEmptyObject]: The object being verified is not an object: ${verifyObject}`
    );
  }
  return null;
}
