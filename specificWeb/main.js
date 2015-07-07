'use strict';

var App = require('../common/components/App');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

// CSS
require('normalize.css');
require('../styles/main.css');

var content = document.getElementById('content');

var Routes = (
  <Route handler={App}>
    <Route name="/" handler={App}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
