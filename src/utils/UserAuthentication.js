import Expo from 'expo';

const ANDROID_ID = 'CLIENT_ID'; // <--- ADD CLIENT ID HERE FOR ANDROID!
const IOS_ID = ''; // <--- ADD CLIENT ID HERE FOR IOS!
const SUCCESS = 'success'; 

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: ANDROID_ID,
      iosClientId: IOS_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === SUCCESS) {
      return result.user;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  }
}

export const authenticate = (user) => {

    if(user !== null){
        return true;
    } 
}
