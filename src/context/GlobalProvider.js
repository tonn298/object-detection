import React, { useState, useContext } from "react";

//TODOS: add logic on setDATA to ensure the param pass in gonna be what we needed (prevent clash)

const GlobalContext = React.createContext();

const GlobalProvider = (props) => {
  const [image, setImage] = useState({
    base64: null,
    height: null,
    width: null,
    setImageForQuery: (param) => {
      const updateImageState = image;
      updateImageState.base64 = param;
      setImage(() => ({ ...updateImageState }));
    },
  });

  const [apiResult, setApiResult] = useState({
    uploadResult: null,
    webcamResult: null,
    setUploadResult: (param) => {
      const updateResultState = apiResult;
      updateResultState.uploadResult = param;
      setApiResult(() => ({ ...updateResultState }));
    },
    setWebcamResult: (param) => {
      const updateResultState = apiResult;
      updateResultState.webcamResult = param;
      setApiResult(() => ({ ...updateResultState }));
    },
  });

  const [method, setMethod] = useState({
    name: null,
    uploadPreview: null,
    webcamPreview: null,

    setMethodForUpload: (param) => {
      const updateMethodState = method;
      updateMethodState.name = param;
      setMethod(() => ({ ...updateMethodState }));
    },
    setUploadPreview: (param) => {
      const updateMethodState = method;
      updateMethodState.uploadPreview = param;
      setMethod(() => ({ ...updateMethodState }));
    },
    setWebcamPreview: (param) => {
      const updateMethodState = method;
      updateMethodState.webcamPreview = param;
      setMethod(() => ({ ...updateMethodState }));
    },
  });

  return (
    <GlobalContext.Provider value={{ image, apiResult, method }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
