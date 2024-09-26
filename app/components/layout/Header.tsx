"use client"

import data from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"
import React, {useEffect, useState} from "react"
import Reveal from "../animation/Reveal"

const Header = () => {
	const [darkMood, setDarkMood] = useState(false)

	const handleDarkMode = () => {
		setDarkMood(!darkMood)

		if (!darkMood) {
			localStorage.setItem("swift-portfo-darkMood", "dark")
		} else {
			localStorage.removeItem("swift-portfo-darkMood")
		}
	}

	useEffect(() => {
		const html = document.documentElement

		// Use localStorage.getItem("swift-portfo-darkMood") directly as it returns a string
		const mode = localStorage.getItem("swift-portfo-darkMood") === "dark"

		if (mode) {
			html.classList.add("dark")
		} else {
			html.classList.remove("dark")
		}

		setDarkMood(mode)
	}, [darkMood])

	return (
		<header className='sticky top-0 z-20 bg-white dark:bg-gray-800  drop-shadow-sm'>
			<div className='container flex items-center justify-between py-4'>
				<div>
					<Link href={"/"}>
						<Image src={darkMood ? data?.app_info?.light_logo : data?.app_info?.dark_logo} className='h-12 w-auto' height={50} priority={true} width={200} alt={data?.app_info?.title} />
					</Link>
				</div>
				<nav className='hidden laptop:inline-block'>
					<ul className='flex items-center gap-6'>
						{data?.menus?.map((menu) => (
							<li key={menu?.name}>
								<Reveal>
									<Link href={menu?.link} className='text-base font-medium text-secondary dark:text-white hover:text-primary transition-all duration-300'>
										{menu?.name}
									</Link>
								</Reveal>
							</li>
						))}
					</ul>
				</nav>

				<ul className='flex items-center gap-6 pr-2 laptop:pr-0'>
					<li onClick={handleDarkMode} className='h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center'>
						{darkMood ? (
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-secondary  hover:text-primary transition-all duration-300 cursor-pointer select-none'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
							</svg>
						) : (
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-secondary hover:text-primary transition-all duration-300 cursor-pointer select-none'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' />
							</svg>
						)}
					</li>
					<li className='hidden laptop:inline-block'>
						<a href={data?.about?.resume_link} download className='border border-gray-300 px-6 py-2 rounded-lg text-base font-medium text-white bg-gradient-to-r from-primary to-emerald-600 hover:ring-2 hover:ring-emerald-400 transition-all duration-300 select-none'>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
