import { assets } from "@/assets/assetimports";

const members = [
  // { name: "Krunal Pitroda", image: assets.tm1 },
  { name: "Krunal Pitroda", image: assets.tm3 },
  { name: "Laher Rathod", image: assets.tm2 },
];

export default function TeamSectionModern({
  title = "Meet Our Team",
  subtitle = "A dedicated team of professionals",
}) {
  return (
    <section className="py-20 px-4 bg-blue-50 text-blue-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
            >
              <div className="relative aspect-square w-full h-full">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-slate-300 text-sm">{member.role}</p>
                )}

                {member.social && (
                  <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.social.twitter && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full bg-slate-700/50 hover:bg-slate-600"
                      >
                        <Twitter className="h-3 w-3" />
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full bg-slate-700/50 hover:bg-slate-600"
                      >
                        <Linkedin className="h-3 w-3" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full bg-slate-700/50 hover:bg-slate-600"
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
