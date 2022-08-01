import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const person = {
    status: 'pending',
    value: '',
  };
  const picture = {
    status: 'pending',
    value: '',
  };
  try {
    const getIn = await signUpUser(firstName, lastName);
    person.status = 'fulfilled';
    person.value = getIn;
  } catch (err) {
    person.status = 'rejected';
    person.value = err.toString();
  }
  try {
    const pictureUp = await uploadPhoto(fileName);
    picture.status = 'fulfilled';
    picture.value = pictureUp;
  } catch (err) {
    picture.status = 'rejected';
    picture.value = err.toString();
  }
  return [person, picture];
}
