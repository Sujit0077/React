import reactImg from '../assets/react-core-concepts.png';
import './Header.css'



const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    const randomvalue = reactDescription[getRandom(reactDescription.length - 1)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomvalue} React concepts you will need for almost any app you are
          going to build!!!!
        </p>
      </header>
    );
  }