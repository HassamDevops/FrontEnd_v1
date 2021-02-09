import axios from 'axios'

const PostProjectService={

    submitProjectForm: function(input,callback){

        let data={}
        let count=1
        console.log('Input value in project service: ',input)
        console.log('rfp value: ',input.rfpDoc1)
        const formData=new FormData();
        console.log('user type in reg service ',input.userType)
       // if(input.userType==='buyer' || input.userType==='vendor')
       // {
            console.log('inside form data')

            console.log('type of: ',typeof input.rfpDoc1)
            formData.append("projects",input.rfpDoc0)

            if(typeof input.rfpDoc1)
            {
                count++;
            console.log('not undefined')
            formData.append("projects",input.rfpDoc1)
            }
            if(typeof input.rfpDoc2)
            {
            console.log('not undefined')
            formData.append("projects",input.rfpDoc2)
            count++;
            }
            let dummyval="dummyvalue"
            console.log('input count is: ',input.countt)
             formData.append("countt",input.countt)



            formData.append("p_title",input.projectTitle)
            formData.append("p_descr",input.projecDesc)
            formData.append("p_deadline",input.deadLine)
            formData.append("p_price","")
            formData.append("CategoryId", input.CategoryId);

      //  }
        //else{
            //for individual
        //}

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

        let headers={

            headers:{
                'Authorization' : `Bearer ${value}`,
                'Accept': 'application/json',
                'Content-Type':'multipart/form-data',
            }
        }
        console.log('rfp docL',input.rfpDoc)
        console.log('form data ',formData)
        let finalInput=formData
        console.log('final input',finalInput)
        console.log('in post project service')
        axios.post(`http://localhost:3000/project/addproject`,finalInput,{headers,withCredentials: true})
        .then((responseData)=>{
            console.log('responseData :',responseData)
            callback(responseData)
        })

    },
    getProjectCategoryData:async ()=>{

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

export default PostProjectService