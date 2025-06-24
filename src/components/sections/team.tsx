'use client'

import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'

interface TeamMember {
  name: string
  role: string
  avatarUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Damar Galih",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBkuun5v1zt1n3aZ2E5N7ho0PSAy8JgOzFuMKi"
  },
  {
    name: "Gilang Nur Hidayat",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://avatars.githubusercontent.com/u/130344101?v=4"
  },
  {
    name: "Muhammad Rizal Arfiyan",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBGTmIH1iPrfxvoLJ6Za4MBD2jdncE13eUsgtK"
  },
  {
    name: "Ahmad Mufied Nugroho",
    role: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    avatarUrl: "https://5xgbtx8c95.ufs.sh/f/ofUH6VZs10HBq1eUcy8GhcYv1dAHiCogF9MaWbmslwfz3uKD"
  }
]

const TeamCard = ({ name, role, avatarUrl }: TeamMember) => (
  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 pt-12 shadow-md hover:shadow-xl text-white text-center transition-all duration-300">
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
      <img
        src={avatarUrl}
        alt={name}
        className="w-20 h-20 rounded-full border-4 border-white/30 shadow-md object-cover"
      />
    </div>
    <h3 className="mt-4 font-semibold text-lg">{name}</h3>
    <p className="text-sm text-white/80 mt-2">{role}</p>
    <div className="flex justify-center gap-4 mt-4">
      <FaXTwitter className="w-5 h-5 hover:scale-110 cursor-pointer text-white/80 hover:text-white" />
      <FaInstagram className="w-5 h-5 hover:scale-110 cursor-pointer text-white/80 hover:text-white" />
      <FaLinkedin className="w-5 h-5 hover:scale-110 cursor-pointer text-white/80 hover:text-white" />
    </div>
  </div>
)

const TeamSection = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Welcome our talented team</h2>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          We are thrilled to introduce the newest members of our team. Each individual brings a wealth of experience, creativity, and passion to our organization.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
    </div>
  </section>
)

export default TeamSection