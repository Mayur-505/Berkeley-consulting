/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon3 } from "@/icons/Icon3";
import { Property2Search } from "@/icons/Property2Search";

interface Props {
  headingIcon: boolean;
  writeHeadingText: string;
  rHSIcon: boolean;
  inputText: string;
  lHSIcon: boolean;
  helpingMessage: boolean;
  count: boolean;
  heading: boolean;
  helpingCounter: boolean;
  writeHelpingMessage: string;
  writeCount: string;
  status: "active" | "default" | "edit" | "dark" | "error";
  dashboard: "ON" | "OFF";
  className: any;
  searchBarClassName: any;
}

export const InputBox = ({
  headingIcon,
  writeHeadingText = "Heading",
  rHSIcon,
  inputText = "Search",
  lHSIcon = true,
  helpingMessage = true,
  count = true,
  heading = true,
  helpingCounter = true,
  writeHelpingMessage = "Heading",
  writeCount = "123456",
  status,
  dashboard,
  className,
  searchBarClassName,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    status: status || "default",
    dashboard: dashboard || "OFF",
  });

  return (
    <div className={`input-box ${state.status} ${state.dashboard} ${className}`}>
      {heading && (
        <div className="heading">
          {state.dashboard === "OFF" && <>{writeHeadingText}</>}

          {state.dashboard === "ON" && <div className="text-wrapper">{writeHeadingText}</div>}
        </div>
      )}

      <div className="auto-layout-vertical">
        <div
          className={`search-bar ${searchBarClassName} `}
          onClick={() => {
            dispatch("click");
          }}
        >
          {lHSIcon && (
            <>
              <>
                {state.dashboard === "OFF" && (
                  <Property2Search
                    className="icon"
                    color={
                      state.status === "default"
                        ? "#A1A1AA"
                        : state.status === "active"
                          ? "#5B51D2"
                          : state.status === "dark"
                            ? "#9990FF"
                            : ""
                    }
                  />
                )}

                {state.dashboard === "ON" && (
                  <Icon3
                    className="icon-3"
                    color={state.status === "active" ? "#443BB0" : state.status === "error" ? "#EB9091" : "#A1A1AA"}
                  />
                )}
              </>
            </>
          )}

          <div className="search">{inputText}</div>
        </div>
        {helpingCounter && (
          <div className="auto-layout">
            {helpingMessage && <div className="div">{writeHelpingMessage}</div>}

            {count && <div className="element">{writeCount}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.dashboard === "OFF" && state.status === "default") {
    switch (action) {
      case "click":
        return {
          dashboard: "OFF",
          status: "active",
        };
    }
  }

  if (state.dashboard === "ON" && state.status === "default") {
    switch (action) {
      case "click":
        return {
          dashboard: "OFF",
          status: "active",
        };
    }
  }

  if (state.dashboard === "ON" && state.status === "active") {
    switch (action) {
      case "click":
        return {
          dashboard: "OFF",
          status: "active",
        };
    }
  }

  if (state.dashboard === "ON" && state.status === "error") {
    switch (action) {
      case "click":
        return {
          dashboard: "OFF",
          status: "active",
        };
    }
  }

  return state;
}

InputBox.propTypes = {
  headingIcon: PropTypes.bool,
  writeHeadingText: PropTypes.string,
  rHSIcon: PropTypes.bool,
  inputText: PropTypes.string,
  lHSIcon: PropTypes.bool,
  helpingMessage: PropTypes.bool,
  count: PropTypes.bool,
  heading: PropTypes.bool,
  helpingCounter: PropTypes.bool,
  writeHelpingMessage: PropTypes.string,
  writeCount: PropTypes.string,
  status: PropTypes.oneOf(["active", "default", "edit", "dark", "error"]),
  dashboard: PropTypes.oneOf(["ON", "OFF"]),
};
