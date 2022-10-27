import React from 'react'
import ContentBox from '../common/ContentBox'
import DivisionSection from './DivisionSection';
import NameSection from './NameSection';
import ProfilePictureSection from './ProfilePictureSection';

interface ProfileBoxProps {
	followerCount : number;
	followingCount : number;
	name : string;
	username : string;
	isUserApproved : boolean;
	tier : string;
	lp : number;
	profilePictureSrc : string;
}

const ProfileBox = ({ followerCount, followingCount, name, username, isUserApproved, tier, lp, profilePictureSrc } : ProfileBoxProps) => {
  return (
	<ContentBox>
		<div className="flex flex-col gap-y-3">
			<div id="upper-profile-box-row" className="flex flex-row gap-x-5 items-center">
				<ProfilePictureSection
					profilePictureSrc={profilePictureSrc}
				/>
				<NameSection
					name={name}
					username={username}
					isUserApproved={isUserApproved}
				/>
				<DivisionSection
					tier={tier}
					lp={lp}
				/>
			</div>
			<div id="lower-profile-box-row" className="flex flex-row gap-x-4">
				<span>
					<b>{followerCount}</b> Followers
				</span>
				<span>
					<b>{followingCount}</b> Following
				</span>
			</div>

		</div>
	</ContentBox>
  )
}

export default ProfileBox