import Constants from 'expo-constants';

function getServerURI() {
    let BASE_SERVER: string = '';
    console.log(Constants.experienceUrl);
    if (__DEV__) {
        BASE_SERVER = `http://${Constants.experienceUrl
            .split('//')
            .pop()
            ?.split(':')
            .shift()}:8080/`;
    }

    return BASE_SERVER;
}
const URI = getServerURI();
export default URI;