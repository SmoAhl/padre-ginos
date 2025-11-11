import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // send to TrackJS/Sentry
    console.error("ErrorBoundary caught an error", error, info);
  }

  /*
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate() {}
 */

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>OH NO!</h2>
          <p>
            There was an error with this listing. <Link to="/">Click here</Link>{" "}
            to back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.getDerivedStateFromError();

export default ErrorBoundary;
