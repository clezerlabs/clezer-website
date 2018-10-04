import * as React from "react";
import { LandingPage } from "./components/LandingPage";

// tslint:disable-next-line:no-import-side-effect
import "./App.css";

/**
 * The application root component
 */
export class App extends React.Component {
    public render = () => (<LandingPage />);
}
