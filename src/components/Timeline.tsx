import { Calendar } from "lucide-react";

const Timeline = () => {
  const events = [
    { date: "Jan 15", title: "Registration Opens", description: "Start your journey" },
    { date: "Jan 20", title: "Team Formation", description: "Find your perfect match" },
    { date: "Jan 25", title: "Hackathon Starts", description: "Code your heart out" },
    { date: "Jan 27", title: "Final Submission", description: "Present your innovation" },
  ];

  return (
    <section className="py-16 animate-fade-in" id="timeline">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Calendar className="text-primary" />
        Event Timeline
      </h2>
      <div className="grid gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-primary font-semibold">{event.date}</div>
            <h3 className="text-xl text-white font-bold mt-2">{event.title}</h3>
            <p className="text-gray-400 mt-1">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;