// @poe
export function abbreviateNumber(number: number) {
  const abbreviations = ["", "K", "M", "B", "T"];
  const decimalPlaces = 1;
  // Convert the number to absolute value
  const absNumber = Math.abs(number);
  // Determine the appropriate abbreviation index
  const abbreviationIndex = Math.floor(Math.log10(absNumber) / 3);
  // Calculate the abbreviated value
  const abbreviatedValue = (absNumber / Math.pow(10, abbreviationIndex * 3))
    .toFixed(decimalPlaces)
    .replace(/\.0$/, ""); // Remove trailing '.0' if present
  // Construct the final string with the abbreviation
  const result = `${abbreviatedValue}${abbreviations[abbreviationIndex]}`;
  // Add the negative sign if the original number was negative
  return number < 0 ? `-${result}` : result;
}

// @poe
export function getTimeAgo(date: Date): string {
  const now = new Date();
  const elapsedMs = now.getTime() - date.getTime();

  const seconds = Math.floor(elapsedMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }
}
