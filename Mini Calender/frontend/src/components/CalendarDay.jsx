export default function CalendarDay({ date, events }) {
  const hours = [...Array(24)].map((_, i) => i);

  const todaysEvents = events.filter(e => e.date === date);

  return (
    <div className="day-view">
      <h2>{date}</h2>

      {hours.map((h, i) => (
        <div key={i} className="day-hour">
          <span className="hour-text">{h}:00</span>

          {todaysEvents
            .filter(e => Number(e.start_time.split(":")[0]) === h)
            .map(ev => (
              <div key={ev.id} className="event-block">
                {ev.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
