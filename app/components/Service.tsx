import React from "react"
import data from "../lib/data"
import Reveal from "./animation/Reveal"

const Service = () => {
	return (
		<section className='py-12 laptop:py-24 bg-[#FBFBFB] dark:bg-secondary/90' id='services'>
			<div className='container space-y-12'>
				<div className='space-y-2'>
					<Reveal width='100%'>
						<p className='text-base font-normal text-secondary dark:text-white text-center'>Services</p>
					</Reveal>
					<Reveal width='100%'>
						<h2 className='text-2xl laptop:text-3xl font-bold text-secondary dark:text-white text-center'>Specialized in</h2>
					</Reveal>
				</div>

				<div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6'>
					{data?.services.map((service) => (
						<Reveal key={service.title}>
							<div className='col-span-1'>
								<div className='bg-white dark:bg-secondary rounded-lg p-6 laptop:p-12 space-y-5 hover:shadow-md transition-all duration-300'>
									<Reveal width='100%'>
										<div className='h-14 w-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center'>
											<span dangerouslySetInnerHTML={{__html: service?.icon}} className='h-6 w-6 text-primary'></span>
										</div>
									</Reveal>

									<div className='space-y-2 text-center'>
										<Reveal width='100%'>
											<h4 className='text-lg font-semibold text-secondary dark:text-white'>{service?.title}</h4>
										</Reveal>
										<Reveal width='100%'>
											{" "}
											<p className='text-base font-normal text-secondary dark:text-white line-clamp-3'>{service?.description}</p>
										</Reveal>
									</div>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}

export default Service
