import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const dummyJson = '{"tasks":[{"id":8,"description":"Domain Modelling","status":"not yet","createdAt":"2016-11-25T09:14:42.062Z","updatedAt":"2016-11-25T09:14:42.062Z"},{"id":9,"description":"Sleep!","status":"not yet","createdAt":"2016-11-25T10:38:03.882Z","updatedAt":"2016-11-25T10:38:03.882Z"}]}';
  const dummyData = JSON.parse(dummyJson);
  const div = document.createElement('div');
  ReactDOM.render(<App data = {dummyData}/>, div);
});
