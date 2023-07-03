type FormatSignedNumberOpts = {
  num: number,
  decimals?: number,
  abbreviate?: boolean
};

export const formatSignedNumber = ({num, decimals, abbreviate}: FormatSignedNumberOpts): string => {
  let numString;
  if (abbreviate ?? true) {
    numString = formatToAbbreviation({num, decimals});
  } else {
    numString = num.toFixed(decimals ?? 0);
  }

  return `${num > 0 ? '+' : ''}${numString}`;
};

type FormatToAbbreviationOpts = {
  num: number,
  decimals?: number
};

export const formatToAbbreviation = ({num, decimals}: FormatToAbbreviationOpts): string => {
  const numForCheck = Math.abs(num); // Need check the case of negative
  decimals = decimals ?? 3;

  if (numForCheck > 1E9) {
    return `${(num / 1E9).toFixed(decimals)} B`;
  }

  if (numForCheck > 1E6) {
    return `${(num / 1E6).toFixed(decimals)} M`;
  }

  if (numForCheck > 1E3) {
    return `${(num / 1E3).toFixed(decimals)} K`;
  }

  return num.toFixed(decimals).toString();
};
