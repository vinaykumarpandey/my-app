import { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Container } from "react-bootstrap";
import Base from "../components/Base";
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = () => {
    // State to store form values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        about: ''
    });

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Call the main function which will use formData
        await mainFunc();
    };

    return (
      <Base>
          <Container>
            <Card>
                <CardHeader>
                   <h3>  Student information form !! </h3>
                </CardHeader>

                <CardBody>
                     <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            {/* Enter name field */}
                            <Label htmlFor="name">Enter Name</Label>
                            <Input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Here"
                                value={formData.name}
                                onChange={handleChange} 
                            />
                        </FormGroup>

                        <FormGroup>
                            {/* Enter email field */}
                            <Label htmlFor="email">Enter email</Label>
                            <Input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Here"
                                value={formData.email}
                                onChange={handleChange} 
                            />
                        </FormGroup>

                        <FormGroup>
                            {/* Enter password field */}
                            <Label htmlFor="password">Enter password</Label>
                            <Input 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Here"
                                value={formData.password}
                                onChange={handleChange} 
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="about">Enter About You</Label>
                            <Input
                              type="textarea"
                              id="about"
                              name="about"
                              placeholder="Enter Here"
                              style={{ height: "250px" }}
                              value={formData.about}
                              onChange={handleChange} 
                            />
                        </FormGroup>

                        <Container className="text-center">
                            <Button color="dark" type="submit">Register</Button>
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
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            about: formData.about
        }),
    };

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    return response;
}

// Main function to call createTodo and log the response
const mainFunc = async () => {
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        about: document.getElementById("about").value
    };

    let todo = await createTodo(formData);
    console.log(todo);
}

export default Signup;
