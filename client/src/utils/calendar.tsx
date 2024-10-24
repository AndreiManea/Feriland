import { addDays, isSameDay, parse } from 'date-fns';
import { Tooltip } from '@chakra-ui/react';
import { ReactNode } from 'react';

/**
 * Function to check if a date is disabled.
 * @param {Date} date - The date to check.
 * @param {Array<Date>} disabledDates - An array of disabled dates.
 * @returns {boolean} - Returns true if the date is disabled, otherwise false.
 */

export const handleDisabledDate = (
  date: Date,
  disabledDates: Date[]
): boolean => {
  return disabledDates?.some(disabledDate => isSameDay(disabledDate, date));
};

/**
 * Function to render content for each day, adding a tooltip to disabled dates.
 * @param {Date} day - The date to render.
 * @param {Array<Date>} disabledDates - An array of disabled dates.
 * @returns {JSX.Element} - The rendered day content with tooltip if disabled.
 */

export const renderDayContent = (
  day: Date,
  disabledDates: Date[]
): ReactNode => {
  if (handleDisabledDate(day, disabledDates)) {
    return (
      <Tooltip
        placement="top"
        label="This date is booked"
        fontSize="md"
        mb="-1rem"
      >
        <span
          className="rdrDayDisabled"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '54px',
          }}
        >
          {day.getDate()}
        </span>
      </Tooltip>
    );
  }
  return <span>{day.getDate()}</span>;
};

/**
 * Finds the first available two-night range after today, considering disabled dates.
 * @param {Date[]} disabledDates - An array of disabled dates.
 * @returns {{ startDate: Date; endDate: Date }} - The first available start and end dates (2 nights).
 */
export const findFirstAvailableTwoNights = (
  disabledDates: Date[]
): { startDate: Date; endDate: Date } => {
  let startDate = addDays(new Date(), 0); // Start from today
  let found = false;

  while (!found) {
    const nextDay = addDays(startDate, 1); // The day after startDate
    const endDay = addDays(startDate, 2); // The day after nextDay

    // Check if startDate, nextDay, and endDay are not disabled
    const isStartDateDisabled = disabledDates?.some(disabledDate =>
      isSameDay(disabledDate, startDate)
    );
    const isNextDayDisabled = disabledDates?.some(disabledDate =>
      isSameDay(disabledDate, nextDay)
    );
    const isEndDayDisabled = disabledDates?.some(disabledDate =>
      isSameDay(disabledDate, endDay)
    );

    if (!isStartDateDisabled && !isNextDayDisabled && !isEndDayDisabled) {
      // Found three consecutive available nights
      found = true;
      return { startDate, endDate: endDay };
    }

    // Move to the next day and repeat
    startDate = addDays(startDate, 1);
  }

  // Just in case, fallback to today and two days after
  return { startDate, endDate: addDays(startDate, 3) };
};

export const parseDateStrings = (dateStrings: string[]) => {
  return dateStrings?.map(dateString =>
    parse(dateString, 'MMMM d, yyyy', new Date())
  );
};

// Helper function to normalize date (removes the time part)
export const normalizeDate = (date: Date | string) => {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0); // Strip time from the date
  return normalizedDate;
};
