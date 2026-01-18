import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { supabase } from "../supabase";
import CalendarMonth from "../components/CalendarMonth";
import CalendarWeek from "../components/CalendarWeek";
import CalendarDay from "../components/CalendarDay";
import EventModal from "../components/EventModal";

export default function Dashboard({ user }) {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("month");
  const [currentDate, setCurrentDate] = useState(dayjs()); // month control
  const [selectedDate, setSelectedDate] = useState(null);  // clicked day
  const [editEvent, setEditEvent] = useState(null);

  const loadEvents = async () => {
    const { data } = await supabase
      .from("events")
      .select("*")
      .eq("user_id", user.id);
    setEvents(data || []);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>Calendar</h2>

        <button onClick={() => setSelectedDate(dayjs().format("YYYY-MM-DD"))}>
          + Create Event
        </button>

        <p>{user.email}</p>

        <button
          style={{ background: "red", marginTop: 20 }}
          onClick={async () => {
            await supabase.auth.signOut();
            window.location.reload();
          }}
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* TOP BAR */}
        <div className="topbar">
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}>
              ◀
            </button>

            <h2>{currentDate.format("MMMM YYYY")}</h2>

            <button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>
              ▶
            </button>

            <button onClick={() => setCurrentDate(dayjs())}>Today</button>
          </div>

          <div className="view-buttons">
            {["month", "week", "day"].map(v => (
              <button
                key={v}
                className={view === v ? "active" : ""}
                onClick={() => setView(v)}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* VIEWS */}
        {view === "month" && (
          <CalendarMonth
            currentDate={currentDate}
            events={events}
            onDayClick={setSelectedDate}
            onEventClick={setEditEvent}
          />
        )}

        {view === "week" && (
          <CalendarWeek
            date={selectedDate || currentDate.format("YYYY-MM-DD")}
            events={events}
            onDayClick={setSelectedDate}
          />
        )}

        {view === "day" && (
          <CalendarDay
            date={selectedDate || currentDate.format("YYYY-MM-DD")}
            events={events}
            onEventClick={setEditEvent}
          />
        )}
      </main>

      {/* EVENT MODAL */}
      {(selectedDate || editEvent) && (
        <EventModal
          date={selectedDate}
          event={editEvent}
          user={user}
          refresh={loadEvents}
          close={() => {
            setSelectedDate(null);
            setEditEvent(null);
          }}
        />
      )}
    </div>
  );
}
