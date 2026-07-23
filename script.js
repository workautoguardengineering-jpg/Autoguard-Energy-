// ============================================================
// AUTO GUARD ENERGY: content data + interactions
// ============================================================

const products = [
  { id: "p001", img: "assets/p001.jpg", name: "HYDAC Hydraulic Accumulator & Accessories", category: "Hydraulic Systems", industries: ["Mining", "Power Generation", "Manufacturing", "Cement", "Oil & Gas", "Water & Waste"] },
  { id: "p002", img: "assets/p002.jpg", name: "Pressure Switch / Transmitter", category: "Instrumentation & Automation", industries: ["Mining", "Power Generation", "Manufacturing", "Oil & Gas", "Cement", "Water & Waste"] },
  { id: "p003", img: "assets/p003.jpg", name: "Hydraulic Rotary Actuator", category: "Hydraulic Systems", industries: ["Mining", "Manufacturing", "Cement", "Oil & Gas"] },
  { id: "p004", img: "assets/p004.jpg", name: "DC/AC Power Inverter", category: "Electrical & Power Systems", industries: ["Power Generation", "Manufacturing", "Water & Waste", "Agriculture", "Mining"] },
  { id: "p005", img: "assets/p005.jpg", name: "Generator Controller / HMI", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Manufacturing", "Oil & Gas"] },
  { id: "p006", img: "assets/p006.jpg", name: "Solenoid Valve Assembly", category: "Valves & Flow Control", industries: ["Manufacturing", "Oil & Gas", "Mining", "Water & Waste", "Agriculture"] },
  { id: "p007", img: "assets/p007.jpg", name: "Digital Energy Meter", category: "Instrumentation & Automation", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Waste", "Agriculture"] },
  { id: "p008", img: "assets/p008.jpg", name: "Industrial Power Supply", category: "Electrical & Power Systems", industries: ["Manufacturing", "Power Generation", "Water & Waste", "Cement"] },
  { id: "p009", img: "assets/p009.jpg", name: "Generator Test Controller", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Oil & Gas"] },
  { id: "p010", img: "assets/p010.jpg", name: "Protection Relay / Meter", category: "Instrumentation & Automation", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Waste"] },
  { id: "p011", img: "assets/p011.jpg", name: "High Voltage Test Unit (70 kVDC)", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Manufacturing", "Oil & Gas"] },
  { id: "p012", img: "assets/p012.jpg", name: "Industrial Power Supply Module", category: "Electrical & Power Systems", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Waste"] },
  { id: "p013", img: "assets/p013.jpg", name: "Siemens Industrial Power Supply", category: "Electrical & Power Systems", industries: ["Manufacturing", "Power Generation", "Water & Waste", "Food & Beverage", "Cement"] },
  { id: "p014", img: "assets/p014.jpg", name: "PWM Motor Driver / DC Motor Controller", category: "Instrumentation & Automation", industries: ["Manufacturing", "Water & Waste", "Agriculture", "Food & Beverage"] },
  { id: "p015", img: "assets/p015.jpg", name: "HYDAC FPU Pressure Test Kit", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Cement", "Water & Waste"] },
  { id: "p016", img: "assets/p016.jpg", name: "Industrial Battery / UPS Module", category: "Electrical & Power Systems", industries: ["Power Generation", "Manufacturing", "Mining", "Water & Waste"] },
  { id: "p017", img: "assets/p017.jpg", name: "Stainless Steel Instrument Tubing", category: "Tubing & Hoses", industries: ["Oil & Gas", "Mining", "Power Generation", "Water & Waste", "Food & Beverage"] },
  { id: "p018", img: "assets/p018.jpg", name: "Industrial Cable Reel", category: "Electrical & Power Systems", industries: ["Power Generation", "Mining", "Manufacturing", "Water & Waste", "Oil & Gas"] },
  { id: "p019", img: "assets/p019.jpg", name: "Hydraulic Hose Assembly Kit", category: "Tubing & Hoses", industries: ["Mining", "Oil & Gas", "Agriculture", "Manufacturing", "Cement"] },
  { id: "p020", img: "assets/p020.jpg", name: "Flexible Jaw Coupling", category: "Mechanical Power Transmission", industries: ["Manufacturing", "Mining", "Cement", "Water & Waste", "Food & Beverage", "Agriculture"] },
  { id: "p021", img: "assets/p021.jpg", name: "Industrial Rubber Seals / O-Rings", category: "Seals & Repair Kits", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Food & Beverage", "Agriculture", "Cement"] },
  { id: "p022", img: "assets/p022.jpg", name: "Hydraulic Seal Kit", category: "Seals & Repair Kits", industries: ["Mining", "Oil & Gas", "Manufacturing", "Cement", "Water & Waste"] },
  { id: "p023", img: "assets/p023.jpg", name: "Bronze Plain Bearing Bush", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Agriculture", "Oil & Gas"] },
  { id: "p024", img: "assets/p024.jpg", name: "Plain Bearing Bushes", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Agriculture", "Oil & Gas"] },
  { id: "p025", img: "assets/p025.jpg", name: "Pump & Bearing Spare Parts Kit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Water & Waste", "Manufacturing", "Oil & Gas"] },
  { id: "p026", img: "assets/p026.jpg", name: "Precision Wear Plate", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Oil & Gas"] },
  { id: "p027", img: "assets/p027.jpg", name: "Hydraulic Cylinder Assembly", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Agriculture", "Cement"] },
  { id: "p028", img: "assets/p028.jpg", name: "Bearing Bush Inventory", category: "Mechanical Power Transmission", industries: ["Mining", "Manufacturing", "Cement", "Agriculture", "Oil & Gas"] },
  { id: "p029", img: "assets/p029.jpg", name: "Hydraulic Manifold Block", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Water & Waste", "Cement"] },
  { id: "p030", img: "assets/p030.jpg", name: "Electric Motor / Gear Motor", category: "Motors & Drives", industries: ["Mining", "Manufacturing", "Cement", "Water & Waste", "Food & Beverage", "Agriculture"] },
  { id: "p031", img: "assets/p031.jpg", name: "HYDAC Mobile Filter Unit", category: "Filtration & Fluid Conditioning", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement", "Agriculture"] },
  { id: "p032", img: "assets/p032.jpg", name: "Oil-Air Cooler / Hydraulic Cooler", category: "Filtration & Fluid Conditioning", industries: ["Mining", "Manufacturing", "Oil & Gas", "Cement", "Water & Waste"] },
  { id: "p034", img: "assets/p034.jpg", name: "Heavy-Duty Hydraulic Cylinder", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Agriculture", "Cement"] },
  { id: "p035", img: "assets/p035.jpg", name: "Hydraulic Cylinder", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Agriculture", "Cement"] },
  { id: "p036", img: "assets/p036.jpg", name: "Bladder Accumulator", category: "Hydraulic Systems", industries: ["Mining", "Oil & Gas", "Manufacturing", "Cement", "Water & Waste"] },
  { id: "p037", img: "assets/p037.jpg", name: "Bosch Rexroth Solenoid Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement"] },
  { id: "p038", img: "assets/p038.jpg", name: "Bosch Rexroth Pressure / Flow Control Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement"] },
  { id: "p039", img: "assets/p039.jpg", name: "Bosch Rexroth Directional Control Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement"] },
  { id: "p040", img: "assets/p040.jpg", name: "4-Way Ball Valve", category: "Valves & Flow Control", industries: ["Mining", "Oil & Gas", "Manufacturing", "Water & Waste", "Cement"] },
  { id: "p041", img: "assets/p041.jpg", name: "Air / Pneumatic Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Water & Waste", "Oil & Gas", "Food & Beverage"] },
  { id: "p042", img: "assets/p042.jpg", name: "Rope Pull Safety Switch", category: "Instrumentation & Automation", industries: ["Mining", "Manufacturing", "Cement", "Food & Beverage", "Agriculture"] },
  { id: "p043", img: "assets/p043.jpg", name: "Hydraulic Solenoid Valve", category: "Valves & Flow Control", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement"] },
  { id: "p044", img: "assets/p044.jpg", name: "Butterfly Valve", category: "Valves & Flow Control", industries: ["Water & Waste", "Oil & Gas", "Manufacturing", "Food & Beverage", "Cement", "Agriculture"] },
  { id: "p045", img: "assets/p045.jpg", name: "Electric Pump Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Water & Waste", "Oil & Gas", "Agriculture"] },
  { id: "p046", img: "assets/p046.jpg", name: "Hydraulic Power Unit (HPU)", category: "Hydraulic Systems", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement"] },
  { id: "p047", img: "assets/p047.jpg", name: "Hydraulic Gear Pump", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Agriculture", "Cement"] },
  { id: "p048", img: "assets/p048.jpg", name: "Hydraulic Pump-Motor Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement"] },
  { id: "p049", img: "assets/p049.jpg", name: "Hydraulic Pump-Motor Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement"] },
  { id: "p050", img: "assets/p050.jpg", name: "Hydraulic Pump-Motor Unit", category: "Pumps & Fluid Transfer", industries: ["Mining", "Manufacturing", "Oil & Gas", "Water & Waste", "Cement", "Agriculture"] },
  { id: "p051", img: "assets/p051.jpg", name: "Electric Motor with Gearbox / Gear Motor", category: "Motors & Drives", industries: ["Mining", "Manufacturing", "Cement", "Water & Waste", "Food & Beverage"] },
  { id: "p052", img: "assets/p052.jpg", name: "Industrial Process Pump (Wilo)", category: "Pumps & Fluid Transfer", industries: ["Water & Waste", "Manufacturing", "Food & Beverage", "Agriculture", "Mining"] },
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


const partners = [
  { name: "Rapid Allweiler", file: "01-rapid-allweiler.jpg" },
  { name: "CIRCOR / IMO", file: "02-circor-imo.jpg" },
  { name: "Modine", file: "03-modine.jpg" },
  { name: "Thermofin", file: "04-thermofin.jpg" },
  { name: "Koncar", file: "05-koncar.jpg" },
  { name: "Hydro Execution AS", file: "06-hydro-execution.jpg" },
  { name: "SERGI", file: "07-sergi.jpg" },
  { name: "Viking / Deluge", file: "08-viking-deluge.jpg" },
  { name: "Carrier AHI", file: "09-carrier-ahi.jpg" },
  { name: "Pilgrim International", file: "10-pilgrim.jpg" },
  { name: "Valard Bearing", file: "11-valard-bearing.jpg" },
  { name: "Mitchell Bearings", file: "12-mitchell-bearings.jpg" },
  { name: "Mersen", file: "13-mersen.jpg" },
  { name: "Helmke", file: "14-helmke.jpg" },
  { name: "Deluge Fire Protection", file: "15-deluge-fire-protection.jpg" },
];

const services = [
  { tag: "01", title: "Consultation & Advisory", desc: "Expert industrial advice to help you make informed decisions. We assess, recommend, and align solutions to your goals." },
  { tag: "02", title: "Engineering Services", desc: "Design, analysis, and technical engineering tailored to your project needs, ensuring safety, efficiency, and compliance." },
  { tag: "03", title: "OEM Procurement Partner", desc: "We work with trusted OEMs worldwide to source genuine equipment and components of the highest quality." },
  { tag: "04", title: "Industrial Procurement Solutions", desc: "End-to-end procurement support across a wide range of industries and equipment, on time, on spec, and on budget." },
  { tag: "05", title: "Supply Chain Coordination", desc: "Seamless logistics and coordination from supplier to site. We manage the flow so you can focus on performance." },
  { tag: "06", title: "Vendor & OEM Liaison", desc: "We act as your single point of contact across multiple vendors and OEMs, simplifying communication and delivery." },
  { tag: "07", title: "Shutdown & Outage Support", desc: "Planned or unplanned, we provide rapid response procurement and technical support to minimize downtime and keep operations moving." },
  { tag: "08", title: "Technical Support & Engineering Consultation", desc: "From specification to installation advice, we provide ongoing technical input for upgrades, retrofits, and component selection." },
];

const serviceValues = [
  { title: "Quality Assured", desc: "We deliver reliable, compliant, and OEM-quality solutions." },
  { title: "Industry Focused", desc: "Solutions tailored for the industries we serve." },
  { title: "Client Centered", desc: "We build long-term partnerships through trust and performance." },
  { title: "Responsive & Reliable", desc: "Fast turnaround. Consistent support. Always dependable." },
  { title: "Value Driven", desc: "Cost-effective solutions that maximize your investment." },
];

const industriesMeta = [
  { icon: "⛏", name: "Mining", desc: "We partner with mining companies to deliver complete industrial solutions, from OEM equipment procurement and engineering support to maintenance services, technical consultation, and critical spare parts. Whether supporting processing plants, underground operations, or heavy mobile equipment, we provide reliable solutions that maximize productivity and minimize downtime." },
  { icon: "⚡", name: "Power Generation", desc: "We provide comprehensive solutions for hydropower, thermal, solar, and standby power facilities. From OEM spare parts and electrical systems to engineering consultation, maintenance support, and plant upgrades, we help utilities and industrial power producers improve reliability, efficiency, and operational performance." },
  { icon: "⚙", name: "Manufacturing", desc: "We help manufacturers maximize production efficiency through reliable engineering support, OEM procurement, industrial automation, maintenance services, and critical spare parts. From production lines and utilities to process equipment and control systems, we deliver solutions that reduce downtime and improve operational performance." },
  { icon: "🍽", name: "Food & Beverage", desc: "We provide engineering expertise, OEM procurement, and industrial solutions for food and beverage processing facilities. From hygienic process equipment and automation systems to maintenance support and critical spare parts, we help manufacturers improve efficiency, ensure product quality, and maintain continuous production." },
  { icon: "🏗", name: "Cement", desc: "We support cement manufacturers with reliable engineering services, OEM procurement, plant maintenance, and industrial automation solutions. From raw material handling and clinker production to milling, packaging, and utilities, we deliver high-performance equipment and technical expertise that improve plant reliability, efficiency, and productivity." },
  { icon: "💧", name: "Water & Waste", desc: "Autoguard Energy delivers comprehensive engineering, procurement, and maintenance solutions for municipal and industrial water systems. From water treatment and distribution to wastewater processing and pumping stations, we provide reliable equipment, automation, and technical expertise that ensure efficient, safe, and sustainable operations." },
  { icon: "🛢", name: "Oil & Gas", desc: "Autoguard Energy provides integrated engineering, procurement, and maintenance solutions for upstream, midstream, and downstream oil and gas operations. We supply OEM equipment, critical spare parts, process control systems, and technical expertise that enhance safety, reliability, and operational efficiency across production, storage, transportation, and processing facilities." },
  { icon: "🌾", name: "Agriculture", desc: "Autoguard Energy provides engineering, procurement, and maintenance solutions for agricultural operations, irrigation systems, and agro-processing facilities. We deliver reliable equipment, OEM spare parts, automation systems, and technical support that improve productivity, efficiency, and equipment reliability across the agricultural value chain." },
];

const INDUSTRY_SAMPLE_SIZE = 8;

function shuffle(arr){
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const industries = industriesMeta.map(m => {
  const matches = products.filter(p => p.industries.includes(m.name));
  return {
    icon: m.icon,
    name: m.name,
    hint: `${matches.length} items supplied`,
    desc: m.desc,
    total: matches.length,
    items: shuffle(matches).slice(0, INDUSTRY_SAMPLE_SIZE),
  };
});

// ---------- Render partner logos ----------
const partnerGrid = document.getElementById("partnerGrid");
partnerGrid.innerHTML = partners.map(p => `
  <div class="partner-logo">
    <img src="assets/${p.file}" alt="${p.name} logo" loading="lazy">
  </div>
`).join("");

// ---------- Render services ----------
const servicesGrid = document.getElementById("servicesGrid");
servicesGrid.innerHTML = services.map(s => `
  <div class="service-card">
    <span class="service-tag">${s.tag}</span>
    <h4>${s.title}</h4>
    <p>${s.desc}</p>
  </div>
`).join("");

// ---------- Render service values strip ----------
const valuesStrip = document.getElementById("valuesStrip");
valuesStrip.innerHTML = serviceValues.map(v => `
  <div class="value-item">
    <span class="value-dot"></span>
    <div>
      <h5>${v.title}</h5>
      <p>${v.desc}</p>
    </div>
  </div>
`).join("");

// ---------- Render equipment categories ----------
const equipmentGrid = document.getElementById("equipmentGrid");
equipmentGrid.innerHTML = equipment.map((e, i) => `
  <button class="industry-card" data-index="${i}">
    <span class="industry-icon">${e.icon}</span>
    <h4>${e.name}</h4>
    <span class="tap-hint">View equipment <span class="arrow">&rarr;</span></span>
  </button>
`).join("");

// ---------- Render industries ----------
const industryGrid = document.getElementById("industryGrid");
industryGrid.innerHTML = industries.map((ind, i) => `
  <button class="industry-card" data-index="${i}">
    <span class="industry-icon">${ind.icon}</span>
    <h4>${ind.name}</h4>
    <span class="tap-hint">View equipment <span class="arrow">&rarr;</span></span>
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
