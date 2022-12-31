import React from "react";
import AppLoader from "./components/hoc/appLoader";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div>
      <AppLoader>
        <Switch>
          <Route path="/:posts?/:postId?" component={Main}/>
          <Redirect to="/" />
        </Switch>
      </AppLoader>
    </div>
  );
}

export default App;
