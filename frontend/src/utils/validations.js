export const phoneNumber = /[1-9]{2}9[1-9]\d{7}/;

export const calculateAge = (birth_date, today = new Date()) => {
  return Math.floor(
    Math.ceil(
      Math.abs(
        birth_date.getTime() - today.getTime()
      ) / (1000 * 3600 * 24)
    ) / 365.25
  );
}