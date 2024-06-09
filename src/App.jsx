import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./assets/components/Welcome";
import GithubUser from "./assets/components/GithubUser";
import ShowGithubUser from "./assets/components/ShowGithubUser";
import GithubUserList from "./assets/components/GithubUserList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="simone" />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
        </Routes>

        <div>
          <Link to="/">Home</Link>
          <Link to="/users">users github</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
