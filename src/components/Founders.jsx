export default function Founders() {
  const founders = [
    {
      name: "Abdullah Rafique",
      role: "CTO & Co-Founder",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Ahmed Abubakr",
      role: "CEO & Co-Founder",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Zain-ul-Abedein",
      role: "CPO & Co-Founder",
      imageUrl: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold mb-12 text-center">Founders</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((founder) => (
          <div key={founder.name} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={founder.imageUrl}
              alt={founder.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-2xl font-semibold text-white">{founder.name}</h2>
              <p className="text-sm text-gray-300 mt-1 px-2 py-1 bg-gray-800/60 rounded-full inline-block">
                {founder.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}