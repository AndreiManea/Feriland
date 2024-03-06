import { useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { formatDate } from '../../../../utils/dates.utils';

import './calendarSection.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  setSelectedDates,
  setSelectedNights,
} from '../../../../redux/slices/bookingsSlice';

const CalendarSection = () => {
  // Global state
  const dispatch = useAppDispatch();
  const { selectedDates, selectedNights } = useAppSelector(
    state => state.bookings
  );
  const startDate = new Date(selectedDates[0].startDate as string);
  const endDate = new Date(selectedDates[0].endDate as string);

  // Local state
  const [datePreview, setDatePreview] = useState(
    `${formatDate(startDate)} - ${formatDate(endDate)}`
  );

  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.range1;
    let adjustedEndDate = endDate;
    // Calculate nights
    let nightsCalculated =
      ((adjustedEndDate?.getTime() ?? 0) - (startDate?.getTime() ?? 0)) /
      (1000 * 3600 * 24);
    if (nightsCalculated < 2) {
      // Adjust end date to ensure minimum 2 nights
      adjustedEndDate = new Date(startDate as Date);
      adjustedEndDate.setDate(adjustedEndDate.getDate() + 2);
      nightsCalculated = 2; // Set nights to minimum
    }
    dispatch(setSelectedNights(Math.round(nightsCalculated)));
    dispatch(
      setSelectedDates([
        {
          startDate: startDate?.toISOString(),
          endDate: (adjustedEndDate as Date).toISOString(),
        },
      ])
    );

    // Update date preview
    setDatePreview(
      `${formatDate(startDate as Date)} - ${formatDate(adjustedEndDate as Date)}`
    );
  };

  return (
    <div className="calendar">
      <h1 style={{ fontSize: '22px' }}>{Math.round(selectedNights)} nights</h1>
      <h2 style={{ fontSize: '14px' }}>{datePreview}</h2>
      <DateRange
        onChange={handleSelect}
        retainEndDateOnFirstSelection
        ranges={[{ startDate, endDate }]}
        months={2}
        fixedHeight
        direction="horizontal"
      />
    </div>
  );
};

export default CalendarSection;
