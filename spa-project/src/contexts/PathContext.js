import React, { useState, useEffect } from "react";
import axios from "axios";

const { createContext } = require("react");


export const MyContextData = createContext(null);

export const MyContext = (props) => {
  const [myState, setMyState] = useState(null);
  const [addingCounter, setAddingCounter] = useState(0);
  const [selectedPath, setSelectedPath] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8090/user?username=liza")
      .then((response) => {
        setMyState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addingCounter]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/user?username=liza")
      .then((response) => {
        setSelectedPath(response.data.paths[0].pathName)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MyContextData.Provider value={{ myState, setMyState, addingCounter, setAddingCounter, selectedPath, setSelectedPath }}>
      {props.children}
    </MyContextData.Provider>
  );
};
