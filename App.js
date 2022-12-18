import logo from './logo.svg';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleEvent = () => {
    alert(`${this.props.FullName}`);
  };
  return (
    <>
    <header id="home">
    <Header/>
    </header>
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>Self-Profile </h1>
    {/*  And invoking the <FullName/> component… */}
      <FullName firstName="riadh" lastName="lehnoudi">
      <p>Glad to know you</p>
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px",}} id="about">
      <Bio FullName="riadh lehnoudi" Age="25" Gender="homme" Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping"  />
      </div>
      <br/>
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>
    </body>
    <footer id="contact">riadh</footer>

export default App;
