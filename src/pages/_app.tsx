import React from 'react';
import 'tailwindcss/tailwind.css';

interface Props {
  Component: string;
  pageProps: {};
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
