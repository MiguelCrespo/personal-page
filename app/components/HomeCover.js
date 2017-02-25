import React, {Component} from 'react';
import jump from 'jump.js'

import Typer from './typer/Typer';
export default class HomeCover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: ['Frontend Developer', 'JS Ninja']
    };
  }

  render() {
    return <div className="home-cover__content">

      <Typer words={this.state.words}
             classes="home-cover__content__header" speed="100"/>

      <span className="home-cover__content__header__content">
                Hello, I'm Miguel a software developer in love with technology
            </span>

      <button className="button button-primary button-contact button-xl" onClick={() => {
        jump(document.getElementById('contact'));
      }
      }>
        Contact
      </button>
    </div>;
  }
}