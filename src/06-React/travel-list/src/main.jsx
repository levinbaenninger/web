import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './styles.css';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </StrictMode>
);
