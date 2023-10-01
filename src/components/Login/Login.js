import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import './Login.css';

function Login() {
    const [formValues, setFormValues] = useState({email:"", password:""});
    const [loginFail, setLoginFail] = useState(false);
    const navigate = useNavigate();
    const refresh = () => {
      setFormValues({email:"", password:""});
    }
    const clickSubmit = async (e) => {
      e.preventDefault();  
      if (formValues.email !== "" && formValues.password !== ""){
        let user = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'login':formValues.email, 'password':formValues.password})
        }
        const response = await fetch('http://localhost:3001/login', user)
        const data = await response.json();
        console.log(data);
        if (data.status === 'success'){
          navigate("/cafes");
        }
        else{
          setLoginFail(true);
        }
      }
  
    };
    const handleEmailChange = ((e) => {
      setFormValues({...formValues, email: e.target.value})
    });
   
    const handlePasswordChange = ((e) => {
      const newPassword = e.target.value;
      setFormValues({...formValues, password: newPassword})
    });

  return (
        <div className="container-fluid">
          <div className="row text">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 displaya">
            <p className='tituloLogin'>
              <FormattedMessage id="Login"/>
            </p>
            <div className="text-center contenido">
              <Form>
                <Form.Group className='FormularioField'>
                  <Form.Label>
                    <FormattedMessage id="Usuario"/>
                  </Form.Label>
                  <Form.Control
                    type="username"
                    onChange={handleEmailChange} 
                    value={formValues.email}
                    id='formSpace'
                  />
                </Form.Group>
                <Form.Group className='FormularioField'>
                  <Form.Label>
                    <FormattedMessage id="Contraseña"/>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={formValues.password}
                    onChange={handlePasswordChange}
                    id='formSpace'
                    />
                </Form.Group>
                <div className="text-center mt-4">
                  <Button id="Login" onClick={clickSubmit} >
                    <FormattedMessage id="Ingresar"/>
                  </Button>
                  <Button id="Cancel" onClick={refresh}>
                    <FormattedMessage id="Cancelar"/>
                  </Button>
                </div>
              </Form>
              {loginFail && <p className="text-center mt-4" style={{color: "red",fontWeight:"bold"}}>
                <FormattedMessage id="MsgErrorLogin"/>
                </p>}
            </div>
          </div>
          </div>
        </div>
  );
}

export default Login;
