"use client";

function PaginationTodo() {
	return (
		<div
			className="items-center space-y-2 text-md sm:space-y-0 sm:space-x-3 sm:flex">
			<span className="block">Page 2 of 4</span>
			<div className="space-x-1">
				<button
					title="previous"
					type="button"
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
