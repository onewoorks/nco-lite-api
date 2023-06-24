const Common = {
    getTotalDaysInMonth(year, month) {
        let date = new Date(year, month, 1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        return date.getDate();
      }
}

module.exports = Common