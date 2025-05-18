import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {QueryClient,QueryClientProvider}  from "react-query";
import './index.css'
import {  AppNotifyProvider } from './context/AppNotify.tsx';

const client = new QueryClient(
  {
    defaultOptions:{
    mutations:{
        retry:0
      }
    }
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode >
{/* <Provider store={Store}> */}
    <QueryClientProvider  client={client}>
      <AppNotifyProvider>

<App />

      </AppNotifyProvider>
    </QueryClientProvider>
{/* </Provider> */}
 </StrictMode>,
)
