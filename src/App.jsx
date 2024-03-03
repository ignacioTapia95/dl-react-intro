import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Header.jsx';
import MyCard from './components/MyCard.jsx';
import Dogs from './assets/js/objects.js';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Title title="Adopta un perrito" />
      <div className="gallery">
        {Dogs.map(element => (
          <MyCard
            image={element.image}
            name={element.name}
            desc={element.description}
            tag={element.breed}
            color_tag={element.colorTag}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;

