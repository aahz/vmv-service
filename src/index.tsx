import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import {
	Provider,
	defaultTheme
} from "@adobe/react-spectrum";

import {Header} from './components/header';
import {Tiles} from './components/tiles';
import {Sections} from './components/sections';
import {Contacts} from './components/contacts';
import {Footer} from './components/footer';

import "./assets/css/normalize.css";

import './style.less';

interface IVMVServicePropTypes {

}

interface IVMVServiceStateTypes {

}

class VMVService extends React.Component<IVMVServicePropTypes, IVMVServiceStateTypes> {
	public render(): React.ReactNode {
		return (
			<Provider
				UNSAFE_className={"vmv-service"}
				theme={defaultTheme}
				colorScheme="dark">
				<Header />
				<Tiles />
				<Sections />
				<Contacts />
				<Footer />
			</Provider>
		);
	}
}

(function (window, document, undefined) {
	const root = ReactDOM.createRoot(window.document.getElementById('vmv-service'));

	Promise.all([
		new Promise((resolve) => {
			window.addEventListener('load', resolve);
		}),
		new Promise((resolve) => {
			document.addEventListener('DOMContentLoaded', resolve);
		}),
	])
		.then(() => {
			root.render(<VMVService />);
		});
})(window, window.document);
