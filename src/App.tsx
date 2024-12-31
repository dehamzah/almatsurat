import { Route, Switch } from "wouter";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ROUTE_TITLES } from "./constants";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        {Object.keys(ROUTE_TITLES).map((routePath) => (
          <Route key={routePath} path={routePath} component={DetailPage} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
