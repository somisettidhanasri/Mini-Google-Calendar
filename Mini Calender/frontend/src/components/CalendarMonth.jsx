import dayjs from "dayjs";

export default function CalendarMonth({
  currentDate,
  events,
  onDayClick,
  onEventClick
}) {
  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const startDay = startOfMonth.day();

  return (
    <div className="month-grid fade-in">
      {[...Array(startDay)].map((_, i) => <div key={i}></div>)}

      {[...Array(daysInMonth)].map((_, i) => {
        const dateObj = currentDate.date(i + 1);
        const date = dateObj.format("YYYY-MM-DD");
        const dayName = dateObj.format("ddd"); // Mon, Tue, Wed
        const dayEvents = events.filter(e => e.date === date);

        return (
          <div
            key={i}
            className="day-cell"
            onClick={() => onDayClick(date)}
          >
            <div style={{ fontSize: 12, color: "#666" }}>
              {dayName}
            </div>

            <strong>{i + 1}</strong>

            {dayEvents.map(ev => (
              <div
                key={ev.id}
                className="event-pill"
                style={{ background: ev.color }}
                onClick={(e) => {
                  e.stopPropagation();
                  onEventClick(ev);
                }}
              >
                {ev.title}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
