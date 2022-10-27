import React, { useState } from 'react'
import ContentBox from '../common/ContentBox'
import { AccountIcon, AccountOutlinedIcon, HomeVariantIcon, HomeVariantOutlinedIcon, MessageIcon, MessageOutlinedIcon, PoundBoxIcon, PoundBoxOutlinedIcon, SettingsIcon, SettingsOutlinedIcon } from '../common/Icon'
import NavigationItem from './NavigationItem'

const NavigationBox = () => {

	const [ selectedItem, setSelectedItem ] = useState<number>();
	const iconColor = "#4F5E6F";
	const iconSize = "32";

	return (
		<ContentBox>
			<ul className="text-2xl">
				<NavigationItem 
					key={"1"}
					title="Home"
					icon={selectedItem !== 1 ? <HomeVariantOutlinedIcon size={iconSize} color={iconColor}/> : <HomeVariantIcon size={iconSize} color={iconColor} />}
					isCurrentPage={selectedItem === 1}
					onClick={() => {
						setSelectedItem(1);
					}}
				/>				
				<NavigationItem 
					key={"2"}
					title="Discover"
					icon={selectedItem !== 2 ? <PoundBoxOutlinedIcon size={iconSize} color={iconColor}/> : <PoundBoxIcon size={iconSize} color={iconColor} />}
					isCurrentPage={selectedItem === 2}
					onClick={() => {
						console.log('2');
						setSelectedItem(2);
					}}
				/>				
				<NavigationItem 
					title="Messages"
					key={"3"}
					icon={selectedItem !== 3 ? <MessageOutlinedIcon size={iconSize} color={iconColor}/> : <MessageIcon size={iconSize} color={iconColor} />}
					isCurrentPage={selectedItem === 3}
					onClick={() => {
						setSelectedItem(3);
					}}
				/>				
				<NavigationItem 
					key={"4"}
					title="Home"
					icon={selectedItem !== 4 ? <AccountOutlinedIcon size={iconSize} color={iconColor}/> : <AccountIcon size={iconSize} color={iconColor} />}
					isCurrentPage={selectedItem === 4}
					onClick={() => {
						setSelectedItem(4);
					}}
				/>				
				<NavigationItem 
					key={"5"}
					title="Settings"
					icon={selectedItem !== 5 ? <SettingsOutlinedIcon size={iconSize} color={iconColor}/> : <SettingsIcon size={iconSize} color={iconColor} />}
					isCurrentPage={selectedItem === 5}
					onClick={() => {
						setSelectedItem(5);
					}}
				/>
			</ul>
		</ContentBox>
	)
}

export default NavigationBox