import './styles/styles.scss';
import Header from './components/header/header';
import Preview from './components/preview/preview';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Preview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
