import { Inter, Playfair_Display, Raleway } from 'next/font/google'

export const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const playfairDisplayItalic = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair-italic',
	weight: ['400', '500', '600', '700', '800', '900'],
	style: ['italic'],
})

export const raleway = Raleway({
	subsets: ['latin'],
	variable: '--font-raleway',
	weight: ['300', '400', '500', '600', '700', '800', '900'],
})
