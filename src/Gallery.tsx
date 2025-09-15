// import React from "react";
import type { Traffic } from "./Home";

type FoodPic = { id: string; name: string; src: string; note?: string };

const PICS: Record<Traffic, FoodPic[]> = {
  red: [
    {
      id: "salt",
      name: "เกลือ/น้ำปลา/ซีอิ๊ว",
      src: "https://www.publicdomainpictures.net/pictures/210000/velka/salt-in-the-hand.jpg",
      note: "โซเดียมสูง ทำให้บวม/ความดันสูง",
    },
    {
      id: "instant",
      name: "บะหมี่กึ่งสำเร็จรูป",
      src: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500",
      note: "เครื่องปรุงโซเดียมสูง",
    },
    {
      id: "processed",
      name: "ไส้กรอก/แฮม/เบคอน",
      src: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500",
      note: "อาหารแปรรูป โซเดียมสูง",
    },
    {
      id: "banana",
      name: "กล้วย/มะเขือเทศ/มันฝรั่ง",
      src: "https://as2.ftcdn.net/jpg/02/99/29/05/220_F_299290543_D7Hg1njhj3SZc2JiYp2hsT3HWk9WIFrL.jpg",
      note: "โพแทสเซียมสูง เสี่ยงต่อหัวใจ",
    },
    {
      id: "nuts",
      name: "ถั่ว/งา/ปลาเล็กปลาน้อย",
      src: "https://as1.ftcdn.net/jpg/01/39/63/94/220_F_139639492_k7Ql4ajSDUnyWoq25z2d4rtmfFHsHcnr.jpg",
      note: "ฟอสฟอรัสสูง",
    },
    // {
    //   id: "cheese",
    //   name: "ชีส",
    //   src: "https://images.unsplash.com/photo-1589881133595-d5d138cf6e3e?w=500",
    //   note: "ฟอสฟอรัสสูง",
    // },
    {
      id: "pickled",
      name: "ของหมักดอง",
      src: "https://as1.ftcdn.net/jpg/05/62/90/12/220_F_562901295_GmQZUPwbf0uGgFNiYOXSNXDCKqeGizKP.jpg",
      note: "มักมีโซเดียมสูง",
    },
  ],
  yellow: [
    {
      id: "eggwhite",
      name: "ไข่ขาว",
      src: "https://as1.ftcdn.net/jpg/01/72/18/04/220_F_172180459_Xkva6JsC2qA2wCUyFHsZSzJpgTp56p2T.jpg",
      note: "โปรตีนคุณภาพดี กินตามแพทย์แนะนำ",
    },
    {
      id: "whitefish",
      name: "ปลาเนื้อขาว",
      src: "https://as1.ftcdn.net/jpg/02/74/99/08/220_F_274990826_sq3sH3RXWcKRujED9ubZpITBqNfYS6OA.jpg",
      note: "จำกัดปริมาณ",
    },
    {
      id: "tofu",
      name: "เต้าหู้",
      src: "https://image.shutterstock.com/image-photo/wooden-cutting-board-variety-white-250nw-2521273303.jpg",
      note: "โปรตีนพอเหมาะ",
    },
    {
      id: "apple",
      name: "แอปเปิล",
      src: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",
      note: "เลือกปริมาณเล็ก",
    },
    {
      id: "pineapple",
      name: "สับปะรด",
      src: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=500",
      note: "จำกัดปริมาณ",
    },
    {
      id: "watermelon",
      name: "แตงโม",
      src: "https://as2.ftcdn.net/jpg/02/27/04/15/220_F_227041521_R30fm1zPGoX3hQeGkGgFAKykT5irrv79.jpg",
      note: "จำกัดปริมาณ",
    },
    {
      id: "rice",
      name: "ข้าวขาว/ขนมปังขาว",
      src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
      note: "ไม่เติมเกลือ/ฟอสฟอรัส",
    },
  ],
  green: [
    {
      id: "fishporridge",
      name: "ข้าวต้มปลา",
      src: "https://www.aurareefood.com/arwp/wp-content/uploads/2016/06/Fish-Boiled-rice.jpg",
      note: "เบา ๆ โปรตีนพอเหมาะ ย่อยง่าย เหมาะกับผู้ป่วยไต",
    },
    {
      id: "rice_soup_pork",
      name: "ข้าวต้มหมูสับ",
      src: "https://s359.kapook.com/pagebuilder/3074583c-1c05-447b-a6d6-c2bf63dbf133.jpg",
      note: "หมูสับไม่มัน ปรุงรสอ่อน",
    },
    {
      id: "clear_soup_cabbage",
      name: "แกงจืดกะหล่ำปลี",
      src: "https://img.wongnai.com/p/1968x0/2019/08/08/1fb35e434d1f47bd92cc9862c2fea7fd.jpg",
      note: "ผักกะหล่ำปลี โพแทสเซียมต่ำ น้ำซุปใส",
    },
    {
      id: "clear_soup_tofu",
      name: "แกงจืดเต้าหู้หมูสับ",
      src: "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/grit/italy/calcmenu/recipes/IT-recipes/rollatina-di-pollo-su-insalata-di-cereali-e-salsa-honey-mustard/LINE_ALBUM_Images%20for%20website_250423_2%20(1).jpg",
      note: "เต้าหู้อ่อน โปรตีนเบา ปรุงจืด",
    },
    {
      id: "boiled_veg",
      name: "ผักลวกจิ้ม",
      src: "https://f.ptcdn.info/826/022/000/1409234540-o.jpg",
      note: "เลือกผักโพแทสเซียมต่ำ เช่น กะหล่ำปลี แตงกวา",
    },
    {
      id: "steamed_fish",
      name: "ปลานึ่งซีอิ๊วอ่อน",
      src: "https://api2.krua.co/wp-content/uploads/2020/04/RI0738_ImageBanner_1140x507.jpg",
      note: "ปลาสด นึ่ง ไม่ใส่เกลือจัด",
    },
    {
      id: "rice_with_egg",
      name: "ข้าวต้มไข่ขาว",
      src: "https://yentafo.com/wp-content/uploads/2018/05/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A%E0%B9%84%E0%B8%82%E0%B9%88%E0%B9%80%E0%B8%84%E0%B9%87%E0%B8%A1.png",
      note: "ไข่ขาวลวก/ต้ม ใส่ในข้าวต้ม",
    },
    {
      id: "glasswater",
      name: "น้ำดื่ม (ตามแพทย์สั่ง)",
      src: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500",
      note: "ดื่มน้ำปริมาณเหมาะสม",
    },
  ],
};

const colorConfig: Record<
  Traffic,
  {
    icon: string;
    gradient: string;
    overlay: string;
    badge: string;
  }
> = {
  red: {
    icon: "🚫",
    gradient: "from-red-500 to-red-600",
    overlay: "from-red-900/20 to-transparent",
    badge: "bg-red-500",
  },
  yellow: {
    icon: "⚠️",
    gradient: "from-amber-500 to-yellow-500",
    overlay: "from-amber-900/20 to-transparent",
    badge: "bg-amber-500",
  },
  green: {
    icon: "✅",
    gradient: "from-green-500 to-emerald-500",
    overlay: "from-green-900/20 to-transparent",
    badge: "bg-green-500",
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

export default function Gallery({
  sel,
  onBack,
}: {
  sel: Traffic;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* overlay ลายวงกลม */}
      <div className="absolute inset-0 bg-circles"></div>
      {/* <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl"></div> */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">
                ←
              </span>
              <span className="font-medium">กลับ</span>
            </button>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <Icon t={sel} />
              <span className="font-bold text-lg text-gray-800">
                {title[sel]}
              </span>
            </div>
            <div className="w-20"></div> {/* Spacer */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PICS[sel].slice(0, 7).map((pic, index) => (
              <div
                key={pic.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image container with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={pic.src}
                    alt={pic.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Color overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colorConfig[sel].overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Status badge */}
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${colorConfig[sel].badge}`}
                  >
                    <Icon t={sel} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">
                    {pic.name}
                  </h3>
                  {pic.note && (
                    <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 leading-relaxed">
                      💡 {pic.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Bottom spacing */}
          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
}
