import React from "react"
import data from "../lib/data"
import Reveal from "./animation/Reveal"

const Contact = () => {
	return (
		<section className='py-12 laptop:py-24 bg-[#FBFBFB] dark:bg-secondary/90' id='contact'>
			<div className='container space-y-6 laptop:space-y-12'>
				<div className='text-center space-y-2'>
					<Reveal width='100%'>
						<p className='text-base font-normal text-secondary dark:text-white'>Contact me</p>
					</Reveal>
					<Reveal width='100%'>
						<h2 className='text-2xl laptop:text-3xl font-bold text-secondary dark:text-white'>Get in Touch</h2>
					</Reveal>
				</div>

				<div className='grid grid-cols-1 laptop:grid-cols-3 gap-6 laptop:gap-10'>
					<div className='col-span-1 space-y-3 laptop:space-y-6'>
						<div className='bg-white dark:bg-secondary drop-shadow rounded-lg p-4'>
							<Reveal width='100%'>
								<div className='flex gap-6'>
									<div className='w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center'>
										<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
										</svg>
									</div>
									<div className='space-y-1'>
										<Reveal width='100%'>
											<h4 className='text-base font-semibold text-secondary dark:text-white'>Address</h4>
										</Reveal>
										<Reveal width='100%'>
											<p className='text-base font-normal text-secondary dark:text-white/70'>{data?.contact.address}</p>
										</Reveal>
									</div>
								</div>
							</Reveal>
						</div>
						<div className='bg-white dark:bg-secondary drop-shadow rounded-lg p-4'>
							<Reveal width='100%'>
								<div className='flex gap-6'>
									<div className='w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center'>
										<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
									<div className='space-y-1'>
										<Reveal width='100%'>
											<h4 className='text-base font-semibold text-secondary dark:text-white'>Phone</h4>
										</Reveal>
										<Reveal width='100%'>
											<p className='text-base font-normal text-secondary dark:text-white/70'>{data?.contact.phone}</p>
										</Reveal>
									</div>
								</div>
							</Reveal>
						</div>
						<div className='bg-white dark:bg-secondary drop-shadow rounded-lg p-4'>
							<Reveal width='100%'>
								<div className='flex gap-6'>
									<div className='w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center'>
										<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289M3.29289 5.29289L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29289' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
										</svg>
									</div>
									<div className='space-y-1'>
										<Reveal width='100%'>
											<h4 className='text-base font-semibold text-secondary dark:text-white'>Email</h4>
										</Reveal>
										<Reveal width='100%'>
											<p className='text-base font-normal text-secondary dark:text-white/70'>{data?.contact.mail}</p>
										</Reveal>
									</div>
								</div>
							</Reveal>
						</div>
					</div>

					<div className='col-span-1 laptop:col-span-2'>
						<Reveal width='100%'>
							<iframe src={data?.contact?.map_location} className='border-0 h-96 w-full rounded-lg' allowFullScreen={true} loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
