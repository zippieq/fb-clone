import User from '../models/User'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};
const validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

const validateUsername = async (username) => {
  const maxIterations = 100; // Set a maximum iteration count
  let iteration = 0;

  while (iteration < maxIterations) {
    const check = await User.findOne({ username });

    if (check) {
      // Change username if it already exists
      username += (+new Date() * Math.random()).toString().substring(0, 1);
    } else {
      break;
    }

    iteration++;
  }

  return username;
};

export default {
    validateEmail,
    validateLength,
    validateUsername,
};