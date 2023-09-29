import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
    const [validationStates, setValidationStates] = useState({
      emailState:   true,
      passwordState: true,  
      firstTimePass: false,
    });
    const navigate = useNavigate();

    const formatConfirm = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const clickSubmit = (e) => {
      e.preventDefault();
      const emailValidation = formatConfirm.test(formValues.email);
      setValidationStates({...validationStates,
        emailState:   emailValidation,
      });
  
      if (emailValidation && validationStates.passwordState){
        navigate("/cafes");
      } else {  
        alert("Please check your credentials, they're incorrect");
      }
  
    };
    const handleEmailChange = ((e) => {
      setFormValues({...formValues, email: e.target.value})
    });
   
    const handlePasswordChange = ((e) => {
      const newPassword = e.target.value;
      const isPasswordValid = newPassword.length > 6 && /[0-9]/.test(newPassword) && /[a-zA-Z]/.test(newPassword)
      setFormValues({...formValues, password: newPassword})
      //password must have at least 6 chars,numbers and letters
  
      setValidationStates({...validationStates, passwordState: isPasswordValid, firstTimePass: true})
    });

  return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1 className="mb-4 text-center titulo">Tu librería aliada</h1>
              <Form>
                <Form.Group controlId="lemail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={handleEmailChange} 
                    value={formValues.email}
                    isInvalid={!validationStates.emailState}
                  />
                { !validationStates.emailState && <Form.Text className="text-muted">Please enter a valid email</Form.Text> }
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={formValues.password}
                    onChange={handlePasswordChange}
                    isValid={validationStates.firstTimePass && validationStates.passwordState} isInvalid={validationStates.firstTimePass && !validationStates.passwordState}
                    />
                  { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 6 char long</Form.Text>}
                </Form.Group>
                <div className="text-center mt-4">
                  <Button className="Iniciar" type="submit" style={{ backgroundColor:"#8FA98F", border: "0px", borderRadius: 0, color: "black", fontWeight: 'bold'}} onClick={clickSubmit}>
                        Log In
                  </Button>
                  <Button className="Cancelar" type="reset" style={{ backgroundColor:"#E75D5D", border: "0px", borderRadius: 0, color: "black", fontWeight: 'bold'}}>
                        Cancel
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
  );
}

export default Login;
