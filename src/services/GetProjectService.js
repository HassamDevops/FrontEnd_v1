// import axios from 'axios'

// const GetProjectService={

//     getProject: async function(callback){
//         let jwt= document.cookie//.jwt
// 		// Get all the cookies pairs in an array
// 		let cookiearray = jwt.split(';');
// 		// Now take key value pair out of this array
// 		let name=null
// 		let value = null
// 		for(var i=0; i<cookiearray.length; i++) {
// 			name = cookiearray[i].split('=')[0];
// 			value = cookiearray[i].split('=')[1];
// console.log("Key is : " + name + " and Value is : " + value);
// 		 }
// 		console.log('jwt is ',jwt)

// 		if(!value)
// 		{
// 			value=''
// 		}
// 	      let headers = {
// 	        headers: {
// 	            'Content-Type': 'application/json',
// 				'Authorization' : `Bearer ${value}`,
// 	        }
// 	      }
//       //  axios.get(`http://localhost:3000/project-page`)
//         axios.get('http://localhost:3000/project/getbproject',{headers,withCredentials: true})
//         .then(responseData => {
//             console.log('responseData:' , responseData);
//             // return responseData;
//              callback(responseData);
//         })
//         // .catch(error => {
//         //     console.log(error)
//         //     // this.setState({
//         //     //     errorMsg: 'Error retreiving data'
//         //     // })
//         // })
//     }
// }

// export default GetProjectService