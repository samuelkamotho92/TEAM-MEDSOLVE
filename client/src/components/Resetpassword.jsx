import React,{useState,useEffect}  from 'react';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

import Toast from "react-bootstrap/Toast";
const ResetPassword = ()=>{
     const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = 
    useState("Email sent! Check it to reset your password.");
    const [userID, setUserID] = useState(null);

    const sendEmail = async(e)=>{
        e.preventDefault();
const url = `tryreer`;
const response = await fetch(url,{
    method:'POST',
    header:'',
    body:''
});
const data = await response.json();
console.log(data);
    }
    return (
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    minHeight: '100px',
                    width: "35%",
                    right: 10,
                    bottom: 100,
                    zIndex: 50
                }}
            >
                <Toast style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10
                }} 
            onClose={() => 
            setShowToast(false)}
             show={showToast} delay={5000}>
                    <Toast.Header>
                        {/* <img style={{height: "30px", width: "100px"}}
             src={require("assets/img/brand/argon-react.png").default}  alt="..."/> */}
                    </Toast.Header>
                    <Toast.Body>
                        {toastMessage}
                    </Toast.Body>
                </Toast>
            </div>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form" onSubmit={sendEmail}>
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <Button>
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </Button>
                                    <Input placeholder="Email" type="email" autoComplete="email" value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                </InputGroup>
                            </FormGroup>
                            {error ?
                                <div className="text-muted font-italic">
                                    <small>
                                        error:{" "}
                                        <span className="text-red font-weight-700">{error}</span>
                                    </small>
                                </div> : null }
                            <div className="text-center">
                                <Button className="my-4" 
                                color="primary" type="button">
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
}

export default ResetPassword