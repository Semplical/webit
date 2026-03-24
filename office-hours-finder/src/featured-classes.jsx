import { useState, useEffect, useRef } from "react";

export default function FeaturedCards({ data, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef();
  const startRef = useRef(Date.now());

  useEffect(() => {
    const rotate = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
      startRef.current = Date.now();
      setProgress(0);
    }, interval);

    const animate = () => {
      const elapsed = Date.now() - startRef.current;
      setProgress(Math.min((elapsed / interval) * 100, 100));
      progressRef.current = requestAnimationFrame(animate);
    };
    progressRef.current = requestAnimationFrame(animate);

    return () => {
      clearInterval(rotate);
      cancelAnimationFrame(progressRef.current);
    };
  }, [data, interval]);

  const cls = data[currentIndex];

  const copyLink = () => {
    if (cls.link && cls.link !== "N/A") {
      navigator.clipboard.writeText(cls.link);
    }
  };

  return (
    <section className="Info-section featured-card">
      <h3>{cls.courseCode}</h3>
      <p>
        <strong>{cls.type}:</strong> {cls.instructor}<br />
        <strong>Day(s):</strong> {cls.day}<br />
        <strong>Time:</strong> {cls.startTime} - {cls.endTime}<br />
        <strong>Location:</strong> {cls.location}
      </p>
      {cls.link && cls.link !== "N/A" && (
        <div className="link-buttons">
          <a href={cls.link} target="_blank" rel="noopener noreferrer" className="link-button">
            Join Office Hour
          </a>
          <button onClick={copyLink} className="link-button">
            Copy Zoom Link
          </button>
        </div>
      )}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}