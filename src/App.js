import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

const App = () => {
  const content = {
    'technologies': {
      'title': 'Technologies',
      'description': 'Our technologies section highlights the cutting-edge tools and technologies we employ in our web design process.'
    },
    'portfolio': {
      'title': 'Portfolio',
      'description': 'Our portfolio section showcases our best web design projects and allows visitors to see our skills and experience.'
    },
    'contact': {
      'title': 'Contact',
      'description': 'Our contact section provides all the necessary information and a contact form for potential clients to get in touch with us.'
    },
    'blog': {
      'title': 'Blog',
      'description': 'Our blog section features regular updates and insights on web design trends, news, and best practices.'
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Section title={content.technologies.title} description={content.technologies.description} />
      <Section title={content.portfolio.title} description={content.portfolio.description} />
    </div>
  );
}

export default App;
