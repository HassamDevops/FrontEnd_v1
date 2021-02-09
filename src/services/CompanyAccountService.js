import axios from 'axios'
import download from 'js-file-download';

const CompanyAccountService = {

  editCompanyDetails: function (input, callback) {

    let jwt = document.cookie//.jwt
    // Get all the cookies pairs in an array
    let cookiearray = jwt.split(';');
    // Now take key value pair out of this array
    let name = null
    let value = null
    for (var i = 0; i < cookiearray.length; i++) {
      name = cookiearray[i].split('=')[0];
      value = cookiearray[i].split('=')[1];
      console.log("Key is : " + name + " and Value is : " + value);
    }
    console.log('jwt is ', jwt)
    console.log('newusername: ',)
    if (!value) {
      value = ''
    }

    let headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${value}`,
      }
    }
    let finalInput = input
    axios.post(`http://localhost:3000/userdata/editdetails`, finalInput, { headers, withCredentials: true })
      .then((responseData) => {
        console.log('responseData:', responseData);
        // return responseData;
        callback(responseData);
      })
      .catch(error => console.log(error));
  },
  getCompayData: async () => {
    let jwt = document.cookie//.jwt
    // Get all the cookies pairs in an array
    let cookiearray = jwt.split(';');
    // Now take key value pair out of this array
    let name = null
    let value = null
    for (var i = 0; i < cookiearray.length; i++) {
      name = cookiearray[i].split('=')[0];
      value = cookiearray[i].split('=')[1];
      console.log("Key is : " + name + " and Value is : " + value);
    }
    console.log('jwt is ', jwt)

    if (!value) {
      value = ''
    }

    let headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${value}`,
      }
    }
    return await axios.get(`http://localhost:3000/userdata/companyaccount`, { headers, withCredentials: true })
      .catch(error => console.log(error));
  },
  getRegDoc: () => {

    let jwt = document.cookie//.jwt
    // Get all the cookies pairs in an array
    let cookiearray = jwt.split(';');
    // Now take key value pair out of this array
    let name = null
    let value = null
    for (var i = 0; i < cookiearray.length; i++) {
      name = cookiearray[i].split('=')[0];
      value = cookiearray[i].split('=')[1];
      console.log("Key is : " + name + " and Value is : " + value);
    }
    console.log('jwt is ', jwt)

    if (!value) {
      value = ''
    }

    let headers = {
      headers: {
        //              'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        // 'Content-Type':'application/pdf',
        'Authorization': `Bearer ${value}`,
      }
    }
    axios.get("http://localhost:3000/userdata/getfile", { headers, withCredentials: true, responseType: 'blob' })
      .then(resp => {
        download(resp.data, 'registrationdocument.pdf'); //fileName
      });

  },
  reset: function (input, callback) {

    let jwt = document.cookie//.jwt
    // Get all the cookies pairs in an array
    let cookiearray = jwt.split(';');
    // Now take key value pair out of this array
    let name = null
    let value = null
    for (var i = 0; i < cookiearray.length; i++) {
      name = cookiearray[i].split('=')[0];
      value = cookiearray[i].split('=')[1];
      console.log("Key is : " + name + " and Value is : " + value);
    }
    console.log('jwt is ', jwt)

    if (!value) {
      value = ''
    }

    let headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${value}`,
      }
    }
    let finalInput = input
    axios.post(`http://localhost:3000/userdata/passwordreset`, finalInput, { headers, withCredentials: true })
      .then((responseData) => {
        console.log('responseData:', responseData);
        // return responseData;
        callback(responseData);
      })
      .catch(error => console.log(error));

  },
  getCompanyCategoryData:async ()=>{

		let headers = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		  }
		  return await axios.get("http://localhost:3000/category/getcategory", { headers})
		  .catch(error=> console.log(error))
		}

}

export default CompanyAccountService;