import * as t from './types';

export const setClasses = (classes: any) => ({
  type: t.CLASSES,
  payload: classes,
});
