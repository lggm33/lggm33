"use client"

import Image from "next/image"
import Link from "next/link"
import React, {useRef} from "react"
import data from "../lib/data"
import Reveal from "./animation/Reveal"
import useHover3d from "../utils/useHover3d.js"

const About = () => {
	const hero = useRef<HTMLDivElement>(null)

	const hoverHero = useHover3d(hero, {
		x: 30,
		y: -40,
		z: 30,
	})

	const imageHover = useHover3d(hero, {
		x: 20,
		y: -5,
		z: 11,
	})

	return (
		<section className='py-10 laptop:py-20 bg-white dark:bg-secondary' id='about' ref={hero}>
			<div className='container'>
				<div className='grid grid-cols-1 laptop:grid-cols-2 items-center gap-10 laptop:gap-20'>
					<div className='order-2 laptop:order-1 space-y-5 laptop:space-y-7'>
						<Reveal>
							<h5 className='text-base font-normal text-secondary dark:text-white relative'>Hi there. I&apos;m... </h5>
						</Reveal>
						<Reveal>
							<h1 className='text-5xl font-bold text-secondary dark:text-white'>
								{data?.about?.first_name} <span className='text-primary'>{data?.about?.last_name}</span>
							</h1>
						</Reveal>

						<Reveal>
							<p className='text-base font-normal text-secondary dark:text-white'>{data?.about?.info}</p>
						</Reveal>

						<Reveal>
							<ul className='flex items-center gap-4'>
								{data?.about?.socials.map((social, index) => (
									<li key={index}>
										<Link href={social?.link} target="_blank" rel="noopener noreferrer" className='h-10 w-10 text-secondary dark:text-white hover:bg-primary hover:text-white rounded-full transition-all duration-300 opacity-50 hover:opacity-100 inline-block'>
											<span dangerouslySetInnerHTML={{__html: social?.icon}}></span>
										</Link>
									</li>
								))}
							</ul>
						</Reveal>
					</div>

					<div className='order-1 laptop:order-2'>
						<div
							className='h-[350px] laptop:h-[400px] w-10/12 tablet:w-6/12 laptop:w-80 mx-auto relative group hover:transition-all duration-300'
							style={{
								transform: hoverHero.transform,
							}}
						>
							<div className='h-full w-full rounded-lg bg-primary/30 dark:bg-slate-600/90 transform rotate-6 absolute inset-0 block transition-all duration-300 backdrop-blur-sm'></div>
							<div className='h-full w-full rounded-lg bg-primary/30 dark:bg-slate-600/90 transform -rotate-6 absolute inset-0 block transition-all duration-300 backdrop-blur-sm'></div>
							<Image
								src={data?.about?.image}
								className='h-full w-full rounded-lg object-cover object-center z-10 relative'
								style={{
									transform: imageHover.transform,
								}}
								height={600}
								width={400}
								priority={true}
								alt={data?.about?.first_name + " " + data?.about?.last_name}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
