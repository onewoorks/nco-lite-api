const StringCleaner = {
    getTotalDaysInMonth(year, month) {
        let date = new Date(year, month, 1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        return date.getDate();
      },
    cleanSquadron(str) {
        let clean = str.replace(/[^0-9]+/g, '');
        // clean = clean.replace('tudm','')
        return clean.trim() + ' Skn'
    }
}

module.exports = StringCleaner