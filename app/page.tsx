import About from "./components/About"
import Service from "./components/Service"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Blog from "./components/Blog"
import Testimonial from "./components/Testimonial"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Cta from "./components/Cta"

export default function Home() {
	return (
		<main className=''>
			<About />

			<Service />

			<Portfolio />

			<Experience />

			<Education />

			<Testimonial />

			<Blog />

			<Cta />

			<Contact />
		</main>
	)
}
