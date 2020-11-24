import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/core";

const generateAlert = (type) => {
  let alert;
  switch (type) {
    case "success":
      alert = (
        <Alert status="success">
          <AlertIcon />
          Subscription successful. Fire on!
        </Alert>
      );
      break;
    case "failure":
      alert = (
        <Alert status="error">
          <AlertIcon />
          Unable to make a subscription at the moment, try again!
        </Alert>
      );
      break;
      case "loading":
        alert = (
          <Alert status="info">
            <AlertIcon />
            Loading....
          </Alert>
        );
        break;
    default:
      alert = "";
  }
  return alert;
};

const AlertComponent = (props) => {
  const { type } = props;
  return (
        generateAlert(type)

  );
};

export default AlertComponent;
