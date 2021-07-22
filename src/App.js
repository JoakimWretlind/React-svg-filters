import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyle'
import { Navbar, Home, One, Two, Three } from './components/index'

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/one" exact component={One} />
          <Route path="/two" exact component={Two} />
          <Route path="/three" exact component={Three} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
