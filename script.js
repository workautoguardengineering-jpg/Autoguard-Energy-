// ============================================================
// AUTO GUARD ENERGY: content data + interactions
// ============================================================

const equipment = [
  {
    icon: "🔧",
    name: "Pumps",
    hint: "5 categories",
    desc: "Centrifugal, positive displacement, and process pumps for industrial and utility applications.",
    parts: ["Centrifugal Pumps", "Submersible Pumps", "Process Pumps", "Metering Pumps", "Pump Spares"]
  },
  {
    icon: "❄",
    name: "Cooling Equipment",
    hint: "5 categories",
    desc: "Oil coolers, heat exchangers, and cooling water systems for plant and process equipment.",
    parts: ["Oil Coolers", "Heat Exchangers", "Cooling Water Systems", "Fan Assemblies", "Cooling Towers"]
  },
  {
    icon: "⏻",
    name: "Valves & Actuators",
    hint: "5 categories",
    desc: "Ball, gate, check, and control valves, along with pneumatic and electric actuators.",
    parts: ["Ball Valves", "Gate Valves", "Check Valves", "Control Valves", "Actuators"]
  },
  {
    icon: "⚙",
    name: "Hydraulic Systems",
    hint: "5 categories",
    desc: "Hydraulic power units, cylinders, motors, accumulators, and related components.",
    parts: ["Hydraulic Power Units", "Hydraulic Cylinders", "Hydraulic Motors", "Accumulators", "Hoses & Fittings"]
  },
  {
    icon: "⚡",
    name: "Electrical Components",
    hint: "5 categories",
    desc: "Motors, drives, switchgear, circuit breakers, and low and medium voltage equipment.",
    parts: ["Motors & Drives", "Circuit Breakers", "Switchgear", "Selector Switches", "DC & Battery Systems"]
  },
  {
    icon: "◎",
    name: "Instrumentation",
    hint: "5 categories",
    desc: "Flowmeters, pressure and temperature gauges, level sensors, and position transducers.",
    parts: ["Flowmeters", "Pressure Gauges", "Temperature Gauges", "Level Sensors", "Position Transducers"]
  },
  {
    icon: "○",
    name: "Bearings & Seals",
    hint: "5 categories",
    desc: "Plain and roller bearings, elastomer seals, and wear components for rotating equipment.",
    parts: ["Plain Bearings", "Roller Bearings", "Elastomer Seals", "Shaft Seals", "Wear Parts"]
  },
  {
    icon: "▦",
    name: "Automation & Control",
    hint: "5 categories",
    desc: "Control panels, touch screen interfaces, input and output modules, and network devices.",
    parts: ["Control Units", "Touch Screen Panels", "Input & Output Modules", "Network Interfaces", "Energy Meters"]
  },
];

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

const industries = [
  {
    icon: "⛏",
    name: "Mining",
    hint: "5 categories",
    desc: "Genuine OEM parts and equipment for mining operations, from processing plants to heavy fleet support.",
    parts: ["Crusher & Mill Components", "Conveyor Systems", "Pumps & Valves", "Hydraulic Cylinders", "Wear Parts"]
  },
  {
    icon: "⚡",
    name: "Power Generation",
    hint: "Hydro · Thermal · Solar",
    desc: "Mechanical, electrical, and auxiliary systems for hydropower, thermal, and solar plants, from turbines to control systems.",
    parts: ["Turbine & Governor Parts", "Generators", "Hydraulic Power Units", "Cooling Water Systems", "Control & Automation"]
  },
  {
    icon: "⚙",
    name: "Manufacturing",
    hint: "5 categories",
    desc: "Spare parts and replacement components to keep production lines running with minimal disruption.",
    parts: ["Motors & Drives", "Gearboxes", "Sensors & Switches", "Control Panels", "Seals & Gaskets"]
  },
  {
    icon: "🍽",
    name: "Food & Beverage",
    hint: "5 categories",
    desc: "Hygienic process equipment components for food and beverage processing facilities.",
    parts: ["Pumps & Valves", "Process Instrumentation", "Stainless Fittings", "Filtration Systems", "Piping Components"]
  },
  {
    icon: "🏗",
    name: "Cement",
    hint: "5 categories",
    desc: "Wear resistant and process components for cement production, milling, and material handling.",
    parts: ["Mill Liners & Wear Parts", "Kiln Components", "Conveyor Systems", "Fans & Blowers", "Hydraulic Systems"]
  },
  {
    icon: "💧",
    name: "Water & Wastewater",
    hint: "5 categories",
    desc: "Pumping, valve, and instrumentation components for municipal and industrial water infrastructure.",
    parts: ["Pumps", "Valves & Actuators", "Flowmeters", "Level Sensors", "Filtration Media"]
  },
  {
    icon: "🛢",
    name: "Oil & Gas",
    hint: "5 categories",
    desc: "Certified components for upstream, midstream, and downstream oil and gas operations.",
    parts: ["Valves & Actuators", "Pumps & Compressors", "Seals & Gaskets", "Instrumentation", "Safety Systems"]
  },
  {
    icon: "🌾",
    name: "Agriculture",
    hint: "5 categories",
    desc: "Equipment and spare parts supporting agricultural processing and heavy farm operations.",
    parts: ["Irrigation Pumps", "Motors & Drives", "Processing Equipment", "Hydraulic Components", "Wear Parts"]
  },
];

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
    <span class="hint">${e.hint}</span>
  </button>
`).join("");

// ---------- Render industries ----------
const industryGrid = document.getElementById("industryGrid");
industryGrid.innerHTML = industries.map((ind, i) => `
  <button class="industry-card" data-index="${i}">
    <span class="industry-icon">${ind.icon}</span>
    <h4>${ind.name}</h4>
    <span class="hint">${ind.hint}</span>
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
  panelParts.innerHTML = item.parts.map(p => `
    <div class="part-tile">
      <span class="tile-icon">▢</span>
      ${p}
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
  openPanel(ind, `${ind.name}: sample sourcing categories`, "Photos of specific parts sourced for this sector will be added here. Contact us for a full catalogue.");
});

equipmentGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".industry-card");
  if (!btn) return;
  const eq = equipment[Number(btn.dataset.index)];
  openPanel(eq, `${eq.name}: sample equipment supplied`, "Photos of the equipment we've supplied in this category will be added here.");
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
