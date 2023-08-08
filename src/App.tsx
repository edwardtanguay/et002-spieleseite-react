import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PagePreislistePR3 } from './pages/PagePreislistePR3';
import { PageBedarfsrechnerPR3 } from './pages/PageBedarfsrechnerPR3';


function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<nav>
				<ul>
					<li className="dropdown">
						<a href="#" className="dropbtn">Port Royale 3</a>
						<div className="dropdown-content">
							<NavLink to="/preislistePR3">Preisliste</NavLink>
							<NavLink to="/bedarfsrechnerPR3">Bedarfsrechner</NavLink>
						</div>
					</li>
					<li className="dropdown">
						<a href="#" className="dropbtn">Patrizier 4</a>
						<div className="dropdown-content">
						</div>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/preislistePR3" element={<PagePreislistePR3 />} />
				<Route path="/bedarfsrechnerPR3" element={<PageBedarfsrechnerPR3 />} />
				<Route path="/" element={<Navigate to="/preislistePR3" replace />} />
			</Routes>
		</div>
	);
}

export default App;
