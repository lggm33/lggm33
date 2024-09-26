import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import data from "./lib/data"
import MobileMenu from "./components/layout/MobileMenu"
import ColorSelectOption from "./components/ColorSelectOption"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
	title: data?.app_info?.title,
	description: data?.app_info?.description,
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<MobileMenu />

				{children}

				<Footer />

				<ColorSelectOption />
			</body>
		</html>
	)
}
