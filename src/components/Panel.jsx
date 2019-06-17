import React from 'react';

const Panel = (props) => {
	return (
		<div className="panel">
			<div className="imageContainer">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1280px-SNice.svg.png" alt=""/>
			</div>
			<div className="description">
				<h3>{props.name}</h3>
				<span>{props.description}</span>
			</div>
		</div>
	);
}

export default Panel;