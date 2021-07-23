import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyle'
import { Navbar, Home, One, Two, Three, Four } from './components/index'

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
          <Route path="/four" exact component={Four} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
