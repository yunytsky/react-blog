import Navbar from './Header';
import Blogs from './Blogs';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className="content">
              <Blogs></Blogs>
              <Sidebar></Sidebar>
        </div>
    </div>
  );
}

export default App;
