import React from 'react'

function Button({ onClick, children, color, value }) {
    const outlineClass = (value = "close"
		? "outline-solid outline-2 outline-gray-500"
		: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150");

  return (
		<span
			className= {`text-${color}-500 bg-transparent border border-solid border-${color}-500 hover:bg-${color}-600 hover:text-white active:bg-${color}-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150`}
			type="button"
			onClick={onClick}>
			{" "}
			{children}{" "}
		</span>

        
  );
}

export default Button