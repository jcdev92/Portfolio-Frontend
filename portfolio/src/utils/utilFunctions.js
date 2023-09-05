export function getFormattedDate(date) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
}

export function getFormattedTime(date) {
  const newDate = new Date(date);
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  return `${hours}:${minutes}`;
}

export function getFormattedDateTime(date) {
  return `${getFormattedDate(date)} ${getFormattedTime(date)}`;
}

export function getFormattedDateTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  return getFormattedDateTime(date);
}

export function clearEmptyFields(data) {
  const newData = {};
  for (let key in data) {
    if (data[key] !== "") {
      newData[key] = data[key];
    }
  }
  return newData;
}
