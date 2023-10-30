function isWeekend(date) {
  const day = date.format('dddd');

  if (day === 'Saturday' || day === 'Sunday') {
    return day;
  }
  return 'not weekend';
}

export default isWeekend;