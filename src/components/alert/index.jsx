import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/core";

const generateAlert = (type) => {
  let alert;
  switch (type) {
    case "success":
      alert = (
        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      );
      break;
    case "failure":
      alert = (
        <Alert status="error">
          <AlertIcon />
          Seems your account is about to expire, upgrade now!
        </Alert>
      );
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
