const MonthsEnum = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6, "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11, "Dec":12,}
Object.freeze(DaysEnum)

export const sortExperiences = (exp1, exp2) => {
  date1 = exp1.startDate.split();
  date2 = exp2.startDate.split();
  year1 = parseInt(date1[1]);
  year2 = parseInt(date2[1]);
  month1 = date1[0];
  month2 = date2[0];
  return (year1===year2) ? MonthsEnum.MonthsEnum[month1]>MonthsEnum.MonthsEnum[month2] : year1>year2;
}