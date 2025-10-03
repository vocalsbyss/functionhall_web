import React from 'react'

interface EventCardProps {
	title: string
	description: string
	date?: string | Date | null
}

const formatDate = (dateInput?: string | Date | null) => {
	if (!dateInput) return null
	const d = dateInput instanceof Date ? dateInput : new Date(dateInput)
	if (Number.isNaN(d.getTime())) return null
	try {
		const formatted = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(d)
		return { iso: d.toISOString(), formatted }
	} catch {
		return { iso: d.toISOString(), formatted: d.toLocaleString() }
	}
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date }) => {
	const formatted = formatDate(date)

	return (
		<article className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-700 mb-2">{description}</p>
			{formatted ? (
				<time dateTime={formatted.iso} className="text-gray-500 text-sm">
					{formatted.formatted}
				</time>
			) : (
				<p className="text-gray-500 text-sm">Date TBD</p>
			)}
		</article>
	)
}

export default EventCard
