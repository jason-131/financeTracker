import Table from 'react-bootstrap/Table';
import { EntryContext } from './EntryContext';
import { useEffect,useContext } from 'react';
import EntriesRow from './EntriesRow';

const ExpenseTable = () => {
    const [entry, setEntries] = useContext(EntryContext);

    const handleDelete = (id) => {
        fetch('http://127.0.0.1:8000/entry/' + id, { 
            method:"DELETE",
            headers:{
            accept:'application/json' 
            }
        })
        .then(resp =>{
            return resp.json()
            .then(result=>{
                if(result.status==='ok'){
                    alert("Product deleted")
                }
            })
        })
    }
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/entry')
        .then(resp =>{
            return resp.json();
        }).then(results =>{
            console.log(results)
            setEntries({"data" : [...results.data]})
        })
    })
    
    return (  
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Date of Expense</th>
                    </tr>
                </thead>
                <tbody>
                    {entry.data.map((entrys)=>(
                        <EntriesRow
                            id = {entrys.id}
                            category = {entrys.category}
                            amount =  {entrys.amount}
                            description = {entrys.description}
                            date = {entrys.date}
                            key={entrys.id}
                            handleDelete = {handleDelete}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
 
export default ExpenseTable;