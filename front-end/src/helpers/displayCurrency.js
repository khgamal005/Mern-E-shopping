const displayUSDCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: 'USD',
        minimumFractionDigits: num % 1 === 0 ? 0 : 2
    });

    return formatter.format(num);
};

export default displayUSDCurrency;
