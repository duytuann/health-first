import { ConfigProvider } from 'antd';
import vnVN from 'antd/lib/locale/vi_VN';
import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import ThemeProvider from 'themes';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

moment.locale('vi');
toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 2000,
  hideProgressBar: true,
  newestOnTop: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <ConfigProvider locale={vnVN}>
            <App />
          </ConfigProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
