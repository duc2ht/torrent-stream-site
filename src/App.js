import Home from "./Home";
import Watch from "./Watch";
import {HashRouter,Route,Routes,Link} from "react-router-dom";


function App() {

  return (
    <HashRouter>
    <div className="lg:p-10  bg-gradient-to-r from-purple-900 to-blue-900 bg-cover">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Watch" element={<Watch />} />
    </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
