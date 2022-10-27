import { PropsWithChildren } from 'react';

interface IconProps {
    color : string
    size : string
}

const BaseIcon = ({children, color, size} : PropsWithChildren<IconProps>) => {
    return (<svg style={{width:`${size}px`, height:`${size}px`}} viewBox={`0 0 24 24`}>{children}</svg>);
}

const LeftArrowIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
            <path fill={color} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </BaseIcon>
    ); 
}

const HomeVariantIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill="currentColor" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />
		</BaseIcon>
	); 
}

const HomeVariantOutlinedIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" />
		</BaseIcon>
	); 
}

const PoundBoxIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M7,18H9L9.35,16H13.35L13,18H15L15.35,16H17.35L17.71,14H15.71L16.41,10H18.41L18.76,8H16.76L17.12,6H15.12L14.76,8H10.76L11.12,6H9.12L8.76,8H6.76L6.41,10H8.41L7.71,14H5.71L5.35,16H7.35L7,18M10.41,10H14.41L13.71,14H9.71L10.41,10Z" />
		</BaseIcon>
	); 
}

const PoundBoxOutlinedIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M19 19H5V5H19M19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3M7 9H9.31L9.63 6H11.63L11.31 9H13.31L13.63 6H15.63L15.31 9H17V11H15.1L14.9 13H17V15H14.69L14.37 18H12.37L12.69 15H10.69L10.37 18H8.37L8.69 15H7V13H8.9L9.1 11H7V9M11.1 11L10.9 13H12.9L13.1 11Z" />
		</BaseIcon>
	); 
}

const MessageIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
		</BaseIcon>
	); 
}

const MessageOutlinedIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16Z" />
		</BaseIcon>
	); 
}

const AccountIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
		</BaseIcon>
	); 
}

const AccountOutlinedIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
		</BaseIcon>
	); 
}

const SettingsIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
		</BaseIcon>
	); 
}

const SettingsOutlinedIcon = ({color, size} : IconProps) => {
	return (
		<BaseIcon color={color} size={size}>
			<path fill={color} d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
		</BaseIcon>
	); 
}

export { LeftArrowIcon, HomeVariantIcon, HomeVariantOutlinedIcon, PoundBoxIcon, PoundBoxOutlinedIcon, MessageIcon, MessageOutlinedIcon, AccountIcon, AccountOutlinedIcon, SettingsIcon, SettingsOutlinedIcon };