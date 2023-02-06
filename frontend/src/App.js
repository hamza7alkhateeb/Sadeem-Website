import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home'
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";
import Layout from "./hocs/Layout";



function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/blog"} element={<Blog />} />
            <Route path={"/category"} element={<Category />} />
            <Route path={"/:slug"} element={<BlogDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
}
export default App;
