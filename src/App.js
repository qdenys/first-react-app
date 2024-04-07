import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
	return (
			<div className="wrapper">
				<Header/>
				<div className="page">
					<Sidebar/>
					<Main/>
				</div>
				<Footer/>
			</div>
	);
}

export default App;
