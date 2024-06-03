import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <div className='main_heading'>
      <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWtFlPZUSI-Z4IBX3xR8qfUuOZylmQCqB8w&s'></img>
  <h1>T20 world cup</h1>
  </div>
  <div className='bottom_container'>
   
  <div className='groups'>
<h2 >GROUP A</h2>
<ul>
  <li><img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/22.png?v=7'></img>USA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/12.png?v=7'></img>CANADA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/4.png?v=7'></img> INDIA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/13.png?v=7'></img> IRELAND</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/6.png?v=7'></img> PAKISTHAN</li>
  
</ul>
</div>
<div className='groups'>
<h2>GROUP B</h2>
<ul>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/20.png?v=7'></img>NAMIBIA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/28.png?v=7'></img>OMAN</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1.png?v=7'></img>AUSTRALIA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/3.png?v=7'></img>ENGLAND</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/16.png?v=7'></img>SCOTLAND</li>
  
</ul>
</div>
<div className='groups'>
<h2>GROUP C</h2>
<ul>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/9.png?v=7'></img>WEST INDIES</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/750.png?v=7'></img>PAPUA NEW GINEA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/1188.png?v=7'></img>AFGANISTHAN</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/5.png?v=7'></img>NEWZLAND</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/29.png?v=7'></img>UGANDA</li>
  
</ul>
</div>
<div className='groups'>
<h2>GROUP D</h2>
<ul>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/2.png?v=7'></img>BANGLADESH</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/7.png?v=7'></img>SOUTH AFRICA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/8.png?v=7'></img>SRI LANKA</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/637.png?v=7'></img>NEPAL</li>
  <li> <img className='country_logo' src='https://assets-icc.sportz.io/static-assets/buildv3-stg/images/teams/15.png?v=7'></img>NETHERLANDS</li>
  
</ul>
</div>

</div>
<form>
  <label htmlFor='team'>your favourite team</label>
  <input list='country' id='team'></input>
  <datalist id='country'>
    <option> india</option>
    <option> austarlia</option>
    <option> bangladesh</option>
    <option> england</option>
    <option> southafrica</option>
    <option> west indies</option>
    <option> newzland</option>
    <option> usa</option>
    <option> afganisthan</option>
  </datalist>
 
</form>

  </div>
     
    
   
    
  );
}

export default App;
