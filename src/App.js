import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { WidgetComponent } from './components/widget.component';

function App() {
  return (
    <Router>
      <Route
        exact
        render={({ location }) => (
          <div>
            <WidgetComponent
              title="Booking"
              description="Setup your booking"
              paymentMethods={{ cash: true, online: false }}
              appointments={[{ start: 1, end: 2, capacity: 10 }]}
              location={location}
            />
          </div>
        )}
      />
    </Router>
  );
}

export default App;
