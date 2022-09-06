export const formatNumberOfView = (num: number) => {
   if (num < 0) return;
   return Math.abs(num) > 999
      ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + "K"
      : Math.sign(num) * Math.abs(num);
};
