import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import { Form, ControlLabel, FormGroup } from 'react-bootstrap';

class ValuesBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.refs.goldInput.value,
      this.refs.silverInput.value,
      this.refs.bronzeInput.value,
    );
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>
          Gold Value:
          </ControlLabel>
          {' '}
          <input
            type="number"
            value={this.props.goldValue}
            ref="goldInput"
            onChange={this.handleChange}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>
          Silver Value:
          </ControlLabel>
          {' '}
          <input
            type="number"
            value={this.props.silverValue}
            ref="silverInput"
            onChange={this.handleChange}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>
          Bronze Value:
          </ControlLabel>
          {' '}
          <input
            type="number"
            value={this.props.bronzeValue}
            ref="bronzeInput"
            onChange={this.handleChange}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default ValuesBar;
