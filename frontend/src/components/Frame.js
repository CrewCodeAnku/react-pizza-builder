import React from 'react'

const Frame = (props) => {
	return (
		<img
			className={props.clsName}
			id="frame"
			alt="images"
			src={props.frame}
			// src={minion4}
		/>
	)
}
export default Frame;

