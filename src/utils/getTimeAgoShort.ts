export const getTimeAgoShort = (time: Date) => {
  const convertDate = (date: Date) => {
    return Math.floor(date.getTime() / 1000);
  };

  const currentDate = convertDate(new Date());
  const publishDate = convertDate(new Date(time));

  const seconds = currentDate - publishDate;

  if (seconds > 2 * 24 * 3600) {
    return Math.floor(seconds / 3600 / 24) + " d";
  }

  if (seconds > 24 * 3600) {
    return Math.round(seconds / 3600 / 24) + " d";
  }

  if (seconds > 3600) {
    return Math.floor(seconds / 3600) + " h";
  }

  if (seconds > 60) {
    return Math.floor(seconds / 60) + " m";
  }

  if (seconds < 60) {
    return seconds + " s";
  }
};
