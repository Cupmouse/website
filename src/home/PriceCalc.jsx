import React, { Component } from 'react';
import { Header, Input, Container } from 'semantic-ui-react';

const pricing = [
  {
    end: 20,
    price: 1.5,
  },
  {
    end: 50,
    price: 1.4,
  },
  {
    end: 100,
    price: 1.35,
  },
  {
    end: Number.POSITIVE_INFINITY,
    price: 1.3,
  },
]

const numberRegex = /^[1-9][0-9]*$/;

export default class PriceCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quota: 0,
      isNumber: false,
    };
    this.onQuotaChange = this.onQuotaChange.bind(this);
  }

  onQuotaChange(event, target) {
    
    this.setState({
      quota: Number.parseInt(target.value, 10),
      isNumber: numberRegex.test(target.value)
    });
  }

  render() {
    let quota = this.state.quota;
    let price = 0;
    if (this.state.isNumber) {
      price += Math.min(quota, pricing[0].end) * pricing[0].price;
      quota = Math.max(quota - pricing[0].end, 0);
      for (let i = 1; i < pricing.length; i++) {
        const step = pricing[i].end - pricing[i-1].end;
        price += Math.min(quota, step) * pricing[i].price;
        quota = Math.max(quota - step, 0);
      }
    }

    return (
      <Container style={{ padding: '2em 0' }} textAlign="center">
        <p className="bigger-text">You can calculate how much it will roughly cost by inputting the desirable quota amount.</p>
        <Header size="huge" content="How much are you planning to use?" />
        <Input
          size="huge"
          placeholder="Enter transfer amount in GB"
          label="GB"
          labelPosition="right"
          onChange={this.onQuotaChange}
          error={!this.state.isNumber}
        />
        <p style={{margin: "1em 0", fontSize: "3em"}}>${price} /month</p>
      </Container>
    );
  }
};
