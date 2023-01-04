import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

const App = () => {
  const content = {
    'technologies': {
      'title': 'Technologies',
      'description': 'Our technologies section highlights the cutting-edge tools and technologies we employ in our web design process.'
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Section title={content.technologies.title} description={content.technologies.description} />
    </div>
  );
}

export default App;
