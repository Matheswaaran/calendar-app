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
        year: date.getYear(),
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
        year: date.getYear(),
        day_of_week: date.getDay(),
      };
    });
};

const renderDaysOfWeek = (day_of_week) => {
  switch (day_of_week) {
    case 0:
      return "sun";
    case 1:
      return "mon";
    case 2:
      return "tue";
    case 3:
      return "wed";
    case 4:
      return "thu";
    case 5:
      return "fri";
    case 6:
      return "sat";
    default:
      return null;
  }
};

export { getCalenderDates, renderDaysOfWeek };
