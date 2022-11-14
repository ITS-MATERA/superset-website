import React from "react";

const SmallPrints = () => (
  <div className="it-footer-small-prints clearfix">
    <div className="container-fluid">
      <h3 className="visually-hidden">Sezione Link Utili</h3>
      <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
        <li className="list-inline-item">
          <a href="#" title="Note Legali">
            Media policy
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" title="Note Legali">
            Note legali
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" title="Privacy-Cookies">
            Privacy policy
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" title="Mappa del sito">
            Mappa del sito
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SmallPrints;
