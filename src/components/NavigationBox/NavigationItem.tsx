interface NavigationItemProps {
	key : string;
	title : string;
	icon : any;
	isCurrentPage : boolean;
	onClick : any;
}

const NavigationItem = ({key, title, icon, isCurrentPage, onClick} : NavigationItemProps) => {

	return (
		<li onClick={onClick} key={key} className={`${isCurrentPage ? 'font-bold' : ''} hover:bg-[#FAFAFA] rounded-2xl px-3 py-3 cursor-pointer flex items-center gap-x-3`}>
			<span>
				{icon}
			</span>
			<span>
				{title}
			</span>
		</li>
	)
}

export default NavigationItem