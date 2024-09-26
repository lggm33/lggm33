"use client"

import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import data from "../lib/data"

// import required modules
import {Autoplay, Navigation} from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Reveal from "./animation/Reveal"

const Portfolio = () => {
	return (
		<section className='py-12 laptop:py-24 bg-white dark:bg-secondary' id='projects'>
			<div className='container space-y-12 relative'>
				<div className='text-center space-y-2'>
					<Reveal width='100%'>
						<p className='text-base font-normal text-secondary dark:text-white'>My Projects</p>
					</Reveal>
					<Reveal width='100%'>
						<h2 className='text-2xl laptop:text-3xl font-bold text-secondary dark:text-white'>Featured Portfolio</h2>
					</Reveal>
				</div>

				<div className='w-full'>
					<Swiper
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						speed={1000}
						slidesPerView={1}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						spaceBetween={40}
						modules={[Autoplay, Navigation]}
						breakpoints={{
							600: {
								slidesPerView: 1.5,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						className='w-full'
					>
						{data?.projects.map((item, index) => (
							<SwiperSlide key={index}>
								<Reveal width='100%'>
									<div key={index} className='bg-white dark:bg-secondary rounded-lg relative border border-gray-200 dark:border-slate-700 dark:shadow-lg overflow-hidden'>
										<Image src={item.image} height='400' width='400' className='w-full h-80 object-cover object-center rounded-lg' alt='Profile Picture' />

										<div className='space-y-2 p-4'>
											<Reveal>
												<h6 className='text-lg font-medium text-secondary dark:text-white'>{item.title}</h6>
											</Reveal>
											<div className='flex items-center justify-between gap-4'>
												<div className='flex gap-2'>
													{item.technologies.map((tech, index) => (
														<Reveal key={tech}>
															<p className='text-primary px-3 py-2 rounded-md border border-primary/20 text-xs font-normal leading-none hover:bg-primary/10 transition-all duration-300 cursor-default'>{tech}</p>
														</Reveal>
													))}
												</div>
												<Reveal>
													<a href={item.link} target="_blank" rel="noopener noreferrer" className='shrink-0 cursor-pointer'>
														<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 text-secondary dark:text-white opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300'>
															<path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244' />
														</svg>
													</a>
												</Reveal>
											</div>
										</div>
									</div>
								</Reveal>
							</SwiperSlide>
						))}

						<div className='relative flex items-center justify-center gap-3 py-12'>
							<button className='swiper-button-prev' name='arrow-back-outline'>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
									<path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
								</svg>
							</button>
							<button className='swiper-button-next' name='arrow-forward-outline'>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
									<path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
								</svg>
							</button>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
