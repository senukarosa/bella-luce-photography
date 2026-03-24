"use client"

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip,
} from "recharts"

const skills = [
  { subject: "React / Next.js", value: 88 },
  { subject: "Python / Flask",  value: 85 },
  { subject: "TypeScript",      value: 80 },
  { subject: "Node.js",         value: 75 },
  { subject: "DevOps / CI",     value: 65 },
  { subject: "UI / Design",     value: 78 },
]

export default function SkillsRadar() {
  return (
    <div className="w-full h-[360px] p-6 rounded-2xl bg-[#1a1a1a] border border-cyber-400/20 relative">
      <p className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase mb-4">Skills Radar</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skills} cx="50%" cy="50%" outerRadius="72%">
          <PolarGrid stroke="rgba(255,255,255,0.06)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11, fontFamily: "var(--font-jetbrains)" }}
          />
          <Radar
            name="Proficiency"
            dataKey="value"
            stroke="#00A3FF"
            fill="#00A3FF"
            fillOpacity={0.15}
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              background: "#1a1a1a",
              border: "1px solid rgba(0,163,255,0.3)",
              borderRadius: "12px",
              color: "#fff",
              fontFamily: "var(--font-jetbrains)",
              fontSize: "12px",
            }}
            formatter={(value: number) => [`${value}%`, "Proficiency"]}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
