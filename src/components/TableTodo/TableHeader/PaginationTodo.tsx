"use client";

function PaginationTodo({ handleNextClick, handlePrevClick, page ,totalPages  }:{
	handleNextClick: () => void
	handlePrevClick: () => void
	page: number
	totalPages:number
}) {
	return (
		<div className="items-center space-y-2 text-md sm:space-y-0 sm:space-x-3 sm:flex">
			<span className="block">Page {page} of { totalPages }</span>
			<div className="space-x-1">
				<button
					title="previous"
					type="button"
					onClick={handlePrevClick}
					disabled={page === 1}
					className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow">
					<svg
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-4">
						<polyline points="15 18 9 12 15 6" />
					</svg>
				</button>
				<button
					title="next"
					type="button"
					onClick={handleNextClick}
					disabled={page === totalPages}
					className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow">
					<svg
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-4">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>
			</div>
		</div>
	);
}

export default PaginationTodo;
