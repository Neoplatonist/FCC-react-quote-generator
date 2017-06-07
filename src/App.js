import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    // All context binding goes here
    this.getQuote = this.getQuote.bind(this);
    this.sendTweet = this.sendTweet.bind(this);

    // Defines all states used
    this.state = {
      full: "Everyone u skip, thats another u coulda been hack - @replic8tor 2016",
      quote: "Everyone u skip, thats another u coulda been hack",
      author: "- @replic8tor 2016",
      notification: ""
    }
  }

  getQuote(e) {
    e.preventDefault();

    this.setState({notification: ""});
    $("#quote").fadeOut();
    $("#author").fadeOut();

    axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/', {
      headers: { "X-Mashape-Key": "RWDGX6A9NOmshtysnIctYO1avh2Sp1hv1myjsnMzSJasRoR2A8" }
    })
      .then((res) => {
        if (res.status === 200) {
          let data = res.data;
          this.setState({full: data.quote + " - " + data.author})
          this.setState({quote: data.quote});
          this.setState({author: "- " + data.author});
          $("#quote").fadeIn();
          $("#author").fadeIn();
        } else {
          this.setState({notification: "Call your lawyer, you broke it."});
        }
      })
  }

  sendTweet(e) {
    e.preventDefault();

    let tweet = this.state.full;

    if (tweet.length < 141) {
      let tweetURL = 'https://twitter.com/home?status=' + encodeURIComponent(tweet);
      window.open(tweetURL, '_blank');
    } else {
      this.setState({notification: "Tweet has to be less than 140 characters."});
    }
  }

  render() {
    return (
      <div>
        <Header notification={ this.state.notification }/>
        <main>
          <div className="container">
            <div className="row valign">
              <div className="col s6 offset-s3">
                <div className="card">
                  <div className="card-content">
                    <h5 id="quote" className="">{ this.state.quote }</h5>
                    <p id="author" className="right">{ this.state.author }</p>
                  </div>
                  <div className="card-action center">
                    <div className="row">
                      <div className="col m6 s12">
                        <a id="newQuote" className="btn blue left" onClick={ this.getQuote }>New Quote</a>
                      </div>
                      <div className="col m6 s12">
                        <a id="tweet" className="btn blue right" onClick={ this.sendTweet }>Tweet It</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
