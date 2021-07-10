import React from "react"
import { Button, FormControl } from "react-bootstrap"

const SearchField = () => {
	return (
		<div className="d-flex mb-5 align-items-center">
			<div className="searchField__wrapper col">
				<FormControl
					className="searchField__input"
					placeholder="Product Designer"
				/>
				<svg
					width="15"
					height="15"
					className="searchField__icon"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0)">
						<path
							d="M14.9999 6.5C14.4479 6.5 13.9999 6.052 13.9999 5.5V4H9.99991V5.5C9.99991 6.052 9.55191 6.5 8.99991 6.5C8.44791 6.5 7.99991 6.052 7.99991 5.5V4C7.99991 2.897 8.89691 2 9.99991 2H13.9999C15.1029 2 15.9999 2.897 15.9999 4V5.5C15.9999 6.052 15.5519 6.5 14.9999 6.5Z"
							fill="#5A5A67"
						/>
						<path
							d="M12.71 15.38C12.53 15.45 12.27 15.5 12 15.5C11.73 15.5 11.47 15.45 11.23 15.36L0 11.62V19.25C0 20.77 1.23 22 2.75 22H21.25C22.77 22 24 20.77 24 19.25V11.62L12.71 15.38Z"
							fill="#5A5A67"
						/>
						<path
							d="M24 7.75V10.04L12.24 13.96C12.16 13.99 12.08 14 12 14C11.92 14 11.84 13.99 11.76 13.96L0 10.04V7.75C0 6.23 1.23 5 2.75 5H21.25C22.77 5 24 6.23 24 7.75Z"
							fill="#5A5A67"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className="searchField__wrapper col">
				<FormControl
					className="searchField__input"
					placeholder="Product Designer"
				/>
				<svg
					className="searchField__icon"
					width="12"
					height="17"
					viewBox="0 0 18 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9 0C4.20726 0 0.308105 3.89916 0.308105 8.69184C0.308105 14.6397 8.0865 23.3715 8.41767 23.7404C8.72873 24.0868 9.27182 24.0862 9.58232 23.7404C9.9135 23.3715 17.6919 14.6397 17.6919 8.69184C17.6918 3.89916 13.7927 0 9 0ZM9 13.065C6.58865 13.065 4.62693 11.1032 4.62693 8.69184C4.62693 6.2805 6.5887 4.31878 9 4.31878C11.4113 4.31878 13.373 6.28055 13.373 8.69189C13.373 11.1032 11.4113 13.065 9 13.065Z"
						fill="#5A5A67"
					/>
				</svg>
			</div>
			<Button variant="success">
				<svg
					width="15"
					height="15"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M29.0415 27.3252L21.9015 19.8992C23.7373 17.7169 24.7432 14.971 24.7432 12.1125C24.7432 5.43377 19.3094 0 12.6307 0C5.95196 0 0.518188 5.43377 0.518188 12.1125C0.518188 18.7912 5.95196 24.225 12.6307 24.225C15.138 24.225 17.5273 23.4687 19.5701 22.0331L26.7644 29.5155C27.0651 29.8278 27.4695 30 27.9029 30C28.3132 30 28.7024 29.8436 28.9978 29.5592C29.6256 28.9552 29.6456 27.9535 29.0415 27.3252ZM12.6307 3.15978C17.5673 3.15978 21.5834 7.17586 21.5834 12.1125C21.5834 17.0491 17.5673 21.0652 12.6307 21.0652C7.69405 21.0652 3.67797 17.0491 3.67797 12.1125C3.67797 7.17586 7.69405 3.15978 12.6307 3.15978Z"
						fill="white"
					/>
				</svg>
			</Button>
		</div>
	)
}
const placeholderComponent = <div></div>
export default SearchField
