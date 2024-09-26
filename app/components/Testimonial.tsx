"use client"

import React, {useRef} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import data from "../lib/data"

// import required modules
import {Autoplay, Navigation, Pagination} from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Reveal from "./animation/Reveal"

const Testimonial = () => {
	const progressCircle = useRef(null)
	const progressContent = useRef(null)
	const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
		if (progressCircle) {
			// @ts-ignore
			progressCircle.current.style.setProperty("--progress", 1 - progress)
			// @ts-ignore
			progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
		}
	}

	return (
		<section className='py-12 laptop:py-24 bg-[#FBFBFB] dark:bg-secondary/90'>
			<div className='container space-y-6 laptop:space-y-12 relative'>
				<div className='text-center space-y-2'>
					<Reveal width='100%'>
						<p className='text-base font-normal text-secondary dark:text-white'>Inspirations</p>
					</Reveal>
					<Reveal width='100%'>
						<h2 className='text-2xl laptop:text-3xl font-bold text-secondary dark:text-white'>Testimonials</h2>
					</Reveal>
				</div>

				<div className='w-full laptop:w-2/3 mx-auto relative' id='testimonial'>
					<Reveal width='100%'>
						<Swiper
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
							}}
							speed={1000}
							slidesPerView={1}
							pagination={{
								clickable: true,
							}}
							spaceBetween={40}
							modules={[Autoplay, Pagination]}
							onAutoplayTimeLeft={onAutoplayTimeLeft}
							className='w-full'
						>
							{data?.testimonials.map((item, index) => (
								<SwiperSlide key={index}>
									<div key={index} className='w-full py-20'>
										<div className='bg-white dark:bg-secondary rounded-lg relative'>
											<svg className='h-16 laptop:h-32 w-16 laptop:w-32 absolute -top-8 laptop:-top-16 -left-1 fill-primary/50 stroke-[40px] dark:fill-secondary stroke-[#FBFBFB] dark:stroke-slate-500' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M 676 250C 676 250 726 250 726 250C 795 250 851 307 851 375C 850 458 852 527 851 600C 851 650 828 678 804 704C 777 731 742 750 700 750C 700 750 639 750 639 750C 612 750 600 737 600 715C 600 701 600 699 600 686C 600 663 615 650 638 650C 638 650 700 650 700 650C 708 650 723 644 733 633C 744 623 750 609 750 600C 750 591 750 581 750 573C 750 560 740 550 725 550C 725 550 700 550 700 550C 700 550 676 550 676 550C 608 550 551 493 551 425C 551 425 551 375 551 375C 551 307 608 250 676 250C 676 250 676 250 676 250M 275 250C 275 250 325 250 325 250C 393 250 450 307 450 375C 448 458 451 527 450 600C 450 650 427 678 403 704C 376 731 340 750 299 750C 299 750 237 750 237 750C 211 750 199 737 199 715C 198 701 199 699 199 686C 199 663 214 650 237 650C 237 650 299 650 299 650C 307 650 321 644 332 633C 343 623 349 609 349 600C 349 591 349 581 349 573C 349 560 339 550 324 550C 324 550 299 550 299 550C 299 550 275 550 275 550C 207 550 150 493 150 425C 150 425 150 375 150 375C 150 307 207 250 275 250C 275 250 275 250 275 250'
													transform='rotate(180,500,500)'
												/>
											</svg>

											<Image src={item.image} height='400' width='400' className='w-40 h-40 border-[10px] border-[#FBFBFB] dark:border-slate-700 absolute -top-10 left-1/2 -translate-x-1/2 rounded-full -translate-y-10 object-cover object-center' alt='Profile Picture' />

											<div className='space-y-4 p-8 laptop:p-20 !pt-28'>
												<div className='text-center space-y-2'>
													<Reveal width='100%'>
														<h6 className='inline text-xl font-semibold text-primary text-center relative'>
															{item.author}
															<a href={item.link} className='absolute -right-8 top-1 cursor-pointer'>
																<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-4 h-4 text-secondary dark:text-white opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300'>
																	<path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244' />
																</svg>
															</a>
														</h6>
													</Reveal>
													<Reveal width='100%'>
														<p className='text-sm font-medium text-secondary dark:text-white/50'>{item.position}</p>
													</Reveal>
												</div>
												<Reveal width='100%'>
													<div className='text-base font-normal text-secondary dark:text-white/70 text-center'>{item.description}</div>
												</Reveal>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}

							<div className='autoplay-progress' slot='container-end'>
								<svg viewBox='0 0 48 48' ref={progressCircle}>
									<circle cx='24' cy='24' r='20' fill='text-gray-200'></circle>
								</svg>
								<span ref={progressContent}></span>
							</div>
						</Swiper>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

export default Testimonial
