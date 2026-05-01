export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "gen-01",
    name: "Precision Surgical Scissors",
    category: "General Surgery",
    description: "Ultra-sharp stainless steel scissors for precise tissue dissection.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.27.09%E2%80%AFPM.png?alt=media&token=9e986aab-23a2-4f64-9ec0-2c593ba47d95",
  },
  {
    id: "gen-02",
    name: "Tissue Forceps",
    category: "General Surgery",
    description: "Fine-tipped forceps for delicate handling of anatomical structures.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.26.37%E2%80%AFPM.png?alt=media&token=e182da56-f8e0-472c-9bec-b212de3e2cf9",
  },
  {
    id: "den-01",
    name: "Dental Extraction Kit",
    category: "Dental",
    description: "Ergonomic elevators for efficient and safe tooth extraction.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.26.26%E2%80%AFPM.png?alt=media&token=86a14614-a84f-4860-a469-2d0ff0899964",
  },
  {
    id: "ort-01",
    name: "Bone Fixation Tools",
    category: "Orthopedic",
    description: "Heavy-duty retractors designed for optimal surgical field visibility.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.26.54%E2%80%AFPM.png?alt=media&token=707beda2-4e0f-4941-bb32-437a216f8bed",
  },
  {
    id: "cv-01",
    name: "Cardiovascular Clamps",
    category: "Cardiovascular",
    description: "Non-traumatic clamps for precise vascular occlusion.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.27.54%E2%80%AFPM.png?alt=media&token=1e18b20a-20b2-4452-b05e-3784ef498720",
  },
  {
    id: "gyn-01",
    name: "Speculums & Dilators",
    category: "Gynecology",
    description: "High-grade gynecological instruments for comprehensive examinations.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.27.36%E2%80%AFPM.png?alt=media&token=d6728cba-6508-43af-87db-509e109f841c",
  },
  {
    id: "spec-01",
    name: "Retractor Systems",
    category: "General Surgery",
    description: "Modular retractor systems for varying surgical depths and access points.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.27.22%E2%80%AFPM.png?alt=media&token=2cabcf42-f86d-4185-8493-06a19a3fa7f6",
  },
  {
    id: "spec-02",
    name: "Advanced Vascular Clamps",
    category: "Cardiovascular",
    description: "High-precision vascular clamps with micro-serrated jaws for trauma-free occlusion.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.33.51%E2%80%AFPM.png?alt=media&token=bb52035a-7b10-4004-86f4-1f4e6b15d30d",
  },
  {
    id: "spec-03",
    name: "Gynaecological Curved Forceps",
    category: "Gynecology",
    description: "Ergonomically curved forceps designed for specialized obstetric and gynecological procedures.",
    image: "https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Screenshot%202026-04-30%20at%204.34.03%E2%80%AFPM.png?alt=media&token=44679012-e788-4db6-bc6b-acf274a3b327",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Surgical Site Precision",
    excerpt: "How modern instrumentation is reducing recovery times in robotic-assisted surgeries.",
    date: "Oct 24, 2023",
    content: `Precision in surgery is no longer just about the skill of the surgeon; it is increasingly about the engineering behind the tools they use. Modern surgical instruments are undergoing a transformation, integrating high-grade specialized steel alloys with finishes that reduce glare and improve grip even in fluid-heavy environments.

In the realm of robotic-assisted surgery, the instruments are becoming more modular. This allows for rapid replacement and specialized tips that can perform microscopic dissection with minimal tissue trauma. Reduced trauma at the surgical site directly correlates to faster patient recovery, lower risk of infection, and better long-term clinical outcomes. 

SF-Instrument is at the forefront of this evolution, utilizing AISI 420 series surgical steel that provides the perfect balance between hardness (for edge retention) and flexibility (to prevent breakage under stress). Our manufacturing processes in Sialkot combine these high-tech materials with hand-polished finishes that automated machines simply cannot replicate.`
  },
  {
    id: 2,
    title: "Maintaining Your Precision Tools",
    excerpt: "Best practices for sterilization and preservation of high-grade surgical stainless steel.",
    date: "Sep 15, 2023",
    content: `High-quality surgical instruments are a significant investment and require meticulous care to ensure longevity and safety. The primary threat to stainless steel tools is not 'rust' in the traditional sense, but chemical corrosion from improper sterilization or residual protein buildup.

Cleaning should begin immediately after a procedure. Allowing blood or saline to dry on the instrument can cause pitting—microscopic holes—that can harbor bacteria even after sterilization. We recommend using pH-neutral detergents and ultrasonic cleaning to reach micro-fine joints and serrations.

Sterilization via Autoclave is standard, but the cooling phase is critical. Rapid temperature changes can warp the fine alignment of forceps and scissors. Furthermore, always ensure that ratcheted instruments are sterilized in the open position to allow the steam to penetrate all surfaces. By following these rigorous maintenance protocols, you ensure that your SF-Instrument tools remain sharp, reliable, and sterile for years of service.`
  },
];

export const CONTACT_INFO = {
  phone: "+92 319 4151410",
  email: "sfinstrument09@gmail.com",
  address: "Small Industrial Estate, Sialkot, Pakistan",
};
