import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = {
    email: ''
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label='Email'
          />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {

};

export default LoginForm;
