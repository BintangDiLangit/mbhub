"use client";

import { motion } from "framer-motion";
import { Blocks, Users, BookOpen, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
              className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-400 neon-text"
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
                Join Our Community
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
    </div>
  );
}
