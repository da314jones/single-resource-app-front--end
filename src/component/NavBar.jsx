import { Link } from "react-router-dom";
import "./NavBar.css";
const API = import.meta.env.VITE_API_URL;

export default function NavBar() {
  return (
    <>
      <div className="home">
        <Link to="/">
          <img
            className="contain"
            src="/logo-removebg-preview.png"
            alt="logo"
          />
        </Link>
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark "> */}
        <Link to="/movies">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="35"
            fill="currentColor"
            className="list bi bi-camera-reels"
            viewBox="0 0 16 16"
          >
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </Link>
        <Link to="/movies/new">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="35"
            fill="currentColor"
            className="create bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </Link>
      {/* </nav> */}
    </>
  );
}
