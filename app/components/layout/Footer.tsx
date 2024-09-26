import data from "@/app/lib/data"
import React from "react"
import Reveal from "../animation/Reveal"

const Footer = () => {
	return (
		<footer className='pb-12 laptop:pb-0 bg-secondary dark:bg-gray-800'>
			<div className='container py-5'>
				<div className='flex flex-col justify-center items-center gap-4'>
					<Reveal>
						<p className='text-sm laptop:text-base font-medium text-white'>
							© {new Date().getFullYear()} - All Right Reserved By {data?.app_info?.title}
						</p>
					</Reveal>
				</div>
			</div>
		</footer>
	)
}

export default Footer
