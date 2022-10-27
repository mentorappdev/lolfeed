import React from 'react'

interface ContentBoxProps {
	children?: React.ReactNode;
}

const ContentBox : React.FC<ContentBoxProps> = ({ children }) => {
  return (
	<div className="border rounded-xl py-5 px-7 shadow-md min-w-[320px]"> 
		{children}
	</div>
  )
}

export default ContentBox