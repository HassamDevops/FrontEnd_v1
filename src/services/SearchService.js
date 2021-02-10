import axios from 'axios'

const SearchService={

    getCategoryData:async ()=>{

		let headers = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		  }
		  return await axios.get("http://158.101.229.42:3000/category/getcategory", { headers})//, withCredentials: true
		  .catch(error=> console.log(error))
        },
    sendSearchData:function(input,callback)
    {
        let headers = {
	        headers: {
				'Accept': 'application/json',
	            'Content-Type': 'multipart/form-data'
	        }
	      }
		 
		  console.log(input)
		  console.log('in sendsearchdata service')
	      axios.post(`http://158.101.229.42:3000/search/search-project`, input,headers)
	      .then((responseData) => {
		      console.log('responseData:' , responseData);
		     // return responseData;
		      callback(responseData);
		    })
    }

}

export default SearchService