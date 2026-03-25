import { useState } from "react";

export default function AddClass({ setClasses }) {
  const [form, setForm] = useState({
    courseCode: "",
    instructor: "",
    type: "Professor",
    day: "",
    startTime: "",
    endTime: "",
    location: "",
    link: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setClasses(prev => [...prev, form]);
    setForm({
      courseCode: "",
      instructor: "",
      type: "Professor",
      day: "",
      startTime: "",
      endTime: "",
      location: "",
      link: ""
    });
  }

  return (
    <main className="add-class">
      <h2 className="page-title">Add a Class</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <input name="courseCode" placeholder="Course Code" value={form.courseCode} onChange={handleChange} required />
        <input name="instructor" placeholder="Instructor" value={form.instructor} onChange={handleChange} required />

        <select name="type" value={form.type} onChange={handleChange}>
          <option>Professor</option>
          <option>Lecturer</option>
          <option>TA</option>
        </select>

        <input name="day" placeholder="Day(s)" value={form.day} onChange={handleChange} required />
        <input name="startTime" placeholder="Start Time" value={form.startTime} onChange={handleChange} required />
        <input name="endTime" placeholder="End Time" value={form.endTime} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <input name="link" placeholder="Zoom Link (optional)" value={form.link} onChange={handleChange} />

        <button type="submit" className="link-button">Add Class</button>
      </form>
    </main>
  );
}