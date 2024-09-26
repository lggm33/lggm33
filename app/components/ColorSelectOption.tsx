"use client"

import React, {useEffect, useState} from "react"
import Reveal from "./animation/Reveal"

const ColorSelectOption = () => {
	const PRIMARY_NAME = "swift-portfo-primary-color"

	const [showOption, setShowOption] = useState(false)

	const [primaryColor, setPrimaryColor] = useState<string>("")

	const updateCssVariables = (primaryColor: string) => {
		setPrimaryColor(primaryColor)
		document.documentElement.style.setProperty("--color-primary", primaryColor)
	}

	const handleColorChange = (color: string) => {
		setPrimaryColor(color)
		window.localStorage.setItem(PRIMARY_NAME, color)
		updateCssVariables(color)
	}

	useEffect(() => {
		// localStorage value
		let lsPrimaryColor = window.localStorage.getItem(PRIMARY_NAME)

		if (lsPrimaryColor) updateCssVariables(lsPrimaryColor)
	}, [])

	if (process.env.NEXT_PUBLIC_SHOW_THEME_OPTION === "false") {
		return null
	}

	return (
		<div className={`fixed bottom-20 laptop:bottom-auto laptop:top-1/2 laptop:-translate-y-1/2 z-40 transition-all duration-300 settings-wrapper right-0`} id='settings'>
			<button type='button' onClick={() => setShowOption(!showOption)} className='h-12 w-12 mx-auto rounded-full text-white shrink-0 bg-primary flex items-center justify-center shadow'>
				<svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' className='h-6 w-6' xmlns='http://www.w3.org/2000/svg'>
					<path d='M430.1 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 12-36.6.1-47.7zM120 216c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm40 126c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-161c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm72 219c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm24-208c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'></path>
				</svg>
			</button>

			<div className={`transition-all duration-300 ${showOption ? "h-auto" : "h-0 overflow-hidden"}`}>
				<Reveal>
					<div className='p-2'>
						<div className='bg-white rounded-full px-3 py-4 shadow-md w-auto space-y-2'>
							<div className='space-y-1'>
								<ul className='space-y-4'>
									<Reveal>
										<li>
											<button data-color='16 185 129' onClick={() => handleColorChange("16 185 129")} className='h-8 w-8 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center text-white'>
												{primaryColor == "16 185 129" && (
													<Reveal duration={0.25} delay={0}>
														<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24'>
															<path fill='currentColor' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'></path>
														</svg>
													</Reveal>
												)}
											</button>
										</li>
									</Reveal>
									<Reveal>
										<li>
											<button data-color='99 102 241' onClick={() => handleColorChange("99 102 241")} className='h-8 w-8 rounded-full bg-[rgb(99,102,241)] flex justify-center items-center text-white'>
												{primaryColor == "99 102 241" && (
													<Reveal duration={0.25} delay={0}>
														<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24'>
															<path fill='currentColor' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'></path>
														</svg>
													</Reveal>
												)}
											</button>
										</li>
									</Reveal>
									<Reveal>
										<li>
											<button data-color='52 152 219' onClick={() => handleColorChange("52 152 219")} className='h-8 w-8 rounded-full bg-[rgb(52,152,219)] flex justify-center items-center text-white'>
												{primaryColor == "52 152 219" && (
													<Reveal duration={0.25} delay={0}>
														<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24'>
															<path fill='currentColor' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'></path>
														</svg>
													</Reveal>
												)}
											</button>
										</li>
									</Reveal>
								</ul>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	)
}

export default ColorSelectOption
