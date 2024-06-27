import { format } from 'date-fns';

// Function to format dates
export const formatDate = (date: Date) => {
  return format(date, 'MMMM d, yyyy');
};
