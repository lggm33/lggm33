"use client"

import React, {useState} from "react"
import data from "../lib/data"
import Reveal from "./animation/Reveal"

const Experience = () => {
	const [activeExp, setActiveExp] = useState(0)

	const expDetail = data?.experiences[activeExp]

	return (
		<section className='py-12 laptop:py-24 bg-[#FBFBFB] dark:bg-secondary/90'>
			<div className='container space-y-6 laptop:space-y-12'>
				<div className='text-center space-y-2'>
					<Reveal width='100%'>
						<p className='text-base font-normal text-secondary dark:text-white'>Career</p>
					</Reveal>
					<Reveal width='100%'>
						<h2 className='text-2xl laptop:text-3xl font-bold text-secondary dark:text-white'>Experiences</h2>
					</Reveal>
				</div>

				<div className='grid grid-cols-1 laptop:grid-cols-4 gap-5 laptop:gap-10'>
					<div className='col-span-1'>
						<div className='space-y-1'>
							{data?.experiences.map((exp, index) => (
								<Reveal width='100%' key={index}>
									<button onClick={() => setActiveExp(index)} className={`text-lg font-normal px-4 py-2 rounded-lg w-full flex items-center justify-between transition-all duration-300 ${index === activeExp ? "bg-primary/5 text-primary shadow-sm" : "text-secondary dark:text-white"}`}>
										<span> {exp.company}</span>

										{index === activeExp && (
											<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
												<path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
											</svg>
										)}
									</button>
								</Reveal>
							))}
						</div>
					</div>

					<div className='laptop:col-span-3 rounded-lg p-6 space-y-6 transition-all duration-300 bg-white dark:bg-secondary'>
						<div className='space-y-2'>
							<Reveal width='100%'>
								<h2 className='text-xl font-medium text-secondary dark:text-white'>{expDetail.title}</h2>
							</Reveal>

							<Reveal width='100%'>
								<p className='text-base font-normal text-secondary dark:text-white/70'>{expDetail.location}</p>
							</Reveal>
						</div>
						<div className='space-y-4'>
							<Reveal width='100%'>
								<p className='text-base font-normal text-secondary dark:text-white'>{expDetail.period}</p>
							</Reveal>
							<div className='flex gap-2'>
								{expDetail.technologies.map((tech) => (
									<Reveal key={tech}>
										<p className='text-primary px-3 py-2 rounded-md border border-primary/20 text-xs font-normal leading-none hover:bg-primary/10 transition-all duration-300 cursor-default'>{tech}</p>
									</Reveal>
								))}
							</div>
						</div>

						<div className='space-y-2 border-t border-gray-200 pt-6 list-disc list-inside list-primary'>
							{expDetail.points.map((point, index) => (
								<Reveal width='100%' key={index}>
									<p className='marker:text-gray-300 text-base font-normal text-secondary dark:text-white/70 relative before:content-[""] before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-gray-300 before:dark:bg-gray-400  pl-6'>{point}</p>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
