import React, { Component } from "react";
import Hero from "../components/Hero";
import Section from "../components/UI/Section";
import Error from "../components/UI/Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <Hero title="Oops!" subText="Oops oops oops!!" />
          <Section>
            <div className="container-fluid">
              <div className="row py-5 px-3 text-center">
                <Error errorMessage="Sorry, this page is having some difficulties loading!" />
              </div>
            </div>
          </Section>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
