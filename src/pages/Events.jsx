import { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from '../components/calendar/Calendar';
import EventList from '../components/calendar/EventList';
import Breadcrumb from '../components/Breadcrumb';

// Compute Easter Sunday for a given year (Anonymous Gregorian algorithm)
const getEaster = (year) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
};

// Generate Uganda public holidays for a given year
const getUgandaHolidays = (year) => {
  const easter = getEaster(year);
  const goodFriday = new Date(easter);
  goodFriday.setDate(easter.getDate() - 2);
  const easterMonday = new Date(easter);
  easterMonday.setDate(easter.getDate() + 1);

  return [
    { title: "New Year's Day",             date: new Date(year, 0,  1),  description: "Uganda Public Holiday" },
    { title: "Liberation Day",             date: new Date(year, 0, 26),  description: "Commemoration of Uganda's liberation on 26 January 1986" },
    { title: "International Women's Day",  date: new Date(year, 2,  8),  description: "Uganda Public Holiday" },
    { title: "Good Friday",                date: goodFriday,              description: "Uganda Public Holiday" },
    { title: "Easter Monday",              date: easterMonday,            description: "Uganda Public Holiday" },
    { title: "Labour Day",                 date: new Date(year, 4,  1),  description: "International Workers' Day – Uganda Public Holiday" },
    { title: "Martyrs' Day",               date: new Date(year, 5,  3),  description: "Commemoration of the Uganda Martyrs – Public Holiday" },
    { title: "Heroes' Day",                date: new Date(year, 5,  9),  description: "Uganda Public Holiday" },
    { title: "Independence Day",           date: new Date(year, 9,  9),  description: "Uganda's Independence Day – 9 October 1962" },
    { title: "Christmas Day",              date: new Date(year, 11, 25), description: "Uganda Public Holiday" },
    { title: "Boxing Day",                 date: new Date(year, 11, 26), description: "Uganda Public Holiday" },
  ].map(h => ({
    ...h,
    date: h.date.toISOString(),
    location: "Uganda",
    category: "Public Holiday",
  }));
};

// Return the next future occurrence of a fixed month/day (rolls to next year if already past)
const nextOccurrence = (month, day, hour = 8) => {
  const now = new Date();
  const year = now.getFullYear();
  const candidate = new Date(year, month - 1, day, hour, 0, 0);
  if (candidate <= now) candidate.setFullYear(year + 1);
  return candidate.toISOString();
};

// Uganda MoES Term 2 reopening: first Monday of June each year
const getNextTerm2Date = () => {
  const now = new Date();
  const tryYear = (y) => {
    // Find first Monday of June in year y
    const june1 = new Date(y, 5, 1, 8, 0, 0);
    const dayOfWeek = june1.getDay(); // 0=Sun,1=Mon,...
    const daysUntilMonday = dayOfWeek === 1 ? 0 : (8 - dayOfWeek) % 7;
    return new Date(y, 5, 1 + daysUntilMonday, 8, 0, 0);
  };
  let date = tryYear(now.getFullYear());
  if (date <= now) date = tryYear(now.getFullYear() + 1);
  return date.toISOString();
};

const Events = () => {
  const now = new Date();
  const year = now.getFullYear();

  // Uganda public holidays for this year and next year
  const holidays = [
    ...getUgandaHolidays(year),
    ...getUgandaHolidays(year + 1),
  ];

  // School events with auto-updating future dates
  const schoolEvents = [
    {
      title: "Term 2 Reporting Day",
      description: "Students report back for Term 2 academic session (MoES Term 2 opening – first Monday of June)",
      date: getNextTerm2Date(),
      location: "School Campus",
      category: "Academic",
    },
    {
      title: "Lake Mburo Trip",
      description: "Educational trip to explore wildlife and nature",
      date: nextOccurrence(5, 1, 7),
      location: "Lake Mburo National Park",
      category: "Field Trip",
    },
    {
      title: "STEM Innovation Fair",
      description: "Showcase of student projects in science and technology",
      date: nextOccurrence(5, 15, 9),
      location: "School Hall",
      category: "STEM",
    },
    {
      title: "Parent-Teacher Meeting",
      description: "Term 2 progress review with parents",
      date: nextOccurrence(6, 1, 14),
      location: "School Hall",
      category: "Meeting",
    },
  ];

  const [events] = useState(
    [...schoolEvents, ...holidays].sort((a, b) => new Date(a.date) - new Date(b.date))
  );

  // Only show events from today onwards in the sidebar list
  const upcomingEvents = events.filter(e => new Date(e.date) >= now);

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb crumbs={[
        { name: 'Home', href: '/' },
        { name: 'School Events and Calendar', href: '/events' },
      ]} />
      <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">School Calendar & Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with all school activities, academic calendar, and important events throughout the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Calendar events={events} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <EventList events={upcomingEvents} />
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Events;