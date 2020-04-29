import { validString, validNumber, validEmail, validAlpha } from './Regex';

export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (!validString.test(values.name)) {
    errors.name = 'Name is invalid';
  }
  if (!values.advantages) {
    errors.advantages = 'Advantages is required';
  } 
  if (!validString.test(values.about)) {
    errors.about = 'About is invalid';
  }
  
  return errors;
};