// ============================================================
// AUTO GUARD ENERGY: content data + interactions
// ============================================================

const products = [
  { id: "p001", img: "assets/p001.jpg", name: "HYDAC Hydraulic Accumulator & Accessories", category: "Hydraulic Systems", industries: ["Mining", "Power Generation", "Manufacturing", "Cement", "Oil & Gas", "Water & Wastewater"] },
  { id: "p002", img: "assets/p002.jpg", name: "Pressure Switch / Transmitter", category: "Instrumentation & Automation", industries: ["Mining", "Power Generation", "Manufacturing", "Oil & Gas", "Cement", "Water & Wastewater"] },
  { id: "p003", img: "assets/p003.jpg", name: "Hydraulic Rotary Actuator", category: "Hydraulic Systems", industries: ["Mining", "Manufacturing", "Cement", "Oil & Gas"] },
  { id: "p004", img: "assets/p004.jpg", name: "DC/AC Power Inverter", category: "Electrical & Power Systems", industries: ["Power Generation", "Manufacturing", "Water & Wastewater", "Agriculture", "Mining"] },
  { id: "p005", img: "assets/p005.jpg", name: "Generator Controller / HMI", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Manufacturing", "Oil & Gas"] },
  { id: "p006", img: "assets/p006.jpg", name: "Solenoid Valve Assembly", category: "Valves & Flow Control", industries: ["Manufacturing", "Oil & Gas", "Mining", "Water & Wastewater", "Agriculture"] },
  { id: "p007", img: "assets/p007.jpg", name: "Digital Energy Meter", category: "Instrumentation & Automation", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Wastewater", "Agriculture"] },
  { id: "p008", img: "assets/p008.jpg", name: "Industrial Power Supply", category: "Electrical & Power Systems", industries: ["Manufacturing", "Power Generation", "Water & Wastewater", "Cement"] },
  { id: "p009", img: "assets/p009.jpg", name: "Generator Test Controller", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Oil & Gas"] },
  { id: "p010", img: "assets/p010.jpg", name: "Protection Relay / Meter", category: "Instrumentation & Automation", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Wastewater"] },
  { id: "p011", img: "assets/p011.jpg", name: "High Voltage Test Unit (70 kVDC)", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Manufacturing", "Oil & Gas"] },
  { id: "p012", img: "assets/p012.jpg", name: "Industrial Power Supply Module", category: "Electrical & Power Systems", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Wastewater"] },
  { id: "p013", img: "assets/p013.jpg", name: "Siemens Industrial Power Supply", category: "Electrical & Power Systems", industries: ["Manufacturing", "Power Generation", "Water & Wastewater", "Food & Beverage", "Cement"] },
  { id: "p014", img: "assets/p014.jpg", name: "PWM Motor Driver / DC Motor Controller", category: "Instrumentation & Automation", industries: ["Manufacturing", "Water & Wastewater", "Agriculture", "Food & Beverage"] },
  { id: "p015", img: "assets/p015.jpg", name: "HYDAC FPU Pressure Test Kit", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Cement", "Water & Wastewater"] },
  { id: "p016", img: "assets/p016.jpg", name: "Industrial Battery / UPS Module", category: "Electrical & Power Systems", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Wastewater"] },
  { id: "p017", img: "assets/p017.jpg", name: "Stainless Steel Instrument Tubing", category: "Tubing & Hoses", industries: ["Oil & Gas", "Mining", "Power Generation", "Water & Wastewater", "Food & Beverage"] },
  { id: "p018", img: "assets/p018.jpg", name: "Industrial Cable Reel", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Manufacturing", "Water & Wastewater", "Oil & Gas"] },
  { id: "p019", img: "assets/p019.jpg", name: "Hydraulic Hose Assembly Kit", category: "Tubing & Hoses", industries: ["Mining", "Oil & Gas", "Agriculture", "Manufacturing", "Cement"] },
  { id: "p020", img: "assets/p020.jpg", name: "Flexible Jaw Coupling", category: "Mechanical Power Transmission", industries: ["Manufacturing", "Mining", "Cement", "Water & Wastewater", "Food & Beverage", "Agriculture"] },
  { id: "p021", img: "assets/p021.jpg", name: "Industrial Rubber Seals / O-Rings", category: "Seals & Repair Kits", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Food & Beverage", "Agriculture", "Cement"] },
  { id: "p022", img: "assets/p022.jpg", name: "Hydraulic Seal Kit", category: "Seals & Repair Kits", industries: ["Mining", "Oil & Gas", "Manufacturing", "Cement", "Water & Wastewater"] },
  { id: "p023", img: "assets/p023.jpg", name: "Bronze Plain Bearing Bush", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Agriculture", "Oil & Gas"] },
  { id: "p024", img: "assets/p024.jpg", name: "Plain Bearing Bushes", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Agriculture", "Oil & Gas"] },
  { id: "p025", img: "assets/p025.jpg", name: "Pump & Bearing Spare Parts Kit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Water & Wastewater", "Manufacturing", "Oil & Gas"] },
  { id: "p026", img: "assets/p026.jpg", name: "Precision Wear Plate", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Oil & Gas"] },
  { id: "p027", img: "assets/p027.jpg", name: "Hydraulic Cylinder Assembly", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Agriculture", "Cement"] },
  { id: "p028", img: "assets/p028.jpg", name: "Bearing Bush Inventory", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Agriculture", "Oil & Gas"] },
  { id: "p029", img: "assets/p029.jpg", name: "Hydraulic Manifold Block", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Water & Wastewater", "Cement"] },
  { id: "p030", img: "assets/p030.jpg", name: "Electric Motor / Gear Motor", category: "Motors & Drives", industries: ["Mining", "Manufacturing", "Cement", "Water & Wastewater", "Food & Beverage", "Agriculture"] },
  { id: "p031", img: "assets/p031.jpg", name: "HYDAC Mobile Filter Unit", category: "Filtration & Fluid Conditioning", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement", "Agriculture"] },
  { id: "p032", img: "assets/p032.jpg", name: "Oil-Air Cooler / Hydraulic Cooler", category: "Filtration & Fluid Conditioning", industries: ["Mining", "Manufacturing", "Oil & Gas", "Cement", "Water & Wastewater"] },
  { id: "p034", img: "assets/p034.jpg", name: "Heavy-Duty Hydraulic Cylinder", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Agriculture", "Cement"] },
  { id: "p035", img: "assets/p035.jpg", name: "Hydraulic Cylinder", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Agriculture", "Cement"] },
  { id: "p036", img: "assets/p036.jpg", name: "Bladder Accumulator", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Cement", "Water & Wastewater"] },
  { id: "p037", img: "assets/p037.jpg", name: "Bosch Rexroth Solenoid Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement"] },
  { id: "p038", img: "assets/p038.jpg", name: "Bosch Rexroth Pressure / Flow Control Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement"] },
  { id: "p039", img: "assets/p039.jpg", name: "Bosch Rexroth Directional Control Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement"] },
  { id: "p040", img: "assets/p040.jpg", name: "4-Way Ball Valve", category: "Valves & Flow Control", industries: ["Mining", "Oil & Gas", "Manufacturing", "Water & Wastewater", "Cement"] },
  { id: "p041", img: "assets/p041.jpg", name: "Air / Pneumatic Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Water & Wastewater", "Oil & Gas", "Food & Beverage"] },
  { id: "p042", img: "assets/p042.jpg", name: "Rope Pull Safety Switch", category: "Instrumentation & Automation", industries: ["Mining", "Manufacturing", "Cement", "Food & Beverage", "Agriculture"] },
  { id: "p043", img: "assets/p043.jpg", name: "Hydraulic Solenoid Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement"] },
  { id: "p044", img: "assets/p044.jpg", name: "Butterfly Valve", category: "Valves & Flow Control", industries: ["Water & Wastewater", "Oil & Gas", "Manufacturing", "Food & Beverage", "Cement", "Agriculture"] },
  { id: "p045", img: "assets/p045.jpg", name: "Electric Pump Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Water & Wastewater", "Oil & Gas", "Agriculture"] },
  { id: "p046", img: "assets/p046.jpg", name: "Hydraulic Power Unit (HPU)", category: "Hydraulic Systems", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement"] },
  { id: "p047", img: "assets/p047.jpg", name: "Hydraulic Gear Pump", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Agriculture", "Cement"] },
  { id: "p048", img: "assets/p048.jpg", name: "Hydraulic Pump-Motor Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement"] },
  { id: "p049", img: "assets/p049.jpg", name: "Hydraulic Pump-Motor Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement"] },
  { id: "p050", img: "assets/p050.jpg", name: "Hydraulic Pump-Motor Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Wastewater", "Cement", "Agriculture"] },
  { id: "p051", img: "assets/p051.jpg", name: "Electric Motor with Gearbox / Gear Motor", category: "Motors & Drives", industries: ["Mining", "Manufacturing", "Cement", "Water & Wastewater", "Food & Beverage"] },
  { id: "p052", img: "assets/p052.jpg", name: "Industrial Process Pump (Wilo)", category: "Pumps & Fluid Transfer", industries: ["Water & Wastewater", "Manufacturing", "Food & Beverage", "Agriculture", "Mining"] },
  { id: "p053", img: "assets/p053.jpg", name: "Hydraulic Rotary Actuator", category: "Hydraulic Systems", industries: ["Mining", "Manufacturing", "Cement", "Oil & Gas"] },
  { id: "p054", img: "assets/p054.jpg", name: "Hydraulic Rotary Actuator (Close-up)", category: "Hydraulic Systems", industries: ["Mining", "Manufacturing", "Cement", "Oil & Gas"] },
];

const equipmentMeta = [
  { category: "Hydraulic Systems", icon: "⚙", desc: "Hydraulic power units, cylinders, actuators, and accumulators for industrial systems." },
  { category: "Electrical & Power Systems", icon: "⚡", desc: "Motors, inverters, power supplies, and control equipment for electrical systems." },
  { category: "Valves & Flow Control", icon: "⏻", desc: "Solenoid, ball, butterfly, and directional control valves for fluid and process control." },
  { category: "Pumps & Fluid Transfer", icon: "🔧", desc: "Centrifugal, gear, and process pumps, along with pump and motor units." },
  { category: "Instrumentation & Automation", icon: "◎", desc: "Sensors, switches, meters, and controllers for monitoring and automation." },
  { category: "Mechanical Power Transmission", icon: "○", desc: "Bearings, bushings, couplings, and wear components for rotating equipment." },
  { category: "Filtration & Fluid Conditioning", icon: "❄", desc: "Filter units and coolers that keep hydraulic and process fluids clean and controlled." },
  { category: "Seals & Repair Kits", icon: "✚", desc: "Seal kits and O-rings for hydraulic and mechanical repair work." },
  { category: "Motors & Drives", icon: "⟲", desc: "Electric motors and gear motors for driving industrial equipment." },
  { category: "Tubing & Hoses", icon: "〰", desc: "Instrument tubing and hydraulic hose assemblies for fluid and pressure lines." },
];

const equipment = equipmentMeta.map(m => ({
  icon: m.icon,
  name: m.category,
  hint: `${products.filter(p => p.category === m.category).length} items supplied`,
  desc: m.desc,
  items: products.filter(p => p.category === m.category),
}));


const services = [
  { tag: "SVC-01", title: "OEM Procurement Solutions", desc: "Direct sourcing of genuine equipment and parts through verified OEM relationships." },
  { tag: "SVC-02", title: "Industrial Spare Parts Supply", desc: "Mechanical, electrical, hydraulic, and automation components for critical assets." },
  { tag: "SVC-03", title: "Replacement Equipment Sourcing", desc: "Sourcing full replacement units when repair is no longer viable." },
  { tag: "SVC-04", title: "Technical Procurement Support", desc: "Specification review and technical validation before you commit to an order." },
  { tag: "SVC-05", title: "Supply Chain Coordination", desc: "Coordinating logistics all the way from the OEM to your facility." },
  { tag: "SVC-06", title: "Vendor & OEM Liaison", desc: "Acting as your single point of contact across multiple suppliers." },
  { tag: "SVC-07", title: "Shutdown & Outage Support", desc: "Rapid procurement support for planned and emergency shutdowns." },
  { tag: "SVC-08", title: "Engineering Consultation", desc: "Technical input on retrofits, upgrades, and component selection." },
];

const industriesMeta = [
  { icon: "⛏", name: "Mining", desc: "Genuine OEM parts and equipment for mining operations, from processing plants to heavy fleet support." },
  { icon: "⚡", name: "Power Generation", desc: "Mechanical, electrical, and auxiliary systems for hydropower, thermal, and solar plants, from turbines to control systems." },
  { icon: "⚙", name: "Manufacturing", desc: "Spare parts and replacement components to keep production lines running with minimal disruption." },
  { icon: "🍽", name: "Food & Beverage", desc: "Hygienic process equipment components for food and beverage processing facilities." },
  { icon: "🏗", name: "Cement", desc: "Wear resistant and process components for cement production, milling, and material handling." },
  { icon: "💧", name: "Water & Wastewater", desc: "Pumping, valve, and instrumentation components for municipal and industrial water infrastructure." },
  { icon: "🛢", name: "Oil & Gas", desc: "Certified components for upstream, midstream, and downstream oil and gas operations." },
  { icon: "🌾", name: "Agriculture", desc: "Equipment and spare parts supporting agricultural processing and heavy farm operations." },
];

const INDUSTRY_SAMPLE_SIZE = 8;

const industries = industriesMeta.map(m => {
  const matches = products.filter(p => p.industries.includes(m.name));
  return {
    icon: m.icon,
    name: m.name,
    hint: `${matches.length} items supplied`,
    desc: m.desc,
    total: matches.length,
    items: matches.slice(0, INDUSTRY_SAMPLE_SIZE),
  };
});

// ---------- Render services ----------
const servicesGrid = document.getElementById("servicesGrid");
servicesGrid.innerHTML = services.map(s => `
  <div class="service-card">
    <span class="service-tag">${s.tag}</span>
    <h4>${s.title}</h4>
    <p>${s.desc}</p>
  </div>
`).join("");

// ---------- Render equipment categories ----------
const equipmentGrid = document.getElementById("equipmentGrid");
equipmentGrid.innerHTML = equipment.map((e, i) => `
  <button class="industry-card" data-index="${i}">
    <span class="industry-icon">${e.icon}</span>
    <h4>${e.name}</h4>
  </button>
`).join("");

// ---------- Render industries ----------
const industryGrid = document.getElementById("industryGrid");
industryGrid.innerHTML = industries.map((ind, i) => `
  <button class="industry-card" data-index="${i}">
    <span class="industry-icon">${ind.icon}</span>
    <h4>${ind.name}</h4>
  </button>
`).join("");

// ---------- Shared detail panel (Industries + Equipment) ----------
const panel = document.getElementById("industryPanel");
const backdrop = document.getElementById("panelBackdrop");
const panelTitle = document.getElementById("panelTitle");
const panelDesc = document.getElementById("panelDesc");
const panelEyebrow = document.getElementById("panelEyebrow");
const panelParts = document.getElementById("panelParts");
const panelNote = document.getElementById("panelNote");
const panelClose = document.getElementById("panelClose");

function openPanel(item, eyebrowLabel, noteText){
  panelEyebrow.innerHTML = `<span class="rivet"></span>${eyebrowLabel}<span class="rivet"></span>`;
  panelTitle.textContent = item.name;
  panelDesc.textContent = item.desc;
  panelParts.innerHTML = item.items.map(p => `
    <div class="part-tile part-tile-photo">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <span>${p.name}</span>
    </div>
  `).join("");
  panelNote.textContent = noteText;
  panel.classList.add("open");
  backdrop.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePanel(){
  panel.classList.remove("open");
  backdrop.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

industryGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".industry-card");
  if (!btn) return;
  const ind = industries[Number(btn.dataset.index)];
  const noteText = ind.total > ind.items.length
    ? "A sample of the equipment we've supplied for this sector. Contact us for the full range."
    : "Equipment we've supplied for this sector.";
  openPanel(ind, `${ind.name}: equipment supplied`, noteText);
});

equipmentGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".industry-card");
  if (!btn) return;
  const eq = equipment[Number(btn.dataset.index)];
  openPanel(eq, `${eq.name}: equipment supplied`, "Equipment we've supplied in this category. Contact us for specific part numbers or availability.");
});

panelClose.addEventListener("click", closePanel);
backdrop.addEventListener("click", closePanel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePanel();
});

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("main-nav");
navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") mainNav.classList.remove("nav-open");
});

// ---------- Contact form (front-end only placeholder) ----------
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "Thanks, we've noted your request. Connect a form backend (like Formspree) or an API route to actually receive these submissions.";
  contactForm.reset();
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
