import styled from "styled-components";
import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
   color: #5db6d6;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  flex: 1;
  min-width: 40%;
  border-color: black;
  background-color : ${props => props.direction === "left" && "white"};
  color : ${props => props.direction === "left" && "teal"};
  border-color: ${props => props.direction === "left" && "teal"};
`;



const Login = () => {
  const host = 'http://localhost:6969'
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch(`${host}/login`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',


      },

      body: JSON.stringify({ email: credentials.email, password: credentials.password })


    })
    const json = await response.json();
    console.log(json);
    if (json.Success) {
      //Save auth token and redirect 
      localStorage.setItem('token', json.authtoken);
      navigate("/")
    } else {
      alert("invalid creds")
    }
  }


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <FormControl style={{ display: "flex" }}>
            <FormLabel id="role" style={{ fontSize: "25px", fontWeight: "bolder" }}>Your Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="committee"
                control={<Radio />}
                label="Committee"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="faculty"
                control={<Radio />}
                label="Faculty"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
          <Button>LOGIN</Button>
          <Button direction="left">SIGN UP</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;