import Image from "next/image"
import React from "react"
import data from "../lib/data"
import Reveal from "./animation/Reveal"

const Education = () => {
	return (
		<section className='py-12 laptop:py-24 bg-white dark:bg-secondary'>
			<div className='container space-y-6 laptop:space-y-12'>
				<div className='text-center space-y-2'>
					<Reveal width='100%'>
						<p className='text-base font-normal text-secondary dark:text-white'>Learning</p>
					</Reveal>
					<Reveal width='100%'>
						<h2 className='text-2xl laptop:text-2xl desktop:text-3xl font-bold text-secondary dark:text-white'>Education & Skills</h2>
					</Reveal>{" "}
				</div>

				<div className='grid grid-cols-1 laptop:grid-cols-5 gap-10 laptop:gap-20'>
					<div className='col-span-1 laptop:col-span-2 pl-4 laptop:pl-0'>
						<div className='relative '>
							<div className='h-full w-[1px] bg-gray-200 absolute left-3 top-0 bottom-0'></div>
							<div className='space-y-8'>
								{data?.educations.map((edu, index) => (
									<Reveal width='100%' key={index}>
										<div className='pl-12 relative'>
											<div className='h-6 w-6 bg-primary border-4 border-gray-200 rounded-full absolute left-0 top-1/2 -translate-y-1/2' />

											<div className='bg-white dark:bg-slate-800 drop-shadow p-3 rounded-lg relative'>
												<div className='h-3 w-3 bg-white dark:bg-slate-800 rotate-45 absolute -left-1.5 top-1/2 -translate-y-1/2 rounded-sm' />

												<div className='space-y-2'>
													<h2 className='text-lg font-semibold text-secondary dark:text-white leading-6'>{edu.title}</h2>

													<p className='text-base font-normal text-secondary dark:text-white/70'>
														{edu.degree} - {edu.department}
													</p>

													<p className='text-base font-medium text-secondary dark:text-white !mt-4'>{edu.session}</p>
												</div>
											</div>
										</div>
									</Reveal>
								))}
							</div>
						</div>
					</div>

					<div className='col-span-1 laptop:col-span-3 space-y-6'>
						<Reveal width='100%'>
							<p className='text-base font-normal text-secondary dark:text-white/70'>{data?.about?.experience}</p>
						</Reveal>

						<div className='grid grid-cols-3 laptop:grid-cols-5 gap-4 laptop:gap-6'>
							{data?.skills.map((skill, index) => (
								<Reveal width='100%' key={index}>
									<div className='h-auto w-full bg-white dark:bg-slate-800 drop-shadow rounded-lg flex flex-col gap-3 items-center justify-center px-2 py-4 group'>
										<Image src={skill.img} height={100} width={100} className='laptop:grayscale group-hover:grayscale-0 h-10 w-auto max-w-full max-h-full transition-all duration-300' alt={skill.title} />

										<p className='text-sm font-normal text-secondary dark:text-white'>{skill.title}</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Education
