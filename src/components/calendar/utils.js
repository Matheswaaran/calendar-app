const getCalenderDates = (month, year) => {
  let no_of_days_in_month = new Date(year, month + 1, 0).getDate();
  let days = Array(no_of_days_in_month)
    .fill(0)
    .map((_, i) => ({
      date: i + 1,
      month: month,
      year: year,
      day_of_week: new Date(year, month, i + 1).getDay(),
    }));

  let days_to_add_before = getDatesToAddBefore(days[0], year, month);

  let remaining_days_to_add =
    7 - ((days_to_add_before.length + days.length) % 7);

  let days_to_add_after = getDatesToAddAfter(
    remaining_days_to_add,
    year,
    month
  );

  return [...days_to_add_before, ...days, ...days_to_add_after];
};

const getDatesToAddBefore = (first_day_of_current_month, year, month) => {
  return Array(first_day_of_current_month.day_of_week)
    .fill(0)
    .map((_, i) => {
      let date = new Date(
        year,
        month,
        i - first_day_of_current_month.day_of_week + 1
      );
      return {
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day_of_week: date.getDay(),
      };
    });
};

const getDatesToAddAfter = (remaining_days_to_add, year, month) => {
  return Array(remaining_days_to_add)
    .fill(0)
    .map((_, i) => {
      let date = new Date(year, month + 1, i + 1);
      return {
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day_of_week: date.getDay(),
      };
    });
};

const getDayOfWeekText = (day_of_week) => {
  const days = [
    { full: "sunday", small: "sun" },
    { full: "monday", small: "mon" },
    { full: "tuesday", small: "tue" },
    { full: "wednesday", small: "wed" },
    { full: "thursday", small: "thu" },
    { full: "friday", small: "fri" },
    { full: "saturday", small: "sat" },
  ];
  return days[day_of_week];
};

const getMonthText = (month) => {
  console.log(month);
  const months = [
    { full: "January", small: "Jan" },
    { full: "February", small: "Feb" },
    { full: "March", small: "Mar" },
    { full: "April", small: "Apr" },
    { full: "May", small: "May" },
    { full: "June", small: "Jun" },
    { full: "July", small: "Jul" },
    { full: "August", small: "Aug" },
    { full: "September", small: "Sept" },
    { full: "October", small: "Oct" },
    { full: "November", small: "Nov" },
    { full: "December", small: "Dec" },
  ];
  return months[month];
};

const getPreviousMonthAndYear = (month, year) => {
  return month === 0
    ? { month: 11, year: year - 1 }
    : { month: month - 1, year };
};

const getNextMonthAndYear = (month, year) => {
  return month === 11
    ? { month: 0, year: year + 1 }
    : { month: month + 1, year };
};

export {
  getCalenderDates,
  getDayOfWeekText,
  getMonthText,
  getPreviousMonthAndYear,
  getNextMonthAndYear,
};
