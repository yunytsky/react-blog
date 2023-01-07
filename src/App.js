import Navbar from './Header';
import Blogs from './Blogs';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        
        <div className="content">
              
              <Blogs></Blogs>
              <Sidebar></Sidebar>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
