"use client"

import React, {useEffect, useRef} from "react"
import {motion, useAnimation, useInView} from "framer-motion"

const Reveal = ({children, width = "fit-content", duration = 0.5, delay = 0.25}: any) => {
	const revealRef = useRef(null)
	const isInView = useInView(revealRef, {once: true})

	const wrapperControls = useAnimation()

	useEffect(() => {
		if (isInView) {
			wrapperControls.start("visible")
		}
	}, [isInView, wrapperControls])

	return (
		<div ref={revealRef} className='p-0.5' style={{position: "relative", width, overflow: "hidden"}}>
			<motion.div
				variants={{
					hidden: {opacity: 0, y: 75},
					visible: {opacity: 1, y: 0},
				}}
				initial='hidden'
				animate={wrapperControls}
				transition={{duration, delay}}
			>
				{children}
			</motion.div>
		</div>
	)
}

export default Reveal
