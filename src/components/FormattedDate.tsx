import React, { useEffect, useState } from 'react';
import { differenceInDays, format, formatRelative, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

interface IFormattedDateProps {
  date: string;
}

const FormattedDate: React.FC<IFormattedDateProps> = ({ date }) => {
  const [formattedDate, setFormattedDate] = useState<any>('');

  // Effects
  useEffect(() => {
    if (date) {
      const isoDate = parseISO(date);
      const difference = differenceInDays(isoDate, new Date());

      if (difference === 0 || difference === 1) {
        const relative = formatRelative(isoDate, new Date(), { locale: ru });
        setFormattedDate(relative);
      } else {
        const simple = format(isoDate, 'd MMMM yyyy', { locale: ru });
        setFormattedDate(simple);
      }
    }
  }, [date]);

  // Renders
  return <>{formattedDate}</>;
};

export default FormattedDate;
