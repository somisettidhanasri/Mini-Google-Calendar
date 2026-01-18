import dayjs from "dayjs";

export default function CalendarWeek({ date, events, onSelect }) {
  const start = dayjs(date).startOf("week");
  const days = [...Array(7)].map((_, i) => start.add(i, "day"));

  return (
    <div className="week-grid">
      {days.map((d, i) => {
        const dateStr = d.format("YYYY-MM-DD");
        const todaysEvents = events.filter(e => e.date === dateStr);

        return (
          <div
            key={i}
            className="week-cell"
            onClick={() => onSelect(dateStr)}
          >
            <strong>{d.date()}</strong>

            {todaysEvents.map((ev, idx) => (
              <div key={idx} className="event-pill">
                {ev.title}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
