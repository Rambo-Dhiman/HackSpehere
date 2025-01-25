import { Users } from "lucide-react";

const Team = () => {
  const members = [
    { name: "John Doe", role: "Lead Organizer", image: "https://i.pravatar.cc/150?img=1" },
    { name: "Jane Smith", role: "Technical Lead", image: "https://i.pravatar.cc/150?img=2" },
    { name: "Mike Johnson", role: "Design Lead", image: "https://i.pravatar.cc/150?img=3" },
  ];

  return (
    <section className="py-16 animate-fade-in" id="team">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Users className="text-primary" />
        Organizing Team
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary"
            />
            <h3 className="text-xl text-white font-bold">{member.name}</h3>
            <p className="text-gray-400 mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;