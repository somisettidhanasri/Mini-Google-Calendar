import { supabase } from "../supabase";

export default function EventModal({ date, event, user, refresh, close }) {
  const submit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const start_time = e.target.start.value;
    const end_time = e.target.end.value;
    const color = e.target.color.value;
    const repeat = e.target.repeat.value;

    if (event) {
      await supabase
        .from("events")
        .update({ title, start_time, end_time, color, repeat })
        .eq("id", event.id);
    } else {
      await supabase.from("events").insert({
        title,
        date,
        user_id: user.id,
        start_time,
        end_time,
        color,
        repeat,
      });
    }

    refresh();
    close();
  };

  const remove = async () => {
    await supabase.from("events").delete().eq("id", event.id);
    refresh();
    close();
  };

  return (
    <div className="modal-backdrop fade-in">
      <form className="modal-box" onSubmit={submit}>
        <h3>{event ? "Edit Event" : "New Event"}</h3>

        <p style={{ marginBottom: "12px" }}>
          <strong>Date:</strong> {event?.date || date}
        </p>

        <input
          type="text"
          name="title"
          defaultValue={event?.title || ""}
          placeholder="Event title"
          required
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <input type="time" name="start" defaultValue={event?.start_time || "09:00"} />
          <input type="time" name="end" defaultValue={event?.end_time || "10:00"} />
        </div>

        <div className="color-row">
          <label>Color:</label>
          <input
            type="color"
            name="color"
            className="color-input"
            defaultValue={event?.color || "#1a73e8"}
          />
        </div>

        <div className="repeat-row">
          <label>Repeat:</label>
          <select name="repeat" defaultValue={event?.repeat || "none"}>
            <option value="none">Does not repeat</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="modal-actions">
          {event && (
            <button type="button" className="danger" onClick={remove}>
              Delete
            </button>
          )}

          <button type="button" onClick={close}>
            Cancel
          </button>

          <button type="submit" className="primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
