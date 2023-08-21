import React from "react";
import { Arrow1 } from "@/icons/Arrow1";
import { Form } from "./Form";

export const BlurLayer = (): JSX.Element => {
  return (

    // <div className="blur-layer">
      <Form buttonIcon={<Arrow1 className="arrow-1" />} className="form-instance" />
    // </div>

  );
};
