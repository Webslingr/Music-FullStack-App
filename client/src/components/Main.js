import React from 'react';
import '../css/main.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card';
import dataService from '../services/dataService';
import { Link } from 'react-router-dom';

class Main extends React.Component {


  //define state
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    dataService.getSongs(songs => {
      this.setState({ songs })
    })
  }

  render() {
    return ( 
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search this site" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <Link className="btn btn-primary" to="/songs/create">Create Song</Link>
          <div className="container">
            <Card songs={this.state.songs} />
          </div>
        </div>
      </div>
    );
}
  }
 
export default Main;