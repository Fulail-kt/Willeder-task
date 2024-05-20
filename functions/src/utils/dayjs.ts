import dayjs from 'dayjs';

export const getCurrentJST = (): string => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

export const getAddToCurrentJST = (num: number, unit: dayjs.UnitType): string => {
  return dayjs().add(num).format('YYYY-MM-DD HH:mm:ss');
};

export const isAfterCurrentJST = (time: string): boolean => {
  return dayjs(time).isAfter(dayjs());
};
