import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navigation/navbar'
import '@/styles/colors.css'
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
import { playfairDisplayItalic, raleway } from './fonts'

export const metadata: Metadata = {
	title: 'Tibeb Ethiopia',
	description: 'Where everyone is welcome and everything is possible',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${playfairDisplayItalic.variable} ${raleway.variable}`}
		>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
