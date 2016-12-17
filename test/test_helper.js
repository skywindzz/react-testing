import jsdom from 'jsdom';
import jquery from 'jquery';  // $ is jquery default and it will try to get access to browser, therefore we need to redirect
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//setup testing environment to run like a browser in the commandline
global.document = jsdom.jsdom('<!doctype html><body></body></html>'); //setting up the fake dom in terminal for jquery to use in your test
global.window = global.document.defaultView;  //make sure jquery get acess to the window object
const $ = jquery(global.window);  //tell jquery to not reach out to the real dom and redirect it to window created by JSDOM

//build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store= { createStore(reducers, state) }>  
     <ComponentClass {...props} />
    </Provider> 
  );

  return $(ReactDOM.findDOMNode(componentInstance)); //How we get access to HTML of components
}

//build helper for simulating events


//set up chai-jquery

export { renderComponent, expect };