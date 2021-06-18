import React from "react";
import Button from "react-bootstrap/Button";

function Quote() {
  let date = new Date();

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { weekday: "long" });
  console.log(month);

  let today =
    day + " " + date.getDate() + " " + month + " " + date.getFullYear();

  window.onload = function () {
    let quotesDiv = document.getElementById("quotes");

    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((quote) => {
        quotesDiv.innerHTML += `<p> ${quote.quote} </p>`;
      });
  };

  return (
    <div className="card-content">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Kanye Quote Of The Day</h2>
          <h3 className="card-subtitle mb-2 text-muted date-text">{today}</h3>
          <div id="quotes"></div>
          <Button href="/" className="btn">Refresh</Button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
