import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 1. import Provider from react/redux library & store
import { Provider } from 'react-redux';
import { store } from './store';
import "./index.css";
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2. wrap the app component inside the provider */}
      <Provider store={store}>
        <App />
      </Provider>
  </StrictMode>
);
