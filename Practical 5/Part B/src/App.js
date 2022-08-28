import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';

function App() {
  return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/products" element={<Products />} />
					<Route path="/team" element={<Team />} />
					<Route path="/Messages" element={<Messages />} />
					<Route path="/Support" element={<Support />} />
				</Routes>
			</Router>
			<Footer note="Copyrights Reserved &copy; Jekeel Shah (20CS080)" />
		</>
  );
}

export default App;
