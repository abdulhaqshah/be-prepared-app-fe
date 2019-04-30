// import {API_HOST,USER_PATH} from './constants';
// const USER_URL = {API_HOST }+{USER_PATH};

const postUserData = (data) =>
{ 
    fetch("http://localhost:8000/user/register", {  
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(res => {
        //   console.log(res);
        return res.json();
      }).then(json => {
        console.log('res json', json);
      });
}

export default postUserData;
