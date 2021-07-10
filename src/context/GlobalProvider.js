import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = (props) => {
  const [image, setImage] = useState({
    base64: null,
    setImageForQuery: (param) => {
      const updateImageState = image;
      updateImageState.base64 = param;
      setImage(() => ({ ...updateImageState }));
    },
  });

  const [apiResult, setApiResult] = useState({
    uploadResult: null,
    webCamResult: null,
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
    data: null,
    setMethodForUpload: (param) => {
      const updateMethodState = method;
      updateMethodState.data = param;
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
