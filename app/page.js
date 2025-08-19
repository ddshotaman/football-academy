"use client";

import dynamic from "next/dynamic";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// Load framer-motion without SSR so <motion.*> is never undefined
const MotionDiv = dynamic(() => import("framer-motion").then((m) => m.motion.div), { ssr: false });
const MotionButton = dynamic(() => import("framer-motion").then((m) => m.motion.button), { ssr: false });

export default function Home() {
    return (
        <div className="min-h-screen text-white bg-gradient-to-br from-black via-red-900 to-black relative">
            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                    <a href="#" className="flex items-center gap-2">
                        <img
                            src="/logo.jpg"
                            alt="Academy Logo"
                            className="h-12 w-12 object-cover rounded-full border-2 border-white shadow-md"
                        />
                        <span className="text-lg font-bold tracking-wide">Indra Football Academy</span>
                    </a>

                    <ul className="hidden items-center gap-6 text-sm md:flex">
                        <li>
                            <a href="#home" className="hover:text-red-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-red-400">
                                Why Us
                            </a>
                        </li>
                        <li>
                            <a href="#mission" className="hover:text-red-400">
                                Mission
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="hover:text-red-400">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#advantages" className="hover:text-red-400">
                                Advantages
                            </a>
                        </li>
                        <li>
                            <a href="#coaches" className="hover:text-red-400">
                                Coach
                            </a>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4 text-lg">
                        <a
                            aria-label="Facebook"
                            href="https://facebook.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            aria-label="Instagram"
                            href="https://instagram.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            aria-label="Twitter"
                            href="https://twitter.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            aria-label="LinkedIn"
                            href="https://linkedin.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section
                id="home"
                className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24"
            >
                <div>
                    <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                        From Zero to <span className="text-red-500">Football Hero</span>
                    </h1>
                    <p className="mt-4 max-w-xl text-gray-200">
                        We enable players and clubs to become visible, train smarter, and open doors to professional
                        trials. Certified coaches, modern methods, and a culture that builds champions.
                    </p>
                    <MotionButton
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open("https://docs.google.com/forms/d/1jZGgecTQMvblZhv7MBN9NRUrnxCYNXgHXO-Cty3b2AM/viewform?edit_requested=true", "_blank")}
                        className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
                    >
                        Get in Touch
                    </MotionButton>
                </div>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src="/player-shooting.jpeg"
                        alt="Football player shooting the ball"
                        className="max-h-[520px] w-auto rounded-2xl object-cover shadow-2xl"
                    />
                </MotionDiv>
            </section>

            {/* WHY US */}
            <section id="about" className="mx-auto max-w-6xl px-5 py-16">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold md:text-4xl">About Our Academy</h2>
                        <p className="mt-4 text-gray-200">
                            Elite Football Academy blends science-backed training with elite mentorship. Our sessions
                            are crafted to sharpen technique, game IQ, and resilience—so players improve fast and stay
                            consistent. With video analysis, position-specific drills, and strength & conditioning
                            integrated into the weekly plan, athletes get a complete performance program.
                        </p>
                        <p className="mt-4 text-gray-200">
                            We’re equally focused on character: discipline, humility, and leadership. Whether you’re
                            starting out or targeting professional trials, you’ll find a clear pathway and the support
                            to walk it.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/training-session.jpg"
                            alt="Academy training session"
                            className="w-full rounded-2xl border border-white/10 bg-black/40 object-cover shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section id="mission" className="mx-auto max-w-6xl px-5 py-16">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div>
                        <img
                            src="/trophy.jpg"
                            alt="Team huddle during match"
                            className="w-full h-64 rounded-2xl border border-white/10 bg-black/40 object-cover shadow-xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold md:text-4xl">Our Mission</h2>
                        <p className="mt-4 text-gray-200">
                            To create an environment where ambition meets method. We equip players with tactical
                            clarity, technical excellence, and a professional mindset—so they can perform under pressure
                            and progress with purpose.
                        </p>
                        <p className="mt-4 text-gray-200">
                            Beyond football, we teach respect, accountability, and teamwork. Our goal is simple: build
                            champions on the pitch and leaders off it.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="mx-auto max-w-6xl px-5 py-16">
                <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-2xl bg-black/50 p-6 shadow-lg ring-1 ring-white/10">
                        <h3 className="text-xl font-semibold">Key Features</h3>
                        <p className="mt-3 text-gray-300">
                            AFC/UEFA-certified coaches · position-specific sessions · video analysis · S&C integration ·
                            GPS/HR tracking options · curated match schedule and trials support.
                        </p>
                    </div>
                    <div id="advantages" className="rounded-2xl bg-black/50 p-6 shadow-lg ring-1 ring-white/10">
                        <h3 className="text-xl font-semibold">Key Advantages</h3>
                        <p className="mt-3 text-gray-300">
                            Personalized development plans, small coach-to-player ratios, modern facilities, and direct
                            exposure to scouts through partner clubs and showcases.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-black/50 p-6 shadow-lg ring-1 ring-white/10">
                        <h3 className="text-xl font-semibold">Benefits</h3>
                        <p className="mt-3 text-gray-300">
                            Faster improvement, higher game IQ, improved fitness and confidence, plus a clear pathway to
                            collegiate or professional opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* COACHES */}
            <section id="coaches" className="mx-auto max-w-6xl px-5 py-16">
                <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Our Coaches</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {[
                        { name: "Ankit Singh", role: "Head Coach", img: "/coach1.png" },
                        { name: "Suraj Dhopi", role: "Assistant Coach", img: "/coach2.jpeg" },
                        { name: "Vikas Singh", role: "Coach & Rehab Lead", img: "/coach3.png" },
                    ].map((c) => (
                        <MotionDiv
                            key={c.name}
                            whileHover={{ y: -6 }}
                            className="rounded-2xl bg-black/50 p-6 text-center shadow-lg ring-1 ring-white/10"
                        >
                            <img src={c.img} alt={c.name} className="mx-auto h-40 w-40 rounded-full object-cover" />
                            <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
                            <p className="text-sm text-gray-300">{c.role}</p>
                        </MotionDiv>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-5 pb-20 text-center">
                <h2 className="text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
                <p className="mx-auto mt-3 max-w-2xl text-gray-300">
                    Click below to submit your interest form. Our coordinators will reach out with trial dates and
                    program details.
                </p>
                <MotionButton
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open("https://docs.google.com/forms/d/1jZGgecTQMvblZhv7MBN9NRUrnxCYNXgHXO-Cty3b2AM/viewform?edit_requested=true", "_blank")}
                    className="mt-6 rounded-xl bg-red-600 px-8 py-3 font-semibold hover:bg-red-700"
                >
                    Get In Touch
                </MotionButton>
            </section>

            {/* FOOTER */}
            {/* FOOTER */}
            <footer className="border-t border-white/10 bg-black/70">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 md:flex-row">
                    {/* Left side with text + address */}
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-300">
                            © {new Date().getFullYear()} Indra Football Academy. All rights reserved.
                        </p>
                        <p className="mt-2 text-sm text-gray-400">
                            📍 Indra Football Academy, Sector 62, Noida, Uttar Pradesh, India
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-5 text-lg">
                        <a
                            aria-label="Facebook"
                            href="https://facebook.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            aria-label="Instagram"
                            href="https://instagram.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            aria-label="Twitter"
                            href="https://twitter.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            aria-label="LinkedIn"
                            href="https://linkedin.com"
                            target="_blank"
                            className="hover:text-red-400"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </footer>

            {/* WHATSAPP FLOATING BUTTON */}
            <a
                href="https://wa.me/8957039841" // replace with your WhatsApp number
                target="_blank"
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
            >
                <FaWhatsapp size={28} />
            </a>
        </div>
    );
}
