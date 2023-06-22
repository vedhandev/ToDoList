
import 'bootstrap/dist/css/bootstrap.css';
// import Form from 'react-bootstrap/Form';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import ItemList from './ItemList';
// items,setItems,handleChange,handleDelete
function Content({props}) {
    // console.log("Content")
       return (
        <main>
            {props.items.length ? <ItemList props={props}/> : <p>List is Empty</p>}
        </main>
    );
}

export default Content
 // var [name, setName] = useState('vedha')



    // function handleClick2() {
    //     setName(() => name = 'narayanan')
    //     return console.log("clicked")
    // }

//     <div style={{ display: 'block',
//     width: 700,
//     padding: 30 }}>
// <h4>Login</h4>
// <Form>
// <Form.Group>
// <Form.Label>Enter your full name:</Form.Label>
// <Form.Control type="text"
//         placeholder="Enter your full name" />
// </Form.Group>
// <Form.Group>
// <Form.Label>Enter your email address:</Form.Label>
// <Form.Control type="email"
//         placeholder="Enter your your email address" />
// </Form.Group>
// <Form.Group>
// <Form.Label>Enter your age:</Form.Label>
// <Form.Control type="number" placeholder="Enter your age" />
// </Form.Group>
// <Button variant="primary" type="submit">
// Click here to submit form
// </Button>
// </Form>
// </div>