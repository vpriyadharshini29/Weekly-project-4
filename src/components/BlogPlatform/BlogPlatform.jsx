import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import withLoader from "../../hoc/withLoader";


import "./BlogPlatform.css";
import ModalPortal from "../../portals/Modalportal";

// Base API
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Post List Component
const PostList = ({ data }) => {
  const { username } = useParams();

  return (
    <div className="post-list-container">
      <h2>Posts by {username}</h2>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 100)}...</p>
          <Link to={`/blog/post/${post.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

const PostListWithLoader = withLoader(PostList, `${BASE_URL}/posts`);

// Post Detail Component
const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/posts/${slug}`)
      .then(res => res.json())
      .then(setPost);
  }, [slug]);

  if (!post) return <div className="loading">Loading post...</div>;

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className="edit-btn" onClick={() => setShowModal(true)}>Edit Post</button>

      {showModal && (
        <ModalPortal>
          <div className="modal-backdrop" onClick={() => setShowModal(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h3>Edit Post</h3>
              <textarea defaultValue={post.body} rows="5" />
              <div className="modal-actions">
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button className="save">Save</button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
};

// Main BlogPlatform Component
export default function BlogPlatform() {
  return (
    <div className="blog-container">
      <nav className="blog-nav">
        <Link to="/blog/user/johndoe/posts">John's Posts</Link>
      </nav>

      <Routes>
        <Route path="user/:username/posts" element={<PostListWithLoader />} />
        <Route path="post/:slug" element={<PostDetail />} />
      </Routes>
    </div>
  );
}
