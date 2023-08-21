import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Tools from './Tools';
import Expense from './Expense';
import AddExpense from './AddExpense';
import Income from './Income'
import AddIncome from './AddIncome';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tools' element={<Tools/>}/>
          <Route path='/expense/*' element={<Expense/>}/>
          <Route path='/AddExpense/*' element={<AddExpense/>}/>
          <Route path='/income/*' element ={<Income/>}/>
          <Route path='/AddIncome/*' element={<AddIncome/>}/>
        </Routes>
      </div>
     </div>
   </Router>
  );
}

export default App;
