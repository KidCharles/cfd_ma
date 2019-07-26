import React from "react";
import "./App.css";

import Nav from "./Components/Nav/Nav";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="appContianer">
        <div className="titlePrompt">
          <div>
            <h1>
              At CareFree Direct, <span>we find the right healthcare solutions,</span> so you
              don't have to
            </h1>
            <p className="subHeader">
              {" "}
              Talk to one of our friendly licensed benefit advisors now to learn
              about your coverage options
            </p>
            <Form />
            <p className="disclaimer">
              *By completing this form, You are giving permission to CareFree
              Direct to contact you
            </p>
          </div>
        </div>
      </div>

      <div className="appContainer2">
        <p>
          We are not part of CMS or medicare.govMedicare has neither reviewed
          nor endorsed the information on this page By contacting us you consent
          to be contacted via automatic telephone dialing system, by artificial
          voice and/or pre-recorded message, or by text message at the telephone
          number you provided above and receive email at the email address you
          provided above from or on behalf of CareFree Direct, insurance
          carriers or their agents, and partner companies. You are under no
          obligation to purchase any goods or services as a result of this
          action. You understand that consent is not a condition of purchase and
          you may also receive a quote by contacting us via phone. You may
          revoke consent at any time. CareFree Direct does not charge you for
          sending or receiving text messages. Your carrier's message and data
          rates may apply. By using this form you agree to the terms of our
          Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default App;
