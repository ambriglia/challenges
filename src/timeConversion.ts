export function timeConversion(time: string): string {
  const timeArr = time.split(':');
  const amPM = timeArr[2].substring(2);
  const seconds = timeArr[2].substring(0, 2);
  const minutes = timeArr[1];
  const hour = timeArr[0];

  if (amPM === 'AM') {
    if (hour === '12') {
      return `00:${minutes}:${seconds}`;
    } else {
      return `${hour}:${minutes}:${seconds}`;
    }
  } else {
    if (hour === '12') {
      return `12:${minutes}:${seconds}`;
    } else {
      return `${parseInt(hour) + 12}:${minutes}:${seconds}`;
    }
  }
};
