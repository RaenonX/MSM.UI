export const getTzOffsetSeconds = (): number => {
  return (new Date()).getTimezoneOffset() * 60;
};

export const updateEpochSecToLocal = (epochSec: number): number => {
  return epochSec - getTzOffsetSeconds();
};
