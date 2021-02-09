import axios from 'axios';

const RegistrationService = {
    submitRegisterForm: function(input, callback){
	      let data = {};
		  console.log('fileupload value: ',input.fileUpload);
		  const formData = new FormData();
		  console.log('user type in reg service ',input.userType)
		  if(input.userType === "buyer" || input.userType === "vendor"){
 formData.append("name", input.buyerCompanyName);
 formData.append("registrationnumber", input.buyerRegistrationNumber);
 formData.append("email", input.buyerEmail);
 formData.append("username", input.buyerUsername);
 formData.append("password", input.buyerPassword);
 formData.append("city", input.buyerCity);
 formData.append("phone", input.buyerPhone);
 formData.append("descr", input.buyerCompanyDescription);
 formData.append("wsite", input.buyerWeblink);
 formData.append("role", input.userType);
 formData.append("CategoryId", input.CategoryId);
 formData.append("profiles", input.fileUpload);
		  }
		  else{
			 
					formData.append("name",input.firstName+" "+input.lastName)
					formData.append("username",input.username)
					formData.append("password", input.password)
					formData.append("email",input.email)
					formData.append("city",input.city)
					formData.append("phone",input.phone)
					formData.append("role", input.userType)			    
			  }
	    //   if(input.userType === "buyer"){
	    //   	data = {
	    //   		"name": input.buyerCompanyName,
	    //   		"registrationnumber" : input.buyerRegistrationNumber,
	    //   		"email": input.buyerEmail,
	    //   		"username": input.buyerUsername,
	    //   		"password": input.buyerPassword,
	    //   		"city": input.buyerCity,
	    //   		"phone": input.buyerPhone,
	    //   		"descr": input.buyerCompanyDescription,
	    //   		"wsite" : input.buyerWeblink,
		// 		"role" : input.userType,
		// 		"profiles":input.fileUpload  
	    //   	};
	    //   }else if(input.userType === "vendor"){
	    //   	data = {
	    //   		"name": input.vendorCompanyName,
	    //   		"registrationnumber" : input.vendorRegistrationNumber,
	    //   		"email": input.vendorEmail,
	    //   		"username": input.vendorUsername,
	    //   		"password": input.vendorPassword,
	    //   		"city": input.vendorCity,
	    //   		"phone": input.vendorPhone,
	    //   		"descr": input.vendorCompanyDescription,
	    //   		"wsite" : input.vendorWeblink,
	    //   		"role" : input.userType
	    //   	};
	    //   }else{
	    //   	data = {
		//       	"name": input.firstName+" "+input.lastName,
		//       	"username":input.username ,
		//       	"password": input.password,
		//       	"email": input.email,
		//       	"city":input.city,
		//       	"phone":input.phone,
		//       	"role" : input.userType
		//     }
	    //   }
	     
	      let headers = {
	        headers: {
				'Accept': 'application/json',
	            'Content-Type': 'multipart/form-data'
	        }
	      }
		  let finalInput = formData;
		  console.log(finalInput)
		  console.log('in reg service')
	      axios.post(`http://localhost:3000/register/uploadd`, finalInput,headers)
	      .then((responseData) => {
		      console.log('responseData:' , responseData);
		     // return responseData;
		      callback(responseData);
		    })
	      //.catch(error => console.log(error));
	},
	getCategoryData:async ()=>{

		let headers = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		  }
		  return await axios.get("http://localhost:3000/category/getcategory", { headers, withCredentials: true})
		  .catch(error=> console.log(error))
		}
};

export default RegistrationService;