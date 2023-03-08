import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import {Routes, Route } from 'react-router';
import ResumeTemplete from './Components/ResumeTemplete';
import MyDocuments from './Components/MyDocument';
import AboutUs from './Components/AboutUS';
import PersonalInfo from './Components/Data/PersonalInfo';
import Templete1 from './Components/Templates/Template1'
import Templete2 from './Components/Templates/Template2'
import Template3 from  './Components/Templates/Template3'
import Templete4 from './Components/Templates/Template4'
function App() {
  return (
    <div className="App">
      <HomePage/>
        <Routes>
        <Route path="Resume" element={<ResumeTemplete/>}> </Route>
        <Route path="MyDocument" element={<MyDocuments/>}> </Route>
        <Route path="AboutUs" element={<AboutUs/>}> </Route>
        <Route path="PInfo" element={<PersonalInfo/>}> </Route>
        <Route path="Template1" element={<Templete1/>}> </Route>
        <Route path="Template2" element={<Templete2/>}> </Route>
        <Route path="Template3" element={<Template3/>}> </Route>
        <Route path="Template4" element={<Templete4/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
