import React from 'react';
import Home from './components/Home';
import Point1 from './components/Point1';
import Point2 from './components/Point2';
import Point3 from './components/Point3';
import Point4 from './components/Point4';
import Point5 from './components/Point5';
import Point6 from './components/Point6';
import Point7 from './components/Point7';
import Point8 from './components/Point8';
import Point9 from './components/Point9';
import Point10 from './components/Point10';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/point1" component={Point1} />
        <Route path="/point2" component={Point2} />
        <Route path="/point3" component={Point3} />
        <Route path="/point4" component={Point4} />
        <Route path="/point5" component={Point5} />
        <Route path="/point6" component={Point6} />
        <Route path="/point7" component={Point7} />
        <Route path="/point8" component={Point8} />
        <Route path="/point9" component={Point9} />
        <Route path="/point10" component={Point10} />
      </Switch>
    </Router>
  );
}

export default App;
