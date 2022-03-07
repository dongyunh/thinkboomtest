import '../styles/globals.css'
import { Provider } from "react-redux"
import type { AppProps } from 'next/app'
import { store} from "../src/redux/store"

//store에 있는 data를 app 전체에 주입해주기 위해서 여기에 provider를 감싸주어야 한다. 그리고 store를 prop으로 넣어준다. 

function MyApp({ Component, pageProps }: AppProps) {
  return(
   <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
  )
  
}

export default MyApp

