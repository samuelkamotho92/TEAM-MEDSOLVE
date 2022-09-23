import React,{useState,useEffect} from 'react';
import Toast from 'react-bootstrap/Toast';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";
const Registration = ()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [organisationName,setOrganName] = useState('');
    const [password,setPassword] = useState('');
    const [location,setLocation] = useState('');
    const [passwordConfirm,setpasswordConfirm] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [error,seterror] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = 
    useState("Email sent! Check it to reset your password.");

    const regesterHospital = async(e)=>{
e.preventDefault();
const url = `qewrqer`
const resp= await fetch(url,{
    method:'POST',
    header:'',
    body:JSON.stringify({name,email,organisationName,location,password,passwordConfirm})
});
const data = await resp.json();
console.log(data);
if(data.status == 'success'){
    alert(`patient ${data.email} has regestered succefully`)
}else{
    alert(`something is very wrong:${data.err.message}`)
}

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
        bottom: 80,
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
    }} onClose={() => setShowToast(false)} 
    show={showToast} delay={10000} >
        <Toast.Header>
<img style={{height: "30px", width: "100px"}} 
src={require("assets/img/brand/argon-react.png").default} 
alt="..."/>
        </Toast.Header>
        <Toast.Body>
            {toastMessage}
        </Toast.Body>
    </Toast>
</div>
<Col lg="6" md="8">
<Card className="bg-secondary shadow border-0">
<CardHeader className="bg-transparent pb-5">
<div className="text-muted text-center mt-2 mb-4">
<small>Sign up with</small>
</div>
<div className="text-center">
<Button
    className="btn-neutral btn-icon mr-4"
    color="default"
    href="#pablo"
    onClick={e => e.preventDefault()
}
>
<span className="btn-inner--icon">
<img
alt="..."
src={require("assets/img/icons/common/github.svg").default}
/>
</span>
<span className="btn-inner--text">Github</span>
</Button>
<Button
    className="btn-neutral btn-icon"
    color="default"
    href="#pablo"
    onClick={e => e.preventDefault()}
>
<span className="btn-inner--icon">
<img
alt="..."
src={require("assets/img/icons/common/google.svg").default}
/>
</span>
    <span className="btn-inner--text">Google</span>
</Button>
</div>
</CardHeader>
<CardBody  className="px-lg-5 py-lg-5">
<div className="text-center text-muted mb-4">
<small>Or sign up with credentials</small>
</div>
<Form role='role' onSubmit={regesterHospital}>
<FormGroup>
<InputGroup className="input-group-alternative mb-3">
<InputGroupAddon addonType="prepend">
    <InputGroupText>
        <i className="ni ni-hat-3"/>
    </InputGroupText>
</InputGroupAddon>
<Input placeholder="Name" type="text" value={name}
       onChange={e => setName(e.target.value)}
/>
</InputGroup>
</FormGroup>
<FormGroup>
<InputGroup className="input-group-alternative mb-3">
    <InputGroupAddon addonType="prepend">
        <InputGroupText>
            <i className="ni ni-email-83"/>
        </InputGroupText>
    </InputGroupAddon>
    <Input placeholder="Email" type="email" autoComplete="new-email" value={email}
           onChange={e => setEmail(e.target.value)}
    />
    </InputGroup>
</FormGroup>
   <FormGroup>
<InputGroup className="input-group-alternative">
       <InputGroupAddon addonType="prepend">
        <InputGroupText>
               <i className="ni ni-lock-circle-open"/>
           </InputGroupText>
       </InputGroupAddon>
       <Input placeholder="Password" type="password" 
       autoComplete="new-password" value={password}
             onChange={e => setPassword(e.target.value)}
      />
 </InputGroup>
 </FormGroup>
 <FormGroup>
 <InputGroup className="input-group-alternative">
     <InputGroupAddon addonType="prepend">
         <InputGroupText>
             <i className="ni ni-lock-circle-open"/>
         </InputGroupText>
     </InputGroupAddon>
     <Input placeholder="Confirm Password" type="password" 
     autoComplete="new-password" value={location}
            onChange={e => setLocation(e.target.value)}
     />
 </InputGroup>
</FormGroup>
<FormGroup>
 <InputGroup className="input-group-alternative">
     <InputGroupAddon addonType="prepend">
         <InputGroupText>
             <i className="ni ni-lock-circle-open"/>
         </InputGroupText>
     </InputGroupAddon>
     <Input placeholder="Confirm Password" type="password" 
     autoComplete="new-password" value={organisationName}
            onChange={e => setOrganName(e.target.value)}
     />
 </InputGroup>
</FormGroup>
 <FormGroup>
 <InputGroup className="input-group-alternative">
     <InputGroupAddon addonType="prepend">
         <InputGroupText>
             <i className="ni ni-lock-circle-open"/>
         </InputGroupText>
     </InputGroupAddon>
     <Input placeholder="Confirm Password" type="password" 
     autoComplete="new-password" value={passwordConfirm}
            onChange={e => setpasswordConfirm(e.target.value)}
     />
 </InputGroup>
</FormGroup>
 {error ?
<div className="text-muted font-italic">
    <small>
        error:{" "}
           <span className="text-red font-weight-700">{error}</span>
    </small>
 </div> : null }
 <Row className="my-4">
 <Col xs="12">
     <div className="custom-control custom-control-alternative custom-checkbox">
         <input
             className="custom-control-input"
             id="customCheckRegister"
             type="checkbox"
             checked={checkbox}
             onChange={() => setCheckbox(!checkbox)}
         />
         <label
             className="custom-control-label"
             htmlFor="customCheckRegister"
         >
<span className="text-muted">
I agree with the{" "}
<a href="#pablo" onClick={e => e.preventDefault()}>
Privacy Policy
</a>
</span>
         </label>
     </div>
 </Col>
</Row>
<Button className="mt-4" color="primary" type="button">
    REGESTER
</Button>
</Form>
</CardBody>
</Card>
</Col>
    </>

    )
}

export default Registration;