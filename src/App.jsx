// Per ora, per semplicità, mettiamo tutto qui.
// In una versione futura, implementeremo il routing.
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LaDottoressa from './pages/LaDottoressa';
import Trattamenti from './pages/Trattamenti';
import DoveRiceve from './pages/DoveRiceve';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <LaDottoressa />
        <Trattamenti />
        <DoveRiceve />
      </main>
      <Footer />
    </>
  )
}

export default App;
