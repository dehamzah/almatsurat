import { Route, Switch } from "wouter";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ROUTES_TITLE } from "./constants";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        {Object.keys(ROUTES_TITLE).map((routePath) => (
          <Route key={routePath} path={routePath} component={DetailPage} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
