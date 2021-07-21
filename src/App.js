import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Home";
import { CreatorPage } from "./Creator";
import { SurveyPage } from "./Survey";
import { ExportToPDFPage } from "./Export";
import { AnalyticsPage } from "./Analytics";
import { AnalyticsTabulatorPage } from "./AnalyticsTabulator";
import { AnalyticsDatatablesPage } from "./AnalyticsDatatables";

import "bootstrap/dist/css/bootstrap.css";

export default function SurveyJSReactApplication() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Prova SurveyJS + ReactJS Bootstrap4
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/survey">Survey</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/creator">SurveyJS Creator</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/export">Export to PDF</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/analytics">Analytics</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/analyticstabulator">Results Table</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/analyticsdatatables">
                    Results Table (IE Support)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/survey">
            <SurveyPage />
          </Route>
          <Route path="/creator">
            <CreatorPage />
          </Route>
          <Route path="/export">
            <ExportToPDFPage />
          </Route>
          <Route path="/analytics">
            <AnalyticsPage />
          </Route>
          <Route path="/analyticsdatatables">
            <AnalyticsDatatablesPage />
          </Route>
          <Route path="/analyticstabulator">
            <AnalyticsTabulatorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
