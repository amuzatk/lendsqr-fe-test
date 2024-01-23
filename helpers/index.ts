// Add country eg 'en-US' or 'en-NG' then currency 'USD', 'NGN'
export const currencyFormatter = (
    country: string,
    currency: string,
    amount: number
  ) => {
    return new Intl.NumberFormat(country ?? 'en-NG', {
      style: 'currency',
      currency: currency ?? 'NGN',
    }).format(amount);
  };
  