import { format, isValid } from "date-fns";

export const formatDate = (date: Date | string): string => {
  let dateObject: Date;

  if (typeof date === "string") {
    dateObject = new Date(date);
    if (!isValid(dateObject)) {
      return "Something is wrong";
    }
  } else {
    dateObject = date;
  }

  return format(dateObject, "MMM do, yyyy");
};
