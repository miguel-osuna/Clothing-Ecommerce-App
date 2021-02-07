import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

function TopicList(props) {
  console.log(props);
  return (
    <div>
      <Link to={`${props.match.url}/13`}>To Topic</Link>
      <Link to={`${props.match.url}/1343`}>To Topic</Link>
      <Link to={`${props.match.url}/4453`}>To Topic</Link>
      <Link to={`${props.match.url}/13456`}>To Topic</Link>
      <h1>List of topics</h1>
    </div>
  );
}

function TopicDetail(props) {
  console.log(props);
  return (
    <div>
      <Link to="/topics">Back to Topics</Link>
      <button onClick={() => props.history.push("/topics")}>
        Back to Topics through History API
      </button>
      <h1>Topic detail: {props.match.params.topicId}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicList} />
        <Route exact path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
