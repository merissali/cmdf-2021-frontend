import logo from './logo.svg';
import './App.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";
import NavBar from "./components/Navbars/NavBar.js"
import Router from "./router"; 
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { CaptureConsole } from '@sentry/integrations'

// Sentry.init({
//   dsn: "https://ecc488e3fa2240538ba885c408bea4dc@o544277.ingest.sentry.io/5665390",
//   integrations: [new Integrations.BrowserTracing(), new CaptureConsole({ levels: ['error'] })],
//   tracesSampleRate: 1.0,
//   ignoreErrors: ['TypeError: Cancelled']
// });


function App() {
  return (
    <Router />
  );
}

export default App;
