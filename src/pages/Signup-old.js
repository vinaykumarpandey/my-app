import { Button, Card, CardBody, CardHeader, Container } from "react-bootstrap";
import Base from "../components/Base";
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = () => {
    return (
      <Base>

          <Container>

            <Card>
                
                <CardHeader>

                   <h3>  Student information form !! </h3>

                </CardHeader>

                <CardBody>
                    
                     <Form>

                        <FormGroup>
                            
                            {/*Enter name field  */}
                            <Label for="name" >Enter Name</Label>
                            <Input 
                            type="text"
                            placeholder="Enter Here" />
 

                        </FormGroup>

                        <FormGroup>
                            
                            {/*Enter eamil field  */}
                            <Label for="email" >Enter email</Label>
                            <Input 
                            type="email"
                            placeholder="Enter Here" />
 

                        </FormGroup>

                        

                        <FormGroup>
                            
                            {/*Enter eamil field  */}
                            <Label for="email" >Enter email</Label>
                            <Input 
                            type="email"
                            placeholder="Enter Here" />
 

                        </FormGroup>

                        <FormGroup>
                            
                            {/*Enter password field  */}
                            <Label for="password" >Enter password</Label>
                            <Input 
                            type="password"
                            placeholder="Enter Here" />
 

                        </FormGroup>

                        <FormGroup>
    <Label for="about">
     Enter About You
    </Label>
    <Input
      type="textarea"
      placeholder="Enter Here"
      style={{height:"250px"}}
    />
  </FormGroup>

  <Container className="text-center">
     
     <Button color="dark">Register</Button>
     <Button color="secondary" type="reset" className="ms-2">Register</Button>


  </Container>


                     </Form>
 

                </CardBody>
  

            </Card>
            
          </Container>

      </Base>
    )
}

// Function to create a TODO using fetch API
const createTodo = async () => {
  let options = {
      method: "POST",
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
      }),
  };

  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let response = await p.json();
  return response;
}

// Main function to call createTodo and log the response
const mainFunc = async () => {
  let todo = await createTodo();
  console.log(todo);
}

export default Signup;