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
    data: null,
    setData: (param) => {
      const updateResultState = apiResult;
      updateResultState.data = param;
      setApiResult(() => ({ ...updateResultState }));
    },
  });

  return (
    <GlobalContext.Provider value={{ image, apiResult }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
