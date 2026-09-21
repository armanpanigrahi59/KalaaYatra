/* ============================================================
   KALAYATRA ART MAP — data
   x, y are positions on a 0–1000 stylized viewBox (not GPS-precise —
   this is an illustrative map, roughly proportioned north-south /
   east-west, not a geographic projection).
   ============================================================ */
const categories = [
  { id: "ancient",   label: "Ancient Urban Art",        color: "var(--cat-ancient)" },
  { id: "classical", label: "Classical Sculpture",      color: "var(--cat-classical)" },
  { id: "cave",      label: "Cave & Mural Art",         color: "var(--cat-cave)" },
  { id: "temple",    label: "Temple Sculpture",         color: "var(--cat-temple)" },
  { id: "bronze",    label: "Bronze & Devotional Art",  color: "var(--cat-bronze)" },
  { id: "miniature", label: "Miniature Painting",       color: "var(--cat-miniature)" },
  { id: "modern",    label: "Modern Art Movements",     color: "var(--cat-modern)" }
];

const locations = [
  {
    id: "dholavira",
    name: "Dholavira",
    state: "Gujarat",
    category: "ancient",
    period: "c. 2650 – 1900 BCE",
    icon: "🏺",
    x: 75, y: 423,
    summary: "One of the largest, best-preserved Indus Valley cities, where urban planning itself became an art form.",
    context: "Dholavira's stone-and-mud-brick city was divided into a citadel, middle town, and lower town, connected by wide roads and a sophisticated water-harvesting system of reservoirs cut into rock. A ten-character inscription found near its gate — the 'Dholavira Signboard' — is among the longest Indus-script inscriptions ever found, though it remains undeciphered. Seals, beads, and painted pottery recovered here show the same geometric discipline found across the Indus world.",
    highlights: [
      { name: "Dholavira Signboard", note: "One of the longest inscriptions in the still-undeciphered Indus script." },
      { name: "Rock-cut reservoirs", note: "Water-harvesting stepwells that doubled as civic engineering and art." },
      { name: "Etched carnelian beads", note: "Trade goods crafted here have been found as far as Mesopotamia." }
    ],
    fact: "Dholavira was inscribed as a UNESCO World Heritage Site in 2021."
  },
  {
    id: "sarnath",
    name: "Sarnath",
    state: "Uttar Pradesh",
    category: "classical",
    period: "c. 3rd century BCE – 6th century CE",
    icon: "🦁",
    x: 509, y: 374,
    summary: "The site of the Buddha's first sermon, and the workshop for two of India's most influential sculptural styles.",
    context: "Ashoka raised his polished lion-capital pillar here in the 3rd century BCE, and centuries later Gupta-era sculptors returned to the same site to carve the serene seated Buddha now considered the definitive image of the Buddha in Indian art. The 'Sarnath style' — thin, near-transparent drapery, a calm downward gaze, minimal ornament — became a visual language that spread with Buddhism across Asia.",
    highlights: [
      { name: "Lion Capital of Ashoka", note: "India's national emblem, carved with a mirror-like Mauryan polish." },
      { name: "Sarnath Buddha", note: "The Gupta-era seated Buddha that defined the classical Buddhist image." },
      { name: "Dhamek Stupa", note: "A brick-and-stone stupa marking the exact spot of the first sermon." }
    ],
    fact: "The four-lion motif from Sarnath appears on every Indian banknote and coin as the national emblem."
  },
  {
    id: "ajanta-ellora",
    name: "Ajanta & Ellora",
    state: "Maharashtra",
    category: "cave",
    period: "c. 2nd century BCE – 10th century CE",
    icon: "🖼️",
    x: 261, y: 532,
    summary: "Two cliff faces near Aurangabad holding some of the most complete Buddhist, Hindu, and Jain rock-cut art in the world.",
    context: "Ajanta's 30 caves, carved into a horseshoe gorge, are painted floor to ceiling with Buddhist murals — jataka tales, courtly scenes, and bodhisattvas rendered in tempera that survived over a thousand years of sealed darkness. A few kilometres away, Ellora's 34 caves move chronologically through Buddhist, Hindu, and Jain shrines, climaxing in the Kailasa Temple, an entire freestanding temple carved downward out of a single basalt hillside.",
    highlights: [
      { name: "Padmapani mural, Cave 1", note: "A bodhisattva holding a blue lotus — Ajanta's most reproduced image." },
      { name: "Kailasa Temple, Ellora", note: "A full temple excavated top-down from one rock, with no bricks or mortar." },
      { name: "Vishvakarma Cave", note: "A Buddhist hall with a rock-cut stupa and a ribbed, vaulted ceiling." }
    ],
    fact: "Ellora's Kailasa Temple required removing an estimated 200,000 tonnes of rock — with only hammers and chisels."
  },
  {
    id: "khajuraho",
    name: "Khajuraho",
    state: "Madhya Pradesh",
    category: "temple",
    period: "c. 950 – 1050 CE",
    icon: "🛕",
    x: 403, y: 392,
    summary: "The Chandela dynasty's temple complex, where sandstone became some of the most intricately carved surfaces in Indian architecture.",
    context: "Of the original 85 temples built by the Chandela kings, around 25 survive, covered almost entirely in sculpture — gods, celestial dancers, musicians, and the intimate scenes that make Khajuraho one of the most recognisable names in Indian art. The carving reads as a single continuous surface, spiralling upward with the temple's towers, representing an ascent from earthly life toward the sacred peak above.",
    highlights: [
      { name: "Kandariya Mahadeva Temple", note: "The largest and most elaborately carved temple in the complex." },
      { name: "Surasundari figures", note: "Celestial female figures carved in dynamic, twisting poses." },
      { name: "Chandela patronage", note: "A single dynasty's century of continuous temple-building." }
    ],
    fact: "Only about a quarter of the original 85 Khajuraho temples have survived to the present day."
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    category: "temple",
    period: "c. 1336 – 1565 CE",
    icon: "🐘",
    x: 287, y: 699,
    summary: "The ruined capital of the Vijayanagara Empire, where temple sculpture and civic architecture shared the same granite boulders.",
    context: "Hampi's temples and royal structures were carved directly into and around the region's giant granite boulders, blending architecture with landscape. The Vittala Temple's stone chariot and musical pillars — said to produce different notes when struck — represent the technical peak of Vijayanagara-era stonework, while the Lotus Mahal and elephant stables show the empire's art absorbing Indo-Islamic elements alongside Hindu temple tradition.",
    highlights: [
      { name: "Stone Chariot, Vittala Temple", note: "A shrine carved to resemble a temple chariot, wheels and all." },
      { name: "Musical Pillars", note: "Stone columns that ring with different musical tones when tapped." },
      { name: "Lotus Mahal", note: "A pavilion blending Hindu and Indo-Islamic architectural styles." }
    ],
    fact: "Most of Hampi's stone structures are dry-stone construction — not a single mortar joint holds them together."
  },
  {
    id: "thanjavur",
    name: "Thanjavur",
    state: "Tamil Nadu",
    category: "bronze",
    period: "c. 850 CE – present",
    icon: "🔥",
    x: 378, y: 846,
    summary: "The Chola capital where bronze-casting reached a technical peak that South Indian temple art still draws on today.",
    context: "Thanjavur's Brihadeeswarar Temple, completed around 1010 CE, was built to house the bronze processional deities that Chola artisans cast using the lost-wax method — figures like Nataraja that combined religious symbolism with an unmatched command of balance and movement in metal. Centuries later, the same city gave its name to Tanjore painting, built up in gesso relief and covered in gold foil. Both traditions continue in Thanjavur's workshops today.",
    highlights: [
      { name: "Nataraja bronzes", note: "Lost-wax cast bronzes of Shiva as the cosmic dancer." },
      { name: "Brihadeeswarar Temple", note: "A granite temple whose shadow reportedly never falls on the ground at noon." },
      { name: "Tanjore painting", note: "Gesso-relief devotional paintings finished in gold foil and inlaid stones." }
    ],
    fact: "New Nataraja bronzes are still cast in Thanjavur workshops today, using the same 1,000-year-old lost-wax method."
  },
  {
    id: "konark",
    name: "Konark & Raghurajpur",
    state: "Odisha",
    category: "temple",
    period: "c. 1250 CE – present",
    icon: "🛞",
    x: 560, y: 545,
    summary: "A sun temple shaped like a giant stone chariot, and a nearby village keeping Odisha's Pattachitra painting tradition alive.",
    context: "The Konark Sun Temple was built in the 13th century as a colossal chariot for the sun god, with 24 carved stone wheels and a team of sculpted horses, each wheel accurate enough to function as a sundial. A short distance away, the artists' village of Raghurajpur has practised Pattachitra — scroll paintings on cloth stiffened with tamarind-seed paste, outlined in bold black and filled with mineral colours — as a hereditary craft for generations.",
    highlights: [
      { name: "Konark's stone wheels", note: "24 carved chariot wheels, each precise enough to tell time." },
      { name: "Pattachitra scrolls", note: "Cloth paintings from Raghurajpur, prepared with a tamarind-paste base." },
      { name: "Temple dance carvings", note: "Sculpted postures on the temple walls that still inform Odissi dance today." }
    ],
    fact: "Local legend holds that the temple's spire once held a massive lodestone said to pull passing ships off course."
  },
  {
    id: "udaipur-nathdwara",
    name: "Udaipur & Nathdwara",
    state: "Rajasthan",
    category: "miniature",
    period: "16th century – present",
    icon: "🎨",
    x: 193, y: 401,
    summary: "The Mewar royal court's miniature painting ateliers, and the still-active pichwai workshops of Nathdwara.",
    context: "The Mewar school of Rajput painting, patronised by the rulers of Udaipur, produced bold, flatly coloured Ragamala series and court scenes that resisted Mughal influence longer than most other Rajput courts. Nearby, the temple town of Nathdwara built its own painting economy around pichwai — large devotional cloths hung behind the Shrinathji shrine — a tradition still practised by hereditary workshops supplying temples across India.",
    highlights: [
      { name: "Mewar Ragamala series", note: "Musical-mode paintings in bold, flat colour, distinct from Mughal style." },
      { name: "Pichwai workshops", note: "Cloth paintings for the Shrinathji shrine, still hand-painted today." },
      { name: "Udaipur court ateliers", note: "A royal painting workshop that operated largely independent of Mughal patronage." }
    ],
    fact: "Legend holds the Shrinathji idol was settled in Nathdwara after the cart carrying it got stuck in mud and would move no further."
  },
  {
    id: "kangra",
    name: "Kangra Valley",
    state: "Himachal Pradesh",
    category: "miniature",
    period: "c. 1780 – 1850 CE",
    icon: "🌄",
    x: 280, y: 158,
    summary: "A Himalayan valley where painters who left the fading Mughal court developed one of India's most lyrical miniature styles.",
    context: "As Mughal patronage declined through the 18th century, painters moved to the hill courts of the Punjab Himalayas. Under the patronage of Raja Sansar Chand of Kangra, they developed a style defined by soft colour, rolling green landscapes, and tender depictions of Radha and Krishna. Kangra painting is often considered the lyrical high point of the broader Pahari ('hill') painting tradition that flourished across small Himalayan kingdoms.",
    highlights: [
      { name: "Radha-Krishna series", note: "Devotional poetry translated into moonlit, pastoral miniature scenes." },
      { name: "Raja Sansar Chand's patronage", note: "One ruler's court that shaped an entire regional painting style." },
      { name: "Pahari painting network", note: "A shared visual language spanning several small Himalayan kingdoms." }
    ],
    fact: "Kangra's painting workshops declined sharply after an 1905 earthquake devastated much of the valley."
  },
  {
    id: "kolkata-santiniketan",
    name: "Kolkata & Santiniketan",
    state: "West Bengal",
    category: "modern",
    period: "c. 1850 – present",
    icon: "🎓",
    x: 655, y: 435,
    summary: "From Kalighat's satirical folk paintings to the Bengal School and Santiniketan's open-air art school, Bengal shaped modern Indian art.",
    context: "Outside Kolkata's Kali temple, Kalighat artists sold quick, satirical folk paintings to pilgrims through the 19th century. By the early 20th century, Abanindranath Tagore led the Bengal School in a deliberate break from colonial academic painting and Mughal miniature style alike, seeking a distinctly Indian modern visual language. His uncle Rabindranath Tagore later founded an open-air art school at Santiniketan, Kala Bhavana, training generations of modern Indian artists.",
    highlights: [
      { name: "Kalighat Pat paintings", note: "Bold, satirical folk paintings sold as pilgrim souvenirs." },
      { name: "Bengal School", note: "Abanindranath Tagore's nationalist, anti-colonial painting movement." },
      { name: "Kala Bhavana, Santiniketan", note: "Rabindranath Tagore's open-air art school, still active today." }
    ],
    fact: "Santiniketan's classes were traditionally held outdoors under trees, rejecting the closed classroom entirely."
  }
];

/* A stylized, illustrative outline of India — a faceted polygon in the
   spirit of carved temple relief, not a precise geographic projection. */
const indiaOutlinePoints = [
  [322, 81], [406, 216], [576, 323], [814, 355], [983, 290], [698, 313],
  [686, 500], [603, 555], [520, 623], [417, 771], [383, 894], [322, 932],
  [276, 874], [230, 784], [203, 697], [180, 645], [166, 581], [98, 523],
  [17, 419], [85, 323], [220, 194]
];

/* ============================================================
   BUILD CATEGORY LOOKUP + FILTER PILLS
   ============================================================ */
const categoryMap = {};
categories.forEach((c) => { categoryMap[c.id] = c; });

const filterNav = document.getElementById("filterNav");
let activeCategory = "all";

const allPill = document.createElement("button");
allPill.className = "filter-pill active";
allPill.dataset.category = "all";
allPill.innerHTML = `<span class="dot" style="background:var(--gold)"></span> All Regions`;
filterNav.appendChild(allPill);

categories.forEach((cat) => {
  const pill = document.createElement("button");
  pill.className = "filter-pill";
  pill.dataset.category = cat.id;
  pill.style.setProperty("--pill-color", cat.color);
  pill.innerHTML = `<span class="dot"></span> ${cat.label}`;
  filterNav.appendChild(pill);
});

filterNav.addEventListener("click", (e) => {
  const pill = e.target.closest(".filter-pill");
  if (!pill) return;
  activeCategory = pill.dataset.category;
  filterNav.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
  pill.classList.add("active");
  applyFilter();
});

/* ============================================================
   RENDER SVG MAP
   ============================================================ */
const svgNS = "http://www.w3.org/2000/svg";
const mapSvg = document.getElementById("indiaMap");

function buildIndiaShape() {
  const path = document.createElementNS(svgNS, "path");
  const d = indiaOutlinePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ") + " Z";
  path.setAttribute("d", d);
  path.setAttribute("class", "india-shape");
  mapSvg.appendChild(path);
}

function buildPins() {
  locations.forEach((loc) => {
    const cat = categoryMap[loc.category];
    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("class", "pin");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", `${loc.name}, ${loc.state} — ${cat.label}`);
    g.dataset.id = loc.id;
    g.dataset.category = loc.category;
    g.style.setProperty("--pin-color", cat.color);

    const ring = document.createElementNS(svgNS, "circle");
    ring.setAttribute("class", "pin-ring");
    ring.setAttribute("cx", loc.x);
    ring.setAttribute("cy", loc.y);
    ring.setAttribute("r", "22");

    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("class", "pin-dot");
    dot.setAttribute("cx", loc.x);
    dot.setAttribute("cy", loc.y);
    dot.setAttribute("r", "20");

    const icon = document.createElementNS(svgNS, "text");
    icon.setAttribute("class", "pin-icon");
    icon.setAttribute("x", loc.x);
    icon.setAttribute("y", loc.y);
    icon.textContent = loc.icon;

    g.appendChild(ring);
    g.appendChild(dot);
    g.appendChild(icon);

    g.addEventListener("click", () => openModal(loc));
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(loc);
      }
    });

    mapSvg.appendChild(g);
  });
}

buildIndiaShape();
buildPins();

/* ============================================================
   LEGEND
   ============================================================ */
const mapLegend = document.getElementById("mapLegend");
categories.forEach((cat) => {
  const item = document.createElement("span");
  item.className = "legend-item";
  item.style.setProperty("--legend-color", cat.color);
  item.innerHTML = `<span class="dot"></span> ${cat.label}`;
  mapLegend.appendChild(item);
});

/* ============================================================
   LOCATION CARD GRID
   ============================================================ */
const locationGrid = document.getElementById("locationGrid");

locations.forEach((loc) => {
  const cat = categoryMap[loc.category];
  const card = document.createElement("button");
  card.className = "artifact-card location-card";
  card.dataset.category = loc.category;
  card.style.setProperty("--era-color", cat.color);
  card.style.setProperty("--card-color", cat.color);
  card.innerHTML = `
    <div class="artifact-icon-wrap" aria-hidden="true">${loc.icon}</div>
    <p class="location-card-state">${loc.state}</p>
    <p class="artifact-name">${loc.name}</p>
    <p class="artifact-medium">${cat.label}</p>
    <span class="card-cue">View details →</span>
  `;
  card.addEventListener("click", () => openModal(loc));
  locationGrid.appendChild(card);
});

/* ============================================================
   FILTERING (map pins + cards)
   ============================================================ */
function applyFilter() {
  document.querySelectorAll(".pin").forEach((pin) => {
    const match = activeCategory === "all" || pin.dataset.category === activeCategory;
    pin.classList.toggle("dimmed", !match);
  });
  document.querySelectorAll(".location-card").forEach((card) => {
    const match = activeCategory === "all" || card.dataset.category === activeCategory;
    card.classList.toggle("is-hidden", !match);
  });
}

/* ============================================================
   MODAL (shared markup/classes with the timeline page's modal)
   ============================================================ */
const modalOverlay = document.getElementById("modalOverlay");
const modalEl = modalOverlay.querySelector(".modal");
const modalIcon = document.getElementById("modalIcon");
const modalEra = document.getElementById("modalEra");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDesc = document.getElementById("modalDesc");
const modalHighlights = document.getElementById("modalHighlights");
const modalFact = document.getElementById("modalFact");
const modalClose = document.getElementById("modalClose");

let lastFocusedEl = null;

function openModal(loc) {
  const cat = categoryMap[loc.category];
  lastFocusedEl = document.activeElement;

  modalEl.style.setProperty("--era-color", cat.color);
  modalIcon.textContent = loc.icon;
  modalEra.textContent = `${loc.state} · ${cat.label}`;
  modalTitle.textContent = loc.name;
  modalMeta.innerHTML = `
    <dt>Period</dt><dd>${loc.period}</dd>
    <dt>Art form</dt><dd>${cat.label}</dd>
  `;
  modalDesc.textContent = loc.context;
  modalHighlights.innerHTML = loc.highlights
    .map((h) => `<li><strong>${h.name}</strong> — ${h.note}</li>`)
    .join("");
  modalFact.textContent = `Did you know? ${loc.fact}`;

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  modalEl.focus();
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
});
