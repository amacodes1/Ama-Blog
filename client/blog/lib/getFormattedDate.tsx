export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime()) || date.toString() === 'Invalid Date') {
     new Error('Invalid date string: ' + dateString);
  }

  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(undefined);
}
