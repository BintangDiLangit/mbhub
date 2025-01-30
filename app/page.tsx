"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Users,
  BookOpen,
  Calendar,
  ChevronDown,
  Cpu,
  ArrowRight,
  Code,
  Globe,
  MessageSquare,
  Twitter,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="float-animation"
          >
            <motion.h1
              className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-400 neon-text leading-[1.2]"
              animate={{
                textShadow: [
                  "0 0 7px #8b5cf6",
                  "0 0 10px #8b5cf6",
                  "0 0 21px #8b5cf6",
                  "0 0 42px #8b5cf6",
                  "0 0 82px #8b5cf6",
                  "0 0 92px #8b5cf6",
                  "0 0 102px #8b5cf6",
                  "0 0 151px #8b5cf6",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Malang Blockchain Community
            </motion.h1>
            <p className="text-xl mb-8 text-violet-200">
              Building the decentralized future of Malang, one block at a time
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white border border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.5)] neon-border"
              >
                <Link href="https://discord.gg/NfPM56WrDd" target="_blank">
                  Join Our Community
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-violet-400" />
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-violet-300 neon-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Blocks className="w-12 h-12 mb-4 text-violet-400" />,
                title: "Technical Workshops",
                description:
                  "In-depth blockchain development tutorials and hands-on sessions",
              },
              {
                icon: <Users className="w-12 h-12 mb-4 text-violet-400" />,
                title: "Community Projects",
                description:
                  "Collaborative blockchain initiatives and local implementations",
              },
              {
                icon: <BookOpen className="w-12 h-12 mb-4 text-violet-400" />,
                title: "Learning Resources",
                description: "Curated educational content for all skill levels",
              },
              {
                icon: <Calendar className="w-12 h-12 mb-4 text-violet-400" />,
                title: "Regular Meetups",
                description:
                  "Network with fellow blockchain enthusiasts and experts",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-black/40 border border-violet-500/20 hover:border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all neon-border">
                  <CardContent className="p-6">
                    <motion.div
                      animate={{
                        filter: [
                          "drop-shadow(0 0 5px rgba(139,92,246,0.5))",
                          "drop-shadow(0 0 10px rgba(139,92,246,0.7))",
                          "drop-shadow(0 0 5px rgba(139,92,246,0.5))",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-violet-200">
                      {feature.title}
                    </h3>
                    <p className="text-violet-300/80">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-violet-300 neon-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Latest Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "DeFi Education Platform",
                description:
                  "A comprehensive learning platform for DeFi concepts and implementations",
                image:
                  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
              },
              {
                title: "Local Blockchain Network",
                description:
                  "Building a test network for Malang developers to experiment and learn",
                image:
                  "https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&q=80",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-black border border-violet-500/20 hover:border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all neon-border">
                  <CardContent className="p-0">
                    <div className="aspect-video relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute bottom-0 p-6">
                        <h3 className="text-2xl font-bold mb-2 text-violet-200">
                          {project.title}
                        </h3>
                        <p className="text-violet-300/80">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Roadmap Section */}
      <section className="py-20 px-4 bg-black/90">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-violet-300 neon-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Roadmap
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Community Building",
                items: [
                  "Launch community platform",
                  "Weekly blockchain workshops",
                  "Partnership development",
                ],
                icon: <Users className="w-8 h-8 text-violet-400" />,
              },
              {
                phase: "Phase 2",
                title: "Technical Development",
                items: [
                  "Launch testnet",
                  "Developer tooling",
                  "Smart contract templates",
                ],
                icon: <Code className="w-8 h-8 text-violet-400" />,
              },
              {
                phase: "Phase 3",
                title: "Ecosystem Growth",
                items: [
                  "Hackathon events",
                  "Incubator program",
                  "Regional expansion",
                ],
                icon: <Globe className="w-8 h-8 text-violet-400" />,
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-black/40 border border-violet-500/20 rounded-lg p-6 hover:border-violet-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    {phase.icon}
                    <h3 className="text-xl font-bold text-violet-300">
                      {phase.phase}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-violet-200">
                    {phase.title}
                  </h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 text-violet-300/80"
                      >
                        <ArrowRight className="w-4 h-4 text-violet-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Community Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black/90 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-violet-300 neon-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Community Impact
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Community Members",
                icon: <Users className="w-6 h-6" />,
              },
              {
                number: "50+",
                label: "Projects Launched",
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                number: "100+",
                label: "Workshops Held",
                icon: <BookOpen className="w-6 h-6" />,
              },
              {
                number: "1000+",
                label: "Discord Members",
                icon: <MessageSquare className="w-6 h-6" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    animate={{
                      filter: [
                        "drop-shadow(0 0 5px rgba(139,92,246,0.5))",
                        "drop-shadow(0 0 10px rgba(139,92,246,0.7))",
                        "drop-shadow(0 0 5px rgba(139,92,246,0.5))",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-violet-400"
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <motion.h3
                  className="text-3xl font-bold text-violet-300 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-violet-400/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black/95 border-t border-violet-500/10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-violet-300 mb-4">
                Malang Blockchain Community
              </h3>
              <p className="text-violet-300/80 mb-6">
                Building the decentralized future of Malang, one block at a
                time.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/malangblockchain"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://x.com/MalangBChain"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-violet-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-violet-300/80 hover:text-violet-300 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-violet-300/80 hover:text-violet-300 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-violet-300/80 hover:text-violet-300 transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-violet-300/80 hover:text-violet-300 transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-violet-300 mb-4">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-violet-300/80">Malang, Indonesia</li>
                <li>
                  <a
                    href="mailto:contact@mbhum.xyz"
                    className="text-violet-300/80 hover:text-violet-300 transition-colors"
                  >
                    contact@mbhum.xyz
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-violet-500/10 text-center text-violet-300/60">
            <p>
              &copy; {new Date().getFullYear()} Malang Blockchain Community. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
