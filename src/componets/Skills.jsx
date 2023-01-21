import NavBar from "./NavBar";

import React, { useState, useRef } from "react";

import { Container, Button, Alert, Card } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

function Skills() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "2rem" }}>
        {showButton && (
          <Button onClick={() => setShowMessage(true)} size="lg">
            Show Message
          </Button>
        )}
        <CSSTransition
          in={showMessage}
          nodeRef={nodeRef}
          timeout={1}
          classNames="alert"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <Card
            ref={nodeRef}
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>Animated alert message</Alert.Heading>
            <p>
              This alert message is being transitioned in and out of the DOM.
            </p>
            <Button variant="primary" onClick={() => setShowMessage(false)}>
              Close
            </Button>
          </Card>
        </CSSTransition>
      </Container>
    </>
  );
}

export default Skills;
