"use client"

import data from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"
import React, {useEffect, useState} from "react"
import Reveal from "../animation/Reveal"

const MobileMenu = () => {
	const [showMenu, setShowMenu] = useState(false)

	const [isDarkMood, setIsDarkMood] = useState(false)

	const navigateHome = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	useEffect(() => {
		const mode = localStorage.getItem("swift-portfo-darkMood") === "dark"

		if (mode) {
			setIsDarkMood(true)
		} else {
			setIsDarkMood(false)
		}
	}, [isDarkMood, showMenu])

	return (
		<>
			<aside className={`relative z-50 laptop:hidden transition-all duration-200 ease-in-out ${showMenu ? "visible opacity-100" : "invisible opacity-0"}`}>
				<div onClick={() => setShowMenu(!showMenu)} className='fixed h-[calc(100dvh-55px)] inset-0 w-full bg-secondary/60 z-40' />
				<div className={`fixed h-[calc(100dvh-55px)] left-0 top-0 bottom-0 bg-white dark:bg-secondary z-40 transition-all duration-300 ${showMenu ? "translate-x-0 w-3/4" : "-translate-x-100 w-0"}`}>
					<Link href={"/"} className='p-3 border-b border-gray-300 block'>
						<Image src={isDarkMood ? data?.app_info?.light_logo : data?.app_info?.dark_logo} className='h-12 w-auto' priority={true} height={50} width={200} alt={data?.app_info?.title} />
					</Link>
					<ul className='flex flex-col gap-6 p-5'>
						{data?.menus?.map((menu) => (
							<li key={menu?.name}>
								<Reveal width='100%'>
									<Link href={menu?.link} onClick={() => setShowMenu(false)} className='text-base font-medium text-secondary dark:text-white hover:text-primary transition-all duration-300'>
										{menu?.name}
									</Link>
								</Reveal>
							</li>
						))}
					</ul>
				</div>
			</aside>

			<div className='fixed bottom-0 left-0 right-0 bg-white dark:bg-secondary py-2 z-20 drop-shadow laptop:hidden'>
				<Reveal width='100%'>
					<ul className='container flex items-center justify-between'>
						<li>
							<button onClick={() => setShowMenu(!showMenu)} className='text-xs font-medium text-secondary dark:text-white/70 hover:text-primary flex flex-col justify-center items-center gap-1'>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
									<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5' />
								</svg>
								Menu
							</button>
						</li>
						<li>
							<button onClick={navigateHome} className='text-xs font-medium text-secondary dark:text-white/70 hover:text-primary flex flex-col justify-center items-center gap-1'>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
									<path strokeLinecap='round' strokeLinejoin='round' d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
								</svg>
								Home
							</button>
						</li>
						<li>
							<a href={data?.about?.resume_link} download className='text-xs font-medium text-secondary dark:text-white/70 hover:text-primary flex flex-col justify-center items-center gap-1 rounded-lg  transition-all duration-300 select-none'>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
									<path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' />
								</svg>
								Resume
							</a>
						</li>
					</ul>
				</Reveal>
			</div>
		</>
	)
}

export default MobileMenu
