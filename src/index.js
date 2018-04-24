import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './js/common/Header';
import Sidebar from './js/common/Sidebar';
import CreatePlayListForm from './js/components/CreatePlayListForm';
import Playlist from './js/components/Playlist';
import Songs from './js/components/Songs';
import playlistsReducer from './js/reducers/playlists-reducer';
import songsReducer from './js/reducers/songs-reducer';

const AppState = {
  /* Reducers and state go here */
  playlists: playlistsReducer,
  songs: songsReducer,
  sample: () => true
};

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(AppState), applyMiddleware(middleware));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <div className="row no-gutters main-content-wrapper">
              <div className="col-3">
                <Sidebar />
              </div>
              <div className="col-9 main">
                {/* Routes go here */}
                <Route path="/create-playlist" component={CreatePlayListForm} exact />
                <Route path="/playlist/:id" component={Playlist} />
                <Route path="/songs" component={Songs} exact />
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
