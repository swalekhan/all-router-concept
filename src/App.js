import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuote";
import NoFound from "./pages/NoFound";
import QuoteDetail from "./pages/QuoteDetail";



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to="/quotes"/>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuotes />
        </Route>
        <Route path='*'>
          <NoFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
