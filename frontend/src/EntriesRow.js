import Button from 'react-bootstrap/Button';

const EntriesRow = ({id,category,amount,description,date,handleDelete}) => {
    const customButtonStyle = {
        fontSize: '16px', // Adjust the font size as desired
        padding: '8px 12px', // Adjust padding as desired
        width:'80%',
      };

      const cellStyle = {
        padding: '5px',         // Remove padding from the cell
        width: '10%',       // Set a fixed width for the cell
      };

    return (  
        <tr>
            <td>{id}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td className="text-center " style ={cellStyle}><Button onClick={()=>handleDelete(id)} style = {customButtonStyle}>Delete</Button></td>
        </tr>
    );
}
 
export default EntriesRow;