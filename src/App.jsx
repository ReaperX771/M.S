import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import { Header } from './Components';
import { About, Contact, Home, Poems } from "./Pages";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main Content */}
       <main
  className={`flex-1 transition-all duration-300 p-6 ml-0 ${
    collapsed ? "md:ml-20" : "md:ml-64"
  }`}
>
          <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
