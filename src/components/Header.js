import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<header className="header"><h2>Header</h2></header>
		)
	}
}


export default Header;