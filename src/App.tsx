import { Route, Switch } from "wouter";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/dzikir-pagi-sughro" component={DetailPage} />
        <Route path="/dzikir-sore-sughro" component={DetailPage} />
        <Route path="/dzikir-pagi-kubro" component={DetailPage} />
        <Route path="/dzikir-sore-kubro" component={DetailPage} />
        <Route>404: No page exists.</Route>
      </Switch>
    </>
  );
};

export default App;
