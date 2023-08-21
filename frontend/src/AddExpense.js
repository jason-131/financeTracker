import {Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useState} from "react";

const AddExpense = () => {
    const[values,setValues] = useState(
      {
        category:"",
        amount:"",
        description:"",
        date:""
      }
    );
    
    function onInput(e){
      const key = e.target.name;
      const value = e.target.value; 
      setValues({...values,[key]:value})
    }

    const postData = async (e) => {
      e.preventDefault();
      
      console.log(values)
  
      const url = "http://127.0.0.1:8000/entry/"

      const response = await fetch(
          url, {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin', 
              headers: {
              'Content-Type': 'application/json'
              },
              redirect: 'follow',
              referrerPolicy: 'no-referrer', 
              body: JSON.stringify({
                "category": values['category'],
                "amount": values['amount'],
                "description": values['description'],
                "date": values['date']
              })
          });
      response.json().then(response => {
          if (response.status === 'ok') {
              alert("Product added successfully")
          } else {
              alert("Failed to add product")
          }
      });
      setValues({
        category:"",
        amount:"",
        description:"",
        date:""
      });
  }

    return (
      <>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>
              <Link to ="/expense">My Expense</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Add Expense
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="formContainer">
          <Form onSubmit = {postData}>
            <Form.Group className ="form">
              <Form.Label>Category</Form.Label>
              <Form.Control name ="category" onChange = {onInput}/> 
            </Form.Group>
            <Form.Group className ="form">
              <Form.Label>Amount</Form.Label>
              <Form.Control name = "amount" onChange = {onInput}/> 
            </Form.Group>
            <Form.Group className ="form">
              <Form.Label>Description</Form.Label>
              <Form.Control name = "description" as ="textarea" rows={3} onChange = {onInput} /> 
            </Form.Group>
            <Form.Group className ="form">
              <Form.Label>Date of Expense</Form.Label>
              <Form.Control name ="date" type = "date" onChange = {onInput}/> 
            </Form.Group>
              <Button  type="submit">Submit</Button>
          </Form>
        </div>

     </>
      );
}
 
export default AddExpense;