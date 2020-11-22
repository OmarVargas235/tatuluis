import React from 'react';
import ChangeThemeProvider from './context/ChangeThemeContext';

import './assets/styles/main.scss';
import './assets/bootstrap.min.css';
import 'animate.css';
import 'ol/ol.css';

import Navbar from './components/navbar/';
import Banner from './components/banner/';
import MasterpiecesPage from './components/gallery/MasterpiecesPage';
import WhyWithUsPage from './components/why_with_us/WhyWithUsPage';
import AboutTatuluisPage from './components/about_tatuluis/AboutTatuluisPage';
import ClientsSayPage from './components/clients_say/ClientsSayPage';
import ContactUs from './components/contactUs/ContactUs';
import Whatsapp from './components/btn-whatsapp/';

const App = () => (
	<React.Fragment>
		<ChangeThemeProvider>
			<Navbar />
			<Banner />
			<MasterpiecesPage />
			<WhyWithUsPage />
			<AboutTatuluisPage />
			<ClientsSayPage />
			<ContactUs />
			<Whatsapp />
		</ChangeThemeProvider>
	</React.Fragment>
);

export default App;