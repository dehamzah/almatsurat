import { Route, Switch } from "wouter";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/almatsurat-pagi-sughro" component={DetailPage} />
        <Route path="/almatsurat-sore-sughro" component={DetailPage} />
        <Route path="/almatsurat-pagi-kubro" component={DetailPage} />
        <Route path="/almatsurat-sore-kubro" component={DetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
