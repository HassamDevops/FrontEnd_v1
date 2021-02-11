import axios from 'axios';

import cookies from 'js-cookie'

const LoginService = {
    submitLoginForm: function(input, callback){
		let jwt= document.cookie//.jwt
		// Get all the cookies pairs in an array
		let cookiearray = jwt.split(';');
		// Now take key value pair out of this array
		let name=null
		let value = null
		for(var i=0; i<cookiearray.length; i++) {
			name = cookiearray[i].split('=')[0];
			value = cookiearray[i].split('=')[1];
console.log("Key is : " + name + " and Value is : " + value);
		 }
		console.log('jwt is ',jwt)

		if(!value)
		{
			value=''
		}
	      let headers = {
	        headers: {
	            'Content-Type': 'application/json',
				'Authorization' : `Bearer ${value}`,
	        }
	      }
	      let finalInput = {
	      	"usernameemail" : input.email,
	      	"password" : input.password
	      };
	      axios.post(`http://158.101.229.42:3000/login`, finalInput, {headers,withCredentials: true})
	      .then((responseData) => {
		      console.log('responseData:' , responseData);
		     // return responseData;
		      callback(responseData);
		    })
	      .catch(error => console.log(error));
    }
};

export default LoginService;