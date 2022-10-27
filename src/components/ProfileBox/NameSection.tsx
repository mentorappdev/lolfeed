import React from 'react'

interface NameSectionProps {
	name : string;
	username : string;
	isUserApproved : boolean;
}

//TODO: Use isUserApproved..
const NameSection = ({name, username, isUserApproved} : NameSectionProps) => {
	return (
		<div className="">
			<div id="name-section-name" className="text-2xl font-bold">
				{name}
			</div>
			<div id="name-section-username" className="text-lighttext hover:text-regulartext cursor-pointer">
				{`@${username}`}
			</div>
		</div>
	)
}

export default NameSection