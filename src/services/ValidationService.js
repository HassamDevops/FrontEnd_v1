const ValidationService = {
    firstValidationMethod: function(value) {
        //inspect the value
    },

    validateLoginForm: function(input) {
      let errors = {};
      let isValid = true;

      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your Username or Email Address.";
      }
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your Password.";
      }
      // if (typeof input["email"] !== "undefined") {
      //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      //   if (!pattern.test(input["email"])) {
      //     isValid = false;
      //     errors["email"] = "Please enter valid email address.";
      //   }
      // }

      return {
      	isValid : isValid,
      	errors: errors
      }

    },

    validateRegisterForm: function(input) {
	      let errors = {};
	      let isValid = true;
	      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	      if(input.userType === "buyer" || input.userType === "vendor"){
	        if (!input["buyerCompanyName"]) {
	          isValid = false;
	          errors["buyerCompanyName"] = "Please enter your buyerCompanyName.";
	        }
	        if (!input["buyerRegistrationNumber"]) {
	          isValid = false;
	          errors["buyerRegistrationNumber"] = "Please enter your buyerRegistrationNumber.";
	        }

	        if (!input["buyerEmail"]) {
	          isValid = false;
	          errors["buyerEmail"] = "Please enter your buyerEmail.";
	        }
	        if (typeof input["buyerEmail"] !== "undefined") {
	          if (!pattern.test(input["buyerEmail"])) {
	            isValid = false;
	            errors["buyerEmail"] = "Please enter valid email address.";
	          }
	        }
	        if (!input["buyerPhone"]) {
	          isValid = false;
	          errors["buyerPhone"] = "Please enter your buyerPhone.";
	        }
	        if (!input["buyerUsername"]) {
	          isValid = false;
	          errors["buyerUsername"] = "Please enter your buyerUsername.";
	        }
	        if (!input["buyerPassword"]) {
	          isValid = false;
	          errors["buyerPassword"] = "Please enter your buyerPassword.";
	        }
	         if (!input["buyerCity"]) {
	          isValid = false;
	          errors["buyerCity"] = "Please enter your buyerCity.";
	        }
	        if (!input["buyerWeblink"]) {
	          isValid = false;
	          errors["buyerWeblink"] = "Please enter your buyerWeblink.";
	        }
	        if (!input["buyerCompanyDescription"]) {
	          isValid = false;
	          errors["buyerCompanyDescription"] = "Please enter your buyerCompanyDescription.";
	        }
	        
	      } else if(input.userType === "vendor"){
            if (!input["vendorCompanyName"]) {
              isValid = false;
              errors["vendorCompanyName"] = "Please enter your vendorCompanyName.";
            }
            if (!input["vendorRegistrationNumber"]) {
              isValid = false;
              errors["vendorRegistrationNumber"] = "Please enter your vendorRegistrationNumber.";
            }

            if (!input["vendorEmail"]) {
              isValid = false;
              errors["vendorEmail"] = "Please enter your vendorEmail.";
            }
            if (typeof input["vendorEmail"] !== "undefined") {
              if (!pattern.test(input["vendorEmail"])) {
                isValid = false;
                errors["vendorEmail"] = "Please enter valid email address.";
              }
            }
            if (!input["vendorPhone"]) {
              isValid = false;
              errors["vendorPhone"] = "Please enter your vendorPhone.";
            }
             if (!input["vendorUsername"]) {
              isValid = false;
              errors["vendorUsername"] = "Please enter your vendorUsername.";
            }
            if (!input["vendorPassword"]) {
              isValid = false;
              errors["vendorPassword"] = "Please enter your vendorPassword.";
            }
             if (!input["vendorCity"]) {
              isValid = false;
              errors["vendorCity"] = "Please enter your vendorCity.";
            }
            if (!input["vendorWeblink"]) {
              isValid = false;
              errors["vendorWeblink"] = "Please enter your vendorWeblink.";
            }
             if (!input["vendorCompanyDescription"]) {
              isValid = false;
              errors["vendorCompanyDescription"] = "Please enter your vendorCompanyDescription.";
            }
	      }else{
	        if (!input["firstName"]) {
	          isValid = false;
	          errors["firstName"] = "Please enter your First Name.";
	        }
	        if (!input["lastName"]) {
	          isValid = false;
	          errors["lastName"] = "Please enter your Last Name.";
	        }
	        if (!input["email"]) {
	          isValid = false;
	          errors["email"] = "Please enter your Email Address.";
	        }
	        if (!input["phone"]) {
	          isValid = false;
	          errors["phone"] = "Please enter your Phone Number.";
	        }
	        if (!input["username"]) {
	          isValid = false;
	          errors["username"] = "Please enter your Username.";
	        }
	        if (!input["password"]) {
	          isValid = false;
	          errors["password"] = "Please enter your Password.";
	        }
	        if (typeof input["email"] !== "undefined") {
	          if (!pattern.test(input["email"])) {
	            isValid = false;
	            errors["email"] = "Please enter valid email address.";
	          }
	        }
	      }

	      return {
	      	isValid : isValid,
	      	errors: errors
	      }

	      // this.setState({
	      //   errors: errors
	      // });
	      // return isValid;  
    },

    validatePostProjectForm : function(input){
      let errors = {};
      let isValid = true;
      console.log('input' , input);

		if (!input["projectTitle"]) {
		isValid = false;
		errors["projectTitle"] = "Please enter your projectTitle";
		}
		if (!input["projecDesc"]) {
		isValid = false;
		errors["projecDesc"] = "Please enter your projecDesc.";
		}
		if (!input["deadLine"]) {
		isValid = false;
		errors["deadLine"] = "Please enter your deadLine.";
		}
		// if (!input["rfpDoc"]) {
		// isValid = false;
		// errors["rfpDoc"] = "Please enter your rfpDoc.";
		// }
		// if (!input["industryType"]) {
		// isValid = false;
		// errors["industryType"] = "Please enter your industryType.";
		// }

      // if (typeof input["email"] !== "undefined") {
      //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      //   if (!pattern.test(input["email"])) {
      //     isValid = false;
      //     errors["email"] = "Please enter valid email address.";
      //   }
      // }

      return {
      	isValid : isValid,
      	errors: errors
      }
	},
	
	validateMessageUsForm: function(input){

		let errors={}
		let isValid=true
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


		if(!input["contactName"])
		{
			isValid=false
			errors["contactName"]="Please enter your name"			
		}

		if (!input["contactEmail"]) {
			isValid = false;
			errors["contactEmail"] = "Please enter your Email.";
		  }

		  if (typeof input["contactEmail"] !== "undefined") {
			if (!pattern.test(input["contactEmail"])) {
			  isValid = false;
			  errors["contactEmail"] = "Please enter valid email address.";
			}
		  }
		return{
			isValid:isValid,
			errors:errors
		}
	},
	validateAccountDetails:function(input)
	{
		let errors={}
		let isValid=true
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


		if(!input["userName"])
		{
			isValid=false
			errors["userName"]="Please enter your username"			
		}
		if (!input["Email"]) {
			isValid = false;
			errors["Email"] = "Please enter your Email.";
		  }

		  if (typeof input["Email"] !== "undefined") {
			if (!pattern.test(input["Email"])) {
			  isValid = false;
			  errors["Email"] = "Please enter valid email address.";
			}
		  }
		return {
			isValid:isValid,
			errors:errors
		}
	},
	validatePasswordReset:function(input){
	
		let errors={}
		let isValid=true
		if (!input["currentPassword"]) {
			isValid = false;
			errors["currentPassword"] = "Please enter your current password.";
		  }
		  if (!input["newPassword"]) {
			isValid = false;
			errors["newPassword"] = "Please enter your new password.";
		  }

		  return{
			  isValid:isValid,
			  errors:errors
		  }
	},
	validateCompanyNameChange:function(input)
	{
		let errors={}
		let isValid=true
		if (!input["companyName"]) {
			isValid = false;
			errors["companyName"] = "Please enter your company name.";
		  }
		
		return{
			isValid:isValid,
			errors:errors
		}
	},
	validateRegistrationNumberChange:function(input)
	{
		let errors={}
		let isValid=true
		if (!input["registrationNumber"]) {
			isValid = false;
			errors["registrationNumber"] = "Please enter your registration number.";
		  }
		
		return{
			isValid:isValid,
			errors:errors
		}
	},
	validateContactNumberChange:function(input)
	{
		let errors={}
		let isValid=true
		if (!input["contactNumber"]) {
			isValid = false;
			errors["contactNumber"] = "Please enter your Contact number.";
		  }
		
		return{
			isValid:isValid,
			errors:errors
		}
	},
	validatewebSiteChange:function(input)
	{
		let errors={}
		let isValid=true
		var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
		if (!input["webSite"]) {
			isValid = false;
			errors["webSite"] = "Please enter your website.";
		  }
		  if (typeof input["webSite"] !== "undefined") {
			if (!pattern.test(input["webSite"])) {
			  isValid = false;
			  errors["webSite"] = "Please enter valid website address.";
			}
		  }
		return{
			isValid:isValid,
			errors:errors
		}
	},
	validateCompanyDescChange:function(input)
	{
		let errors={}
		let isValid=true

		if (!input["companyDesc"]) {
			isValid = false;
			errors["companyDesc"] = "Please enter your Company Description.";
		  }
		return{
			isValid:isValid,
			errors:errors
		}
	},
	validateResetPassword:function(input)
	{
		let isValid=true
		let errors={}
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);



		if (!input["Email"]) {
			isValid = false;
			errors["Email"] = "Please enter your Email.";
		  }

		  if (typeof input["Email"] !== "undefined") {
			if (!pattern.test(input["Email"])) {
			  isValid = false;
			  errors["Email"] = "Please enter valid email address.";
			}
		  }
		return {
			isValid:isValid,
			errors:errors
		}
	}
};

export default ValidationService;