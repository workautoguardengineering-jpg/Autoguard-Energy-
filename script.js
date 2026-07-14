// ============================================================
// AUTO GUARD ENERGY — content data + interactions
// ============================================================

const services = [
  { tag: "SVC-01", title: "OEM Procurement Solutions", desc: "Direct sourcing of genuine equipment and parts through verified OEM relationships." },
  { tag: "SVC-02", title: "Industrial Spare Parts Supply", desc: "Mechanical, electrical, hydraulic, and automation components for critical assets." },
  { tag: "SVC-03", title: "Replacement Equipment Sourcing", desc: "Sourcing full replacement units when repair is no longer viable." },
  { tag: "SVC-04", title: "Technical Procurement Support", desc: "Specification review and technical validation before you commit to an order." },
  { tag: "SVC-05", title: "Supply Chain Coordination", desc: "End-to-end logistics coordination from OEM to your facility." },
  { tag: "SVC-06", title: "Vendor & OEM Liaison", desc: "Acting as your single point of contact across multiple suppliers." },
  { tag: "SVC-07", title: "Shutdown & Outage Support", desc: "Rapid procurement support for planned and emergency shutdowns." },
  { tag: "SVC-08", title: "Engineering Consultation", desc: "Technical input on retrofits, upgrades, and component selection." },
];

const industries = [
  {
    icon: "⛏",
    name: "Mining",
    hint: "8 categories",
    desc: "Genuine OEM parts and equipment for mining operations, from processing plants to heavy fleet support.",
    parts: ["Crusher & Mill Components", "Conveyor Systems", "Pumps & Valves", "Hydraulic Cylinders", "Bearings & Seals", "Electrical Drives", "Instrumentation", "Wear Parts"]
  },
  {
    icon: "⚡",
    name: "Power Generation",
    hint: "Hydro · Thermal · Solar",
    desc: "Mechanical, electrical, and auxiliary systems for hydropower, thermal, and solar plants — turbines to control systems.",
    parts: ["Turbine & Governor Parts", "Generators", "Hydraulic Power Units", "Cooling Water Systems", "LV/MV Electrical Systems", "DC/Battery Systems", "Control & Automation", "Instrumentation"]
  },
  {
    icon: "⚙",
    name: "Manufacturing",
    hint: "8 categories",
    desc: "Spare parts and replacement components to keep production lines running with minimal disruption.",
    parts: ["Motors & Drives", "Gearboxes", "Sensors & Switches", "Pneumatic Components", "Conveyor Parts", "Control Panels", "Bearings", "Seals & Gaskets"]
  },
  {
    icon: "🍽",
    name: "Food & Beverage",
    hint: "8 categories",
    desc: "Hygienic-grade and process equipment components for food and beverage processing facilities.",
    parts: ["Pumps & Valves", "Process Instrumentation", "Stainless Fittings", "Motors & Drives", "Filtration Systems", "Control Systems", "Seals & Gaskets", "Piping Components"]
  },
  {
    icon: "🏗",
    name: "Cement",
    hint: "8 categories",
    desc: "Wear-resistant and process components for cement production, milling, and material handling.",
    parts: ["Mill Liners & Wear Parts", "Kiln Components", "Conveyor Systems", "Fans & Blowers", "Bearings", "Hydraulic Systems", "Electrical Drives", "Instrumentation"]
  },
  {
    icon: "💧",
    name: "Water & Wastewater",
    hint: "8 categories",
    desc: "Pumping, valve, and instrumentation components for municipal and industrial water infrastructure.",
    parts: ["Pumps", "Valves & Actuators", "Flowmeters", "Level Sensors", "Motors", "Control Panels", "Piping Components", "Filtration Media"]
  },
  {
    icon: "🛢",
    name: "Oil & Gas",
    hint: "8 categories",
    desc: "Certified components for upstream, midstream, and downstream oil and gas operations.",
    parts: ["Valves & Actuators", "Pumps & Compressors", "Seals & Gaskets", "Instrumentation", "Pressure Vessels Parts", "Electrical Components", "Piping & Fittings", "Safety Systems"]
  },
  {
    icon: "🌾",
    name: "Agriculture",
    hint: "8 categories",
    desc: "Equipment and spare parts supporting agro-processing and heavy agricultural operations.",
    parts: ["Irrigation Pumps", "Motors & Drives", "Processing Equipment", "Hydraulic Components", "Bearings & Seals", "Control Systems", "Piping Components", "Wear Parts"]
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

// ---------- Render industries ----------
const industryGrid = document.getElementById("industryGrid");
industryGrid.innerHTML = industries.map((ind, i) => `
  <button class="industry-card" data-index="${i}">
    <span class="industry-icon">${ind.icon}</span>
    <h4>${ind.name}</h4>
    <span class="hint">${ind.hint}</span>
  </button>
`).join("");

// ---------- Industry detail panel ----------
const panel = document.getElementById("industryPanel");
const backdrop = document.getElementById("panelBackdrop");
const panelTitle = document.getElementById("panelTitle");
const panelDesc = document.getElementById("panelDesc");
const panelEyebrow = document.getElementById("panelEyebrow");
const panelParts = document.getElementById("panelParts");
const panelClose = document.getElementById("panelClose");

function openIndustry(i){
  const ind = industries[i];
  panelEyebrow.innerHTML = `<span class="rivet"></span>${ind.name} — Sample Sourcing Categories<span class="rivet"></span>`;
  panelTitle.textContent = ind.name;
  panelDesc.textContent = ind.desc;
  panelParts.innerHTML = ind.parts.map(p => `
    <div class="part-tile">
      <span class="tile-icon">▢</span>
      ${p}
    </div>
  `).join("");
  panel.classList.add("open");
  backdrop.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeIndustry(){
  panel.classList.remove("open");
  backdrop.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

industryGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".industry-card");
  if (!btn) return;
  openIndustry(Number(btn.dataset.index));
});
panelClose.addEventListener("click", closeIndustry);
backdrop.addEventListener("click", closeIndustry);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeIndustry();
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
  formNote.textContent = "Thanks — your request has been noted. Connect a form backend (e.g. Formspree, or an API route) to receive these submissions.";
  contactForm.reset();
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
