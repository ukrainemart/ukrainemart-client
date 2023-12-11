export function useFormatDate(date: Date | string) {
  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) {
      return 'Invalid Date';
    }
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const day = String(parsedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
