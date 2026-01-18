import dayjs from "dayjs";

export default function Calendar({ events, onSelect }) {
  const start = dayjs().startOf("month").day();
  const days = dayjs().daysInMonth();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {dayjs().format("MMMM YYYY")}
      </h2>

      <div className="grid grid-cols-7 text-sm text-gray-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {[...Array(start)].map((_, i) => <div key={i} />)}

        {[...Array(days)].map((_, i) => {
          const date = dayjs().date(i + 1).format("YYYY-MM-DD");
          const hasEvent = events.some(e => e.date === date);

          return (
            <div
              key={i}
              onClick={() => onSelect(date)}
              className={`h-24 p-2 border rounded-lg cursor-pointer hover:bg-blue-50 transition
                ${hasEvent ? "bg-blue-100" : "bg-white"}`}
            >
              <div className="text-sm font-medium">{i + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
