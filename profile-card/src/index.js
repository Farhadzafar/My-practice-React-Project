import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="image-cantent">
      <img src="assite/Farhad.jpg" alt="Farhad" />
    </div>
  );
}

function Main() {
  return (
    <div className="text-cantent">
      <h1>Farhad Zafari</h1>
      <p>frondend devloper, UI/UX designer.</p>

      <div className="icons">
        <p>🚩 Afghanistan</p>
        <p>✉ sund Email</p>
      </div>

      <div className="folloers">
        <p className="follow">
          <strong>
            4223 <br />
          </strong>
          folloers
        </p>
        <p className="follow">
          <strong>
            230 <br />
          </strong>
          follwing
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return <button type="button">Follow</button>;
}
