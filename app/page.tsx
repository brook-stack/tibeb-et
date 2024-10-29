import React from 'react'
import styles from './page.module.css'
import abstractData from '@/abstract.json'
import { inter, spaceGrotesk, montserrat } from '@/app/fonts'

export default function Home() {
	const { title, subtitle, paragraphs } = abstractData[0]
	const Bold = ({ children }: { children: React.ReactNode }) => {
		return <span className={montserrat.className}>{children}</span>
	}

	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<h1 className={`${styles.title} ${montserrat.className}`}>
					<Bold>
						{title.split('TIBEB').map((part, i) => (
							<React.Fragment key={i}>
								{part.toUpperCase()}
								{i === 0 && (
									<span className={`${styles.tibeb} ${spaceGrotesk.className}`}>
										TIBEB
									</span>
								)}
							</React.Fragment>
						))}
					</Bold>
				</h1>
				<h2 className={`${styles.subtitle} ${spaceGrotesk.className}`}>
					{subtitle.toUpperCase()}
				</h2>
			</div>
			<section className={`${styles.section} ${inter.className}`}>
				{paragraphs.map((paragraph: string | Object, index: number) => (
					<div key={index} className={styles.paragraph}>
						{typeof paragraph === 'string' ? (
							<p>{paragraph}</p>
						) : (
							Object.entries(paragraph).map(([key, value]) => (
								<ul key={key} className={styles.pillars}>
									<li className={styles.listItem}>
										<strong>
											{key}
											{':- '}
										</strong>
										{typeof value === 'string' ? value : JSON.stringify(value)}
									</li>
								</ul>
							))
						)}
					</div>
				))}
			</section>
		</main>
	)
}
