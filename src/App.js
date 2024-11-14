import './index.css';
import Header from './navigation/header.jsx';
import Footer from './navigation/footer.jsx';
import Home from './pages/home.jsx';
import WorkoutProject from './pages/workdouts.jsx';
import ContactForm from './pages/contact.jsx';
import AnimationsDt from "./pages/animationstionVideo.jsx"


function App() {
return(
  <div>
  <Header/>
  <Home/>
  <AnimationsDt/>
  <WorkoutProject/>
  <ContactForm/>
  <Footer/>
  </div>
  

)
}

export default App;
