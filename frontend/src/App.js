import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
import Home from "../src/views/Home";
import PostList from "../src/views/PostList";
import Post from "../src/views/Post";
import CreatePost from "../src/views/CreatePost";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
