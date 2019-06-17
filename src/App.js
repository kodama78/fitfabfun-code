import React from 'react';
import { connect } from "react-redux";
import PanelContainer from './components/PanelContainer';
import Thumbnails from './components/Thumbnails';
import { addToPanels } from "./actions";
import './styles/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.addPanel = this.addPanel.bind(this);
	}

	addPanel(item) {
		this.props.addPanel(item)
	}

	render() {
		return (
			<div className="container">
				<PanelContainer />
				<Thumbnails thumbnails={this.props.users} addPanel={this.addPanel} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users,
	panels: state.panels
});

const mapDispatchToProps = dispatch => {
	return {
		addPanel: (panel) => dispatch(addToPanels(panel))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);