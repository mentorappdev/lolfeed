import React from 'react'
import Image from 'next/image';

interface DivisionSectionProps {
	tier : string;
	lp : number;
}

const DivisionSection = ({tier, lp} : DivisionSectionProps) => {

	const isAboveDiamond = () => {
		//TODO: check if the user is above diamond
		//if yes return true, else false;
		return true;
	}

	const getImageSrc = (tier : string) => {
		return;
	}

	return (
		<div className="flex flex-col items-center">
			<Image
				src={`/images/Tier Images/${tier}.png`}
				alt="league-image-picture"
				height={50}
				width={50}
			/>
			<div className="font-semibold">
				{`${lp} LP`}
			</div>

		</div>
  	);	
}

export default DivisionSection