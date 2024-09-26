import React from "react"
import data from "../lib/data"
import Reveal from "./animation/Reveal"

const Cta = () => {
	return (
		<section className='py-12 laptop:py-24 bg-[#FBFBFB] dark:bg-secondary/90'>
			<div className='container space-y-12'>
				<div className='text-center space-y-2'>
					<Reveal width='100%'>
						<p className='text-base font-normal text-secondary dark:text-white'>CTA</p>
					</Reveal>
					<Reveal width='100%'>
						<h2 className='text-2xl laptop:text-3xl font-bold text-secondary dark:text-white'>Work Together</h2>
					</Reveal>
				</div>

				<div className='bg-gradient-to-b from-primary/60 to-primary rounded-lg p-8 laptop:p-20 flex flex-col gap-10 items-center relative overflow-hidden'>
					<div className='space-y-6 text-center'>
						<Reveal width='100%'>
							<h2 className='text-2xl laptop:text-4xl font-extrabold text-white'>{data?.cta?.title}</h2>
						</Reveal>
						<Reveal width='100%'>
							<p className='text-base font-normal text-white w-full laptop:w-3/5 mx-auto'>{data?.cta?.detail}</p>
						</Reveal>
					</div>

					<div className='text-center relative z-10'>
						<Reveal>
							<a href={data?.cta?.marketplace_link} target='_blank' className='px-6 py-3 rounded-lg text-primary bg-white text-base font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 select-none block'>
								Hire Me
							</a>
						</Reveal>
					</div>

					<div className='h-48 w-48 laptop:h-60 laptop:w-60 rounded-full bg-gradient-to-b from-white/50 to-primary/40 absolute -bottom-20 -right-20'></div>
				</div>
			</div>
		</section>
	)
}

export default Cta
