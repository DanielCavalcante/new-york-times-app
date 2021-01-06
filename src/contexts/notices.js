import React, { createContext, useState, useContext } from "react";

const NoticeContext = createContext();

const NoticeProvider = ({ children }) => {
  const [config, setConfig] = useState("technology");
  const [reload, setReload] = useState(false);

  const setConfigData = (type) => {
    setConfig(type);
    setReload(true);
  };
  return (
    <NoticeContext.Provider
      value={{
        setConfigData,
        config,
        reload,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};

function useNotices() {
  return useContext(NoticeContext);
}

export { useNotices, NoticeContext, NoticeProvider };
