import axios from 'axios'

axios.defaults.baseURL =  'http://127.0.0.1:3000/';
let URL_PREFIX = 'mockSystem'

//实例
function ccbrequest(method, txCode, data) {
    let formData = data;
    let paramsDefault = {
      method: method,
      url: `${URL_PREFIX}`,
      params: {
        TXCODE: txCode
      },
      data: formData,
      timeout: 100000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
  
    return new Promise((resolve, reject) => {
      axios(paramsDefault)
        .then((res) => {
          resolve(res)
        })
        .catch((response) => {
          reject(response)
        })
    })
  }

  export default {
    install: (Vue) => {
      Vue.prototype.$post = (txCode, data) => ccbrequest('post', txCode, data);
    }
  }