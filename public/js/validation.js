validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;

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
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your Password.";
      }
      if (typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      this.setState({
        errors: errors
      });
      return isValid;
  }