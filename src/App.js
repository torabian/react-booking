import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { WidgetComponent } from './components/widget.component';

function App() {
  return (
    <Router>
      <Route
        exact
        render={({ location }) => <WidgetComponent location={location} />}
      />
    </Router>
  );
}

export default App;
