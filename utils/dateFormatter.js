const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' })

export default function formatDate(date) {
    return formatter.format(date)
}