import moment from 'moment';

export const toMoment = (date: string, time: string) =>
    moment(`${date}T${time}Z`, 'YYYY-MM-DDTHH:mmZ');

export const parseDateTime = (dt: string) => {
    const mDt = moment(dt);

    return mDt.isValid()
        ? {
              date: mDt.utc().format('YYYY-MM-DD'),
              time: mDt.utc().format('HH:mm'),
          }
        : undefined;
};
