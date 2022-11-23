export const getTimeAgo = (time: Date) => {
  const convertDate = (date: Date) => {
    return Math.floor(date.getTime() / 1000);
  };

  const currentDate = convertDate(new Date());
  const publishDate = convertDate(new Date(time));

  const seconds = currentDate - publishDate;

  if (seconds > 2 * 24 * 3600) {
    return Math.floor(seconds / 3600 / 24) + " days ago";
  }

  if (seconds > 24 * 3600) {
    return Math.round(seconds / 3600 / 24) + " day ago";
  }

  if (seconds > 3600) {
    return Math.floor(seconds / 3600) + " hours ago";
  }

  if (seconds > 60) {
    return Math.floor(seconds / 60) + " minutes ago";
  }

  if (seconds < 60) {
    return seconds + " seconds ago";
  }
};
