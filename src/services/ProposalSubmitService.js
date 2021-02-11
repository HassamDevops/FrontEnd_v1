import axios from 'axios'

const ProposalSubmitService = {

    submitProposal: function (input, callback) {
        let count=1
        const windowUrl=window.location.pathname
        console.log('window url: ', )
        const url=windowUrl.split('id')
        console.log('urlid: ',url[1])
         const urlid=url[1]
    
         console.log('url id is: ',urlid)

        console.log('Input value in project service: ',input)
        console.log('proposaldoc value: ',input.proposalDoc1)
        const formData=new FormData();
        console.log('user type in reg service ',input.userType)
       // if(input.userType==='buyer' || input.userType==='vendor')
       // {
            console.log('inside form data')

            console.log('type of: ',typeof input.proposalDoc1)
            formData.append("projects",input.proposalDoc0)

            if(typeof input.proposalDoc1)
            {
                count++;
            console.log('not undefined')
            formData.append("projects",input.proposalDoc1)
            }
            if(typeof input.proposalDoc2)
            {
            console.log('not undefined')
            formData.append("projects",input.proposalDoc2)
            count++;
            }
            let dummyval="dummyvalue"
            console.log('input count is: ',input.countt)
             formData.append("countt",input.countt)



  //          formData.append("p_title",input.projectTitle)
 //           formData.append("p_descr",input.projecDesc)
 //           formData.append("p_deadline",input.deadLine)
//            formData.append("p_price","")
//            formData.append("CategoryId", input.CategoryId);

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
        console.log('rfp docL',input.proposalDoc)
        console.log('form data ',formData)
        let finalInput=formData
        console.log('final input',finalInput)
        console.log('in post project service')
        axios.post(`http://158.101.229.42:3000/bidding/makebid/url${urlid}`,finalInput,{headers,withCredentials: true})
        .then((responseData)=>{
            console.log('responseData :',responseData)
            callback(responseData)
        })

    }
}


export default ProposalSubmitService