import PostsList from "../src/features/posts/PostList";
import AddPostForm from "../src/features/posts/AddPostForm";
import SinglePostPage from "../src/features/posts/SinglePostPage";
import EditPostForm from "../src/features/posts/EditPostForm";
import UsersList from "../src/features/users/UsersList";
import UserPage from "../src/features/users/UserPage";
import Layout from "../src/components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/*Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
