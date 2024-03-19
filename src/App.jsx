import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>
          Created by Darnell. <a href="#">Github repo</a>
        </p>
        <p>Font and homepage image are property of Nintendo.</p>
        <p>
          Built using React Router and{" "}
          <a href="https://fakestoreapi.com/">Fakestore API</a>
        </p>
      </footer>
    </>
  );
}

export default App;
