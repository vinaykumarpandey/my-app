import { Button, Card, CardBody, CardHeader, Container } from "react-bootstrap";
import Base from "../components/Base";
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form values directly from event.target
        const formData = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        // Call the main function to send the data
        await mainFunc(formData);
    };

    return (
      <Base>
          <Container>
            <Card>
                <CardHeader>
                   <h3>Login Form</h3>
                </CardHeader>

                <CardBody>
                     <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Enter Email</Label>
                            <Input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Here"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">Enter Password</Label>
                            <Input 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Here"
                            />
                        </FormGroup>

                        <Container className="text-center">
                            <Button color="dark" type="submit">Login</Button>
                            <Button color="secondary" type="reset" className="ms-2">Reset</Button>
                        </Container>

                     </Form>
                </CardBody>
            </Card>
          </Container>
      </Base>
    )
}

// Function to create a TODO using fetch API with formData
const createTodo = async (formData) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(formData),
    };

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    return response;
}

// Main function to call createTodo and log the response
const mainFunc = async (formData) => {
    let todo = await createTodo(formData);
    console.log(todo);
}

export default Login;
