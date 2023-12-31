import ipConfig from "./ipConfig.json";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks"
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <ThemeProvider theme={theme}>
        <Switch>
          {/* <Route exact path="/" component={Products} /> */}
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/thanks" component={Thanks} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}
export default App;
