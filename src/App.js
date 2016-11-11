import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Content from './Content';
import ValuesBar from './ValuesBar';
import { Navbar, Grid } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {goldValue: 9, silverValue: 3, bronzeValue: 1};
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(gold, silver, bronze) {
    this.setState({goldValue: gold, silverValue: silver, bronzeValue: bronze});
  }

  render() {
    var data = [{"name":"United States","abr":"USA","gold":"46","silver":"37","bronze":"38","total":"121"},{"name":"Great Britain","abr":"GBR","gold":"27","silver":"23","bronze":"17","total":"67"},{"name":"China","abr":"CHN","gold":"26","silver":"18","bronze":"26","total":"70"},{"name":"Russian Federation","abr":"RUS","gold":"19","silver":"18","bronze":"19","total":"56"},{"name":"Germany","abr":"GER","gold":"17","silver":"10","bronze":"15","total":"42"},{"name":"Japan","abr":"JPN","gold":"12","silver":"8","bronze":"21","total":"41"},{"name":"France","abr":"FRA","gold":"10","silver":"18","bronze":"14","total":"42"},{"name":"Republic of Korea","abr":"KOR","gold":"9","silver":"3","bronze":"9","total":"21"},{"name":"Italy","abr":"ITA","gold":"8","silver":"12","bronze":"8","total":"28"},{"name":"Australia","abr":"AUS","gold":"8","silver":"11","bronze":"10","total":"29"},{"name":"Netherlands","abr":"NED","gold":"8","silver":"7","bronze":"4","total":"19"},{"name":"Hungary","abr":"HUN","gold":"8","silver":"3","bronze":"4","total":"15"},{"name":"Brazil","abr":"BRA","gold":"7","silver":"6","bronze":"6","total":"19"},{"name":"Spain","abr":"ESP","gold":"7","silver":"4","bronze":"6","total":"17"},{"name":"Kenya","abr":"KEN","gold":"6","silver":"6","bronze":"1","total":"13"},{"name":"Jamaica","abr":"JAM","gold":"6","silver":"3","bronze":"2","total":"11"},{"name":"Croatia","abr":"CRO","gold":"5","silver":"3","bronze":"2","total":"10"},{"name":"Cuba","abr":"CUB","gold":"5","silver":"2","bronze":"4","total":"11"},{"name":"New Zealand","abr":"NZL","gold":"4","silver":"9","bronze":"5","total":"18"},{"name":"Canada","abr":"CAN","gold":"4","silver":"3","bronze":"15","total":"22"},{"name":"Uzbekistan","abr":"UZB","gold":"4","silver":"2","bronze":"7","total":"13"},{"name":"Kazakhstan","abr":"KAZ","gold":"3","silver":"5","bronze":"9","total":"17"},{"name":"Colombia","abr":"COL","gold":"3","silver":"2","bronze":"3","total":"8"},{"name":"Switzerland","abr":"SUI","gold":"3","silver":"2","bronze":"2","total":"7"},{"name":"Iran","abr":"IRI","gold":"3","silver":"1","bronze":"4","total":"8"},{"name":"Greece","abr":"GRE","gold":"3","silver":"1","bronze":"2","total":"6"},{"name":"Argentina","abr":"ARG","gold":"3","silver":"1","bronze":"0","total":"4"},{"name":"Denmark","abr":"DEN","gold":"2","silver":"6","bronze":"7","total":"15"},{"name":"Sweden","abr":"SWE","gold":"2","silver":"6","bronze":"3","total":"11"},{"name":"South Africa","abr":"RSA","gold":"2","silver":"6","bronze":"2","total":"10"},{"name":"Ukraine","abr":"UKR","gold":"2","silver":"5","bronze":"4","total":"11"},{"name":"Serbia","abr":"SRB","gold":"2","silver":"4","bronze":"2","total":"8"},{"name":"Poland","abr":"POL","gold":"2","silver":"3","bronze":"6","total":"11"},{"name":"DPR Korea","abr":"PRK","gold":"2","silver":"3","bronze":"2","total":"7"},{"name":"Belgium","abr":"BEL","gold":"2","silver":"2","bronze":"2","total":"6"},{"name":"Thailand","abr":"THA","gold":"2","silver":"2","bronze":"2","total":"6"},{"name":"Slovakia","abr":"SVK","gold":"2","silver":"2","bronze":"0","total":"4"},{"name":"Georgia","abr":"GEO","gold":"2","silver":"1","bronze":"4","total":"7"},{"name":"Azerbaijan","abr":"AZE","gold":"1","silver":"7","bronze":"10","total":"18"},{"name":"Belarus","abr":"BLR","gold":"1","silver":"4","bronze":"4","total":"9"},{"name":"Turkey","abr":"TUR","gold":"1","silver":"3","bronze":"4","total":"8"},{"name":"Armenia","abr":"ARM","gold":"1","silver":"3","bronze":"0","total":"4"},{"name":"Czech Republic","abr":"CZE","gold":"1","silver":"2","bronze":"7","total":"10"},{"name":"Ethiopia","abr":"ETH","gold":"1","silver":"2","bronze":"5","total":"8"},{"name":"Slovenia","abr":"SLO","gold":"1","silver":"2","bronze":"1","total":"4"},{"name":"Indonesia","abr":"INA","gold":"1","silver":"2","bronze":"0","total":"3"},{"name":"Romania","abr":"ROU","gold":"1","silver":"1","bronze":"3","total":"5"},{"name":"Bahrain","abr":"BRN","gold":"1","silver":"1","bronze":"0","total":"2"},{"name":"Vietnam","abr":"VIE","gold":"1","silver":"1","bronze":"0","total":"2"},{"name":"Taipei (Chinese Taipei)","abr":"TPE","gold":"1","silver":"0","bronze":"2","total":"3"},{"name":"Bahamas","abr":"BAH","gold":"1","silver":"0","bronze":"1","total":"2"},{"name":"Côte d'Ivoire","abr":"CIV","gold":"1","silver":"0","bronze":"1","total":"2"},{"name":"IOA","abr":"IOA","gold":"1","silver":"0","bronze":"1","total":"2"},{"name":"Fiji","abr":"FIJ","gold":"1","silver":"0","bronze":"0","total":"1"},{"name":"Jordan","abr":"JOR","gold":"1","silver":"0","bronze":"0","total":"1"},{"name":"Kosovo","abr":"KOS","gold":"1","silver":"0","bronze":"0","total":"1"},{"name":"Puerto Rico","abr":"PUR","gold":"1","silver":"0","bronze":"0","total":"1"},{"name":"Singapore","abr":"SIN","gold":"1","silver":"0","bronze":"0","total":"1"},{"name":"Tajikistan","abr":"TJK","gold":"1","silver":"0","bronze":"0","total":"1"},{"name":"Malaysia","abr":"MAS","gold":"0","silver":"4","bronze":"1","total":"5"},{"name":"Mexico","abr":"MEX","gold":"0","silver":"3","bronze":"2","total":"5"},{"name":"Algeria","abr":"ALG","gold":"0","silver":"2","bronze":"0","total":"2"},{"name":"Ireland","abr":"IRL","gold":"0","silver":"2","bronze":"0","total":"2"},{"name":"Lithuania","abr":"LTU","gold":"0","silver":"1","bronze":"3","total":"4"},{"name":"Bulgaria","abr":"BUL","gold":"0","silver":"1","bronze":"2","total":"3"},{"name":"Venezuela","abr":"VEN","gold":"0","silver":"1","bronze":"2","total":"3"},{"name":"India","abr":"IND","gold":"0","silver":"1","bronze":"1","total":"2"},{"name":"Mongolia","abr":"MGL","gold":"0","silver":"1","bronze":"1","total":"2"},{"name":"Burundi","abr":"BDI","gold":"0","silver":"1","bronze":"0","total":"1"},{"name":"Grenada","abr":"GRN","gold":"0","silver":"1","bronze":"0","total":"1"},{"name":"Niger","abr":"NIG","gold":"0","silver":"1","bronze":"0","total":"1"},{"name":"Philippines","abr":"PHI","gold":"0","silver":"1","bronze":"0","total":"1"},{"name":"Qatar","abr":"QAT","gold":"0","silver":"1","bronze":"0","total":"1"},{"name":"Norway","abr":"NOR","gold":"0","silver":"0","bronze":"4","total":"4"},{"name":"Egypt","abr":"EGY","gold":"0","silver":"0","bronze":"3","total":"3"},{"name":"Tunisia","abr":"TUN","gold":"0","silver":"0","bronze":"3","total":"3"},{"name":"Israel","abr":"ISR","gold":"0","silver":"0","bronze":"2","total":"2"},{"name":"Austria","abr":"AUT","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Dominican Republic","abr":"DOM","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Estonia","abr":"EST","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Finland","abr":"FIN","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Morocco","abr":"MAR","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Republic of Moldova","abr":"MDA","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Nigeria","abr":"NGR","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Portugal","abr":"POR","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"Trinidad and Tobago","abr":"TTO","gold":"0","silver":"0","bronze":"1","total":"1"},{"name":"United Arab Emirates","abr":"UAE","gold":"0","silver":"0","bronze":"1","total":"1"}];
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Rio Medal Count
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Grid>
        <ValuesBar onUserInput={this.handleUserInput} goldValue={this.state.goldValue} silverValue={this.state.silverValue} bronzeValue={this.state.bronzeValue}/>
        <br/>
        <Content data={data} goldValue={this.state.goldValue} silverValue={this.state.silverValue} bronzeValue={this.state.bronzeValue}/>
      </Grid>
      </div>
    );
  }
}

export default App;
