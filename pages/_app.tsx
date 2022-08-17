import '@styles/globals.scss'
import {NavigationContainer} from "@components/navigation/container";

function Application({ Component, pageProps }) {
  return (<div className="container">
      <NavigationContainer />
    <main><Component {...pageProps} /></main>
  </div>)
}

export default Application
