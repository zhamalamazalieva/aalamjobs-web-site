import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { I18nextProvider } from "react-i18next"
import localization from "./localizaton/localication"
import Providers from './providers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
	<Providers>
		<I18nextProvider i18n={localization}>
		<ToastContainer />
			<App />
		</I18nextProvider>
	</Providers>,

	document.getElementById("root")
)
