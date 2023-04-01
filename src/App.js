import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const pageSize = 4;
  const country = 'us';
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} country={country} headline='Top Headlines' 
                 category="general" />} />
          <Route path="/home" element={<News key="general" pageSize={pageSize} country={country} headline='Top Headlines' 
                 category="general" />} />
          <Route path="/about" element={<div> About</div>} />
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} country={country} headline='Sports News'  
                 category="sports" />} />
          <Route path="/science" element={<News key="science" pageSize={pageSize} country={country} headline='Science 
                 News' category="science" />} />
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} country={country}
            headline='Technology News' category="technology" />} />
          <Route path="/health" element={<News key="health" pageSize={pageSize} country={country} headline='Health News' 
                 category="health" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country={country}
            headline='Entertainment News' category="entertainment" />} />
          <Route path="/business" element={<News key="business" pageSize={pageSize} country={country} headline='Business 
                 News' category="business" />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
