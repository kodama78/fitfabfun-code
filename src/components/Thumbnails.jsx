import React from 'react';

class Thumbnails extends React.Component {
	constructor(props) {
		super(props);
	}

	renderThumbnails(thumbnailArray) {
		return thumbnailArray.map( item => {
			return (
				<div id={item.id}
				     key={item.id}
				     className="thumbnail"
				     onClick={() => this.props.addPanel(item)}>
					{item.id}
				</div>
			)
		})
	}

	render() {
		return (
			<div className="thumbnailContainer">
				{this.renderThumbnails(this.props && this.props.thumbnails)}
			</div>
		);
	}
}

export default Thumbnails;