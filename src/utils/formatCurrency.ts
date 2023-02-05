type FormatCurrencyProps = {
  locale?: string;
  maximumFractionDigits?: number;
  currency?: string;
};

export const formatCurrency = (
  value: number,
  options: FormatCurrencyProps = {}
) => {
  const { locale, maximumFractionDigits, currency }: FormatCurrencyProps = {
    locale: "en-US",
    maximumFractionDigits: 0,
    currency: "USD",
    ...options,
  };

  return new Intl.NumberFormat(locale, {
    style: "currency",
    maximumFractionDigits,
    currency,
  }).format(value);
};
