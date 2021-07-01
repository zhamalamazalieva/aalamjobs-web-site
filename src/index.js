import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { I18nextProvider } from "react-i18next"
import localization from "./localizaton/localication"
import { BrowserRouter as Router } from "react-router-dom"
ReactDOM.render(
	<Router>
		<I18nextProvider i18n={localization}>
			<App />
		</I18nextProvider>
	</Router>,

	document.getElementById("root")
)
