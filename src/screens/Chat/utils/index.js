import moment from 'moment';

export const timeAgo = (date, format) => moment(date, format).fromNow();
