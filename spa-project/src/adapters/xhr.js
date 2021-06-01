import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:8090",
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
  }
});

// export async function getData() {
//   return (await base.get()).data
// }

export default {
  getData: () =>
  axios.get('http://localhost:8090/user?username=liza')
  .then((response) => {
    // console.log(response.data);
    return response.data;
  })
  // postData: () =>
  // instance({
  //     'method': 'POST',
  //     'url':'/api',
  //     'data': {
  //         'item1':'data1',
  //         'item2':'item2'
  //     }
  // })
}