// import React from "react";

export type Traffic = "red" | "yellow" | "green";

const colorConfig: Record<
  Traffic,
  {
    bg: string;
    hover: string;
    ring: string;
    gradient: string;
    icon: string;
    shadow: string;
  }
> = {
  red: {
    bg: "bg-red-500",
    hover: "hover:bg-red-600",
    ring: "focus:ring-red-300",
    gradient: "from-red-500 to-red-600",
    icon: "🚫",
    shadow: "shadow-red-200",
  },
  yellow: {
    bg: "bg-amber-500",
    hover: "hover:bg-amber-600",
    ring: "focus:ring-amber-300",
    gradient: "from-amber-500 to-yellow-500",
    icon: "⚠️",
    shadow: "shadow-amber-200",
  },
  green: {
    bg: "bg-green-500",
    hover: "hover:bg-green-600",
    ring: "focus:ring-green-300",
    gradient: "from-green-500 to-emerald-500",
    icon: "✅",
    shadow: "shadow-green-200",
  },
};

const title: Record<Traffic, string> = {
  red: "ห้ามกิน",
  yellow: "กินได้บ้าง (จำกัดปริมาณ/ตามแพทย์สั่ง)",
  green: "กินได้ (ปริมาณเหมาะสม)",
};

const Icon = ({ t }: { t: Traffic }) => (
  <span className="text-2xl animate-pulse" aria-hidden>
    {colorConfig[t].icon}
  </span>
);

export default function Home({ onSelect }: { onSelect: (t: Traffic) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-circles"></div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header with enhanced styling */}
          <header className="text-center space-y-4 mb-12">
            <div className="inline-block p-4 bg-white/60 backdrop-blur-sm rounded-full shadow-lg mb-4">
              <div className="text-4xl">🏥</div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              อาหารสามสีตำบลบุ่งน้ำเต้า
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
              ผู้สูงอายุโรคไต
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
              <p className="text-base sm:text-lg text-gray-600 font-medium">
                ผู้ดูแลผู้ป่วยติดบ้าน/ติดเตียง (ปัญหาโรคไต)
              </p>
              <p className="text-sm text-gray-500 mt-2">
                💡 กดสีเพื่อดูตัวอย่างรูปอาหารทันที
              </p>
            </div>
          </header>

          {/* Traffic light buttons with enhanced design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {(["red", "yellow", "green"] as Traffic[]).map((t, index) => (
              <button
                key={t}
                onClick={() => onSelect(t)}
                className={`group relative overflow-hidden rounded-3xl p-8 text-white font-bold text-lg shadow-2xl
              outline-none focus:ring-4 ${colorConfig[t].ring} ${colorConfig[t].shadow}
              transition-all duration-300 hover:scale-105 hover:-translate-y-2
              opacity-0 animate-[fadeInUp_.6s_ease-out_forwards]`}
                style={{
                  background: `linear-gradient(135deg, ${
                    t === "red"
                      ? "#ef4444, #dc2626"
                      : t === "yellow"
                      ? "#f59e0b, #eab308"
                      : "#10b981, #059669"
                  })`,
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div
                  className="absolute inset-0 bg-white/10 transform -skew-y-6 scale-150
                  group-hover:scale-100 transition-transform duration-700
                  animate-[float_5s_ease-in-out_infinite]"
                ></div>

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <Icon t={t} />
                  <span className="text-center leading-tight">{title[t]}</span>
                </div>

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-md
                    -translate-x-full group-hover:animate-[shimmer_.9s_linear]"
                  ></div>
                </div>
              </button>
            ))}
          </div>

          {/* Info section with glassmorphism */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">หลักการสำคัญ</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                  <span className="text-blue-500 text-lg mt-1">🧂</span>
                  <div>
                    <p className="font-semibold text-gray-800">
                      ควบคุมสารอาหาร
                    </p>
                    <p className="text-sm text-gray-600">
                      โซเดียม โพแทสเซียม ฟอสฟอรัส โปรตีน
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl">
                  <span className="text-orange-500 text-lg mt-1">🚫</span>
                  <div>
                    <p className="font-semibold text-gray-800">เลี่ยงอาหาร</p>
                    <p className="text-sm text-gray-600">แปรรูปและรสจัด</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                  <span className="text-green-500 text-lg mt-1">💧</span>
                  <div>
                    <p className="font-semibold text-gray-800">ดื่มน้ำ</p>
                    <p className="text-sm text-gray-600">
                      ตามแพทย์แนะนำ โดยเฉพาะกรณีบวม
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                  <span className="text-purple-500 text-lg mt-1">👨‍🍳</span>
                  <div>
                    <p className="font-semibold text-gray-800">วิธีปรุง</p>
                    <p className="text-sm text-gray-600">
                      เน้นต้ม/นึ่ง/อบ แทนการทอด
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl border-l-4 border-blue-500">
              <p className="text-sm text-gray-600 italic">
                ⚠️ ข้อมูลทั่วไป ไไม่แทนคำแนะนำของแพทย์/โภชนากร
              </p>
            </div>
          </div>

          {/* Team Section with the uploaded photo */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <img
                  src="src/img/29192.jpg"
                  alt="ทีมงานสาธารณสุขตำบลบุ่งน้ำเต้า"
                  className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto object-cover h-64 sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4">
                <p className="text-sm text-gray-600">
                  ด้วยเกล้าด้วยกระหม่อม ขอเดชะ ข้าพระพุทธเจ้า
                  โรงพยาบาลส่งเสริมสุขภาพตำบลบุ่งน้ำเต้า
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-gray-500">
                    พร้อมดูแลสุขภาพของชุมชน
                  </span>
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
