import React from 'react'
import Image from 'next/image';

interface ProfilePictureSectionProps{
	profilePictureSrc : string;
}

const ProfilePictureSection = ({profilePictureSrc} : ProfilePictureSectionProps) => {
	return (
		<Image
			src={profilePictureSrc}
			alt="profile-picture"
			height={80}
			width={80}
			className="rounded-full"
		/>
	)
}

export default ProfilePictureSection