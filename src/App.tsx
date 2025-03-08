import { Route, Switch } from "wouter";

import { ROUTE_TITLES } from "./constants";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <Switch>
          <Route path="/" component={HomePage} />
          {Object.keys(ROUTE_TITLES).map((routePath) => (
            <Route key={routePath} path={routePath} component={DetailPage} />
          ))}
          <Route path="/settings" component={SettingsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
