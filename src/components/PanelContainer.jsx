import React from 'react';
import Panel from './Panel';
import { connect } from "react-redux";
import { CSSTransitionGroup } from 'react-transition-group';

class PanelContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	renderPanels(panels) {
		return panels && panels.map(panel => {
			return (
				<Panel id={panel.id}
				       key={panel.id}
				       description={panel.description}
				       name={panel.name}
				       thumbnailId={panel.thumbnailId}/>
			);
		})
	}

	render() {
		return (
			<div className="panelContainer">
				<CSSTransitionGroup transitionName="panel" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{this.renderPanels(this.props.panels)}
				</CSSTransitionGroup>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	panels: state.panels
}}


export default connect(mapStateToProps, null)(PanelContainer);