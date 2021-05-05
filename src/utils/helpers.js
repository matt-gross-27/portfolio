export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function dateDiff(now) {
  
  function formatString (num, singular) {
    if (num === 0) {
      return '';
    } else if (num === 1) {
      return `${num} ${singular}`
    } else {
      return `${num} ${singular}s`
    }
  }

  const daysIn = {
    0: 31,
    1: 28, //not dealing with leap year because i don't feel like it
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
  }

  let timeArray = [];
  const fromDate = new Date('12/7/2020');
  let dateDiff = now - fromDate;
  // 31,556,932,000 ms per year

  const years = Math.floor(dateDiff/31556932000);

  years > 0 && timeArray.push(formatString(years, 'year'));
  
  // ** only works with fromDate in December otherwise would need to Math.floor() offset /12 fun
  const months = now.getDate() >= fromDate.getDate() ? now.getMonth() + 1 : now.getMonth();
  months > 0 && timeArray.push(formatString(months, 'month'));

  // dynamic for any from and to dates
  const days = now.getDate() >= fromDate.getDate() ? now.getDate() - fromDate.getDate() : now.getDate() + daysIn[now.getMonth() - 1] - fromDate.getDate();
  days > 0 && timeArray.push(formatString(days, 'day'));

  const hours = now.getHours();
  hours > 0 && timeArray.push(formatString(hours, 'hour'));

  const minutes = now.getMinutes();
  minutes > 0 && timeArray.push(formatString(minutes, 'minute'));
  // timeArray.push(`and ${minutes} minute${minutes === 1 ? '' : 's'}`)

  const seconds = now.getSeconds();
  timeArray.push(`and ${seconds} second${seconds === 1 ? '' : 's'}`)



  return timeArray.join(', ');
}