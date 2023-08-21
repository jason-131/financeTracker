import Button from 'react-bootstrap/Button';
import {Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './Expense.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExpenseTable from './ExpenseTable';
import {EntryProvider} from './EntryContext';

const Expense = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col className="col1">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item>
                            <Link to ="/expense">My Expense</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col md ="auto" className="col2">
                    <Link to ="/addExpense">  
                        <Button className ="button">Add Expense</Button> 
                    </Link>  
                </Col>
            </Row>
        </Container>

        <EntryProvider>
            <div className = "d-flex row justify-content-center"> 
                <div className = "col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4 ">
                    <ExpenseTable></ExpenseTable>
                </div>
            </div>
        </EntryProvider>
        </>  
    );
}
export default Expense;
