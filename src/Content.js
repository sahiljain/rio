import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import { Table } from 'react-bootstrap';

class Content extends Component {
  render() {
    var countries = this.props.data.map(function(result) {
      result.points = (result.gold * this.props.goldValue) + (result.silver * this.props.silverValue) + (result.bronze * this.props.bronzeValue);
      return result;
    }.bind(this));

    countries.sort(function(a, b) {
      if (a.points !== b.points) {
        return b.points - a.points;
      }
      return b.gold_count - a.gold_count;
    });

    if (countries.length === 0) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Country</th>
            <th>Gold Medals</th>
            <th>Silver Medals</th>
            <th>Bronze Medals</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {
            countries.map(function(result, i) {
              return <tr key={result.abr}>
                <td>{i + 1}</td>
                <td>{result.name}</td>
                <td>{result.gold}</td>
                <td>{result.silver}</td>
                <td>{result.bronze}</td>
                <td>{result.points}</td>
              </tr>;
            })
          }
        </tbody>
      </Table>
    );
  }
}

export default Content;
