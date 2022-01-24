import React, { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";

function App({ pageProps }) {
  const [page, setPage] = useState(pageProps);

  console.log(pageProps);

  useEffect(() => {
    console.log("useEffect");
    window.onpopstate = (e) => {
      setPage(e.state);
    };
  }, []);

  function onChangePage(e) {
    const newPage = e.target.dataset.page;
    console.log(newPage);
    window.history.pushState(newPage, "", `/${newPage}`);
    setPage(newPage);
  }

  const PageComponent = page === "home" ? Home : About;

  return (
    <div className="container">
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent />
    </div>
  );
}

export default App;
