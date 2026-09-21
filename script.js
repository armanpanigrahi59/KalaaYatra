/* ============================================================
   KALAAYATRA — data
   Each era holds artifacts with the info shown in the modal.
   ============================================================ */
const timelineData = [
  {
    id: "indus",
    era: "Indus Valley Civilization",
    eraHindi: "सिन्धु घाटी सभ्यता",
    period: "c. 2600 – 1900 BCE",
    accent: "#3C8A87",
    marker: "🏺",
    intro: "Long before temples or kingdoms, the cities of Mohenjo-daro and Harappa were casting bronze, carving seals, and firing clay with a precision that still puzzles archaeologists. This is where Indian art begins.",
    artifacts: [
      {
        icon: "💃",
        name: "The Dancing Girl",
        medium: "Bronze, lost-wax casting",
        location: "Mohenjo-daro · National Museum, New Delhi",
        description: "A small bronze figure barely 11 centimetres tall, standing with one hand on her hip, bangles stacked up her arm, in a pose so relaxed it feels modern. She was cast using the lost-wax method — the earliest confirmed use of that technique in the world — meaning the mould was destroyed to release her, so no two figures like her are exactly alike.",
        fact: "Archaeologist Mortimer Wheeler once called her 'a girl perfectly, for the moment, perfectly confident of herself and the world.'"
      },
      {
        icon: "🔱",
        name: "The Pashupati Seal",
        medium: "Steatite (soft stone), carved",
        location: "Mohenjo-daro · National Museum, New Delhi",
        description: "A small square seal shows a horned figure seated cross-legged in what looks like an early yogic posture, surrounded by an elephant, tiger, rhinoceros, and buffalo. Scholars have debated for a century whether this is a proto-Shiva, a fertility deity, or a ruler — the script beside him remains undeciphered, so the seal keeps its secret.",
        fact: "The Indus script on seals like this one has never been decoded, despite thousands of attempts."
      },
      {
        icon: "🗿",
        name: "The Priest-King",
        medium: "Steatite, carved and drilled",
        location: "Mohenjo-daro · National Museum of Pakistan, Karachi",
        description: "A bearded man's head and shoulders, eyes half-closed as if in meditation, wearing a robe patterned with trefoils that once held inlaid colour. Nobody knows if he was a priest, a king, or neither — the name is a modern guess — but the calm, deliberate carving of his face set a tone of serenity that would echo through Indian sculpture for millennia.",
        fact: "Traces of red pigment found in the trefoil pattern suggest the robe was once brightly coloured."
      }
    ]
  },
  {
    id: "mauryan",
    era: "Mauryan Empire",
    eraHindi: "मौर्य साम्राज्य",
    period: "c. 322 – 185 BCE",
    accent: "#D4A017",
    marker: "🦁",
    intro: "Under Emperor Ashoka, art became a tool of the state. Polished sandstone pillars carrying edicts on peace and dharma were planted across the empire, capped with animals so finely finished they still gleam.",
    artifacts: [
      {
        icon: "🦁",
        name: "Lion Capital of Ashoka",
        medium: "Polished Chunar sandstone",
        location: "Sarnath · Sarnath Museum",
        description: "Four lions stand back to back atop a pillar that once marked the site of the Buddha's first sermon, their roar aimed at the four directions. Beneath them, a wheel and four smaller animals — a horse, bull, elephant, and lion — circle a drum polished to a mirror shine, a technique called Mauryan polish that has never fully been reproduced by later craftsmen.",
        fact: "This exact sculpture, minus its original capital bell, was adopted as India's national emblem in 1950."
      },
      {
        icon: "📜",
        name: "The Ashokan Pillar Edicts",
        medium: "Inscribed sandstone pillars",
        location: "Sites across India, Nepal, and Pakistan",
        description: "Dozens of pillars, each up to 15 metres tall and cut from a single block of stone, were inscribed with Ashoka's messages on non-violence, tolerance, and welfare, written in Brahmi and Kharosthi scripts. They are as much sculpture as text: the pillar's slight taper and the bell-shaped capital were refined across the empire until they became a recognisable, repeatable art form.",
        fact: "Some pillars were dragged hundreds of kilometres from their quarry — a feat still not fully understood."
      },
      {
        icon: "🌺",
        name: "Didarganj Yakshi",
        medium: "Polished sandstone",
        location: "Patna · Bihar Museum",
        description: "A monumental female figure, over two metres tall, holds a fly-whisk over one shoulder, her body rendered with a fullness and confidence that later became a template for Indian sculpture's treatment of the feminine form. The same glass-like Mauryan polish seen on the Lion Capital covers her surface, suggesting a single royal workshop tradition.",
        fact: "Her exact date is still debated — estimates range from the Mauryan period to several centuries later."
      }
    ]
  },
  {
    id: "gupta",
    era: "Gupta Golden Age",
    eraHindi: "गुप्त स्वर्ण युग",
    period: "c. 320 – 550 CE",
    accent: "#E9C25E",
    marker: "🧘",
    intro: "Often called classical India's high point, the Gupta era gave Buddhist and Hindu art a shared visual language: calm faces, flowing drapery, and cave walls turned into painted worlds.",
    artifacts: [
      {
        icon: "🖼️",
        name: "Padmapani, Ajanta Caves",
        medium: "Mural, tempera on rock-cut plaster",
        location: "Ajanta, Maharashtra · Cave 1",
        description: "A bodhisattva holds a blue lotus, his head tilted in gentle compassion, painted onto the wall of a monastery carved directly into a horseshoe-shaped cliff. The Ajanta murals used natural pigments and a binding technique so effective that, sealed in darkness for centuries after the caves were abandoned, their colour survived almost untouched.",
        fact: "The caves were rediscovered by chance in 1819 by a British officer, John Smith, out on a tiger hunt."
      },
      {
        icon: "🪔",
        name: "Seated Buddha of Sarnath",
        medium: "Chunar sandstone, carved",
        location: "Sarnath · Sarnath Museum",
        description: "The Buddha sits cross-legged in the earth-witness pose, hands set in the gesture of turning the wheel of dharma, framed by a halo carved with concentric bands of lotus and floral scroll. The Sarnath style stripped away ornament to focus on serenity — thin, almost transparent robes, a faint smile, downcast eyes — becoming the template Buddhist art across Asia would return to for centuries.",
        fact: "The halo's outer edge is carved with tiny flying celestial figures, visible only up close."
      },
      {
        icon: "⚙️",
        name: "The Iron Pillar of Delhi",
        medium: "Wrought iron, forge-welded",
        location: "Qutb complex, Delhi",
        description: "Standing over seven metres tall and weighing more than six tonnes, this pillar has resisted serious rusting for over 1,600 years, thanks to a phosphorus-rich protective layer that formed through an iron-working technique still not fully replicated today. It is as much a feat of materials science as of sculpture — proof that Gupta-era craftsmanship extended past stone and bronze.",
        fact: "Its Sanskrit inscription praises a king named Chandra, likely Chandragupta II, but gives no clue how it was forged."
      }
    ]
  },
  {
    id: "chola",
    era: "Chola Dynasty",
    eraHindi: "चोल राजवंश",
    period: "c. 850 – 1250 CE",
    accent: "#C1440E",
    marker: "🔥",
    intro: "In the temples of Tamil Nadu, bronze casting reached a peak that has never been surpassed. Chola artisans gave the gods motion — dancing, striding, blessing — frozen in metal.",
    artifacts: [
      {
        icon: "🔥",
        name: "Nataraja — Shiva as Lord of Dance",
        medium: "Bronze, lost-wax casting",
        location: "Tamil Nadu temples · Chennai Government Museum, and others worldwide",
        description: "Shiva dances inside a ring of cosmic fire, one foot crushing the demon of ignorance, one hand holding the drum of creation and another the flame of destruction, his hair flying outward in perfect symmetry. The pose encodes an entire philosophy — creation, preservation, destruction, illusion, and liberation — in a single frozen instant of movement, cast with a technical control over balance and proportion that modern foundries still study.",
        fact: "Physicist J. Robert Oppenheimer once cited the Nataraja as an image that stayed with him after witnessing the first nuclear test."
      },
      {
        icon: "🛕",
        name: "Brihadeeswarar Temple Sculpture",
        medium: "Granite, carved in situ",
        location: "Thanjavur, Tamil Nadu",
        description: "Built by Rajaraja Chola I and completed around 1010 CE, the temple's 66-metre tower (vimana) is covered in carved deities, guardians, and dancers, all cut from granite — a stone far harder to work than the sandstone used elsewhere in India. Its shadow at noon is said to never fall on the ground, a claim tied to the precision of its construction.",
        fact: "The capstone at the tower's peak is a single 80-tonne block, reportedly hauled up a 6-kilometre ramp."
      },
      {
        icon: "🌙",
        name: "Bronze of Parvati",
        medium: "Bronze, lost-wax casting",
        location: "Tamil Nadu · various museum collections",
        description: "Standing in the graceful tribhanga (thrice-bent) pose, Parvati's bronze figures were carried out of temples during festivals so the deity could 'see' the town, meaning these sculptures were made to be dressed, garlanded, and processed, not just displayed. Their smooth, elongated limbs and serene faces set the standard for South Indian bronze work that continued for centuries after Chola rule ended.",
        fact: "Many temple bronzes still used today for festival processions are new castings made using the exact same 1,000-year-old technique."
      }
    ]
  },
  {
    id: "mughal",
    era: "Mughal Era",
    eraHindi: "मुग़ल काल",
    period: "1526 – 1857 CE",
    accent: "#C1440E",
    marker: "🕌",
    intro: "Persian, Central Asian, and Indian traditions merged under the Mughals into miniature paintings of extraordinary detail and architecture that turned stone into lace.",
    artifacts: [
      {
        icon: "🖌️",
        name: "Akbarnama Miniatures",
        medium: "Opaque watercolour and gold on paper",
        location: "Commissioned under Akbar · V&A Museum, London and other collections",
        description: "Illustrated pages from the official chronicle of Emperor Akbar's reign, painted by teams of specialist artists working in Akbar's atelier — one might sketch the composition, another paint faces, another add gold work. Battle scenes, court gatherings, and hunting expeditions unfold in crowded, layered detail, with a flattened perspective borrowed from Persian painting reworked with distinctly Indian colour and energy.",
        fact: "Akbar reportedly employed over a hundred painters in his royal workshop, most of them Hindu artists trained in local traditions."
      },
      {
        icon: "🕌",
        name: "Pietra Dura of the Taj Mahal",
        medium: "Inlaid semi-precious stone in white marble",
        location: "Agra",
        description: "The Taj Mahal's marble surfaces are inlaid with thousands of pieces of carnelian, jasper, lapis lazuli, and turquoise, cut and fitted so precisely that the joins are nearly invisible, forming flowering vines and calligraphy that seem to grow out of the stone itself. This technique, called parchin kari, was adapted from Persian and Italian inlay work and became a hallmark of Mughal decorative art.",
        fact: "A single flower motif on the tomb can contain over 35 individually cut and inlaid stone pieces."
      },
      {
        icon: "🦚",
        name: "Ustad Mansur's Natural Studies",
        medium: "Watercolour on paper",
        location: "Commissioned under Jahangir · collections worldwide",
        description: "Court painter Ustad Mansur specialised in studies of birds, flowers, and animals for Emperor Jahangir, who took a personal, almost scientific interest in the natural world. His painting of a now-extinct dodo, made from a live specimen brought to India, is one of the few accurate depictions of the bird ever recorded before it disappeared.",
        fact: "Jahangir gave Mansur the title 'Nadir-ul-Asr' — 'Wonder of the Age' — for his precision."
      }
    ]
  },
  {
    id: "rajputpahari",
    era: "Rajput & Pahari Painting",
    eraHindi: "राजपूत और पहाड़ी चित्रकला",
    period: "16th – 19th century",
    accent: "#3C8A87",
    marker: "🎨",
    intro: "Away from the Mughal court, the kingdoms of Rajasthan and the Himalayan foothills developed their own painting schools — devotional, poetic, and unafraid of flat, saturated colour.",
    artifacts: [
      {
        icon: "🎨",
        name: "Kangra Radha-Krishna Miniatures",
        medium: "Watercolour and gold on paper",
        location: "Kangra, Himachal Pradesh · National Museum, New Delhi",
        description: "The Kangra school painted the love story of Radha and Krishna with a softness and lyricism unlike anywhere else in India — rolling green hills, moonlit groves, and figures with delicate, rounded faces. These paintings often illustrated poetry directly, turning verses about divine longing into landscapes you could step into.",
        fact: "Kangra artists were often descendants of painters who left the declining Mughal court in the 18th century."
      },
      {
        icon: "🎼",
        name: "Mewar Ragamala Paintings",
        medium: "Opaque watercolour on paper",
        location: "Udaipur, Rajasthan · various collections",
        description: "Ragamala, or 'garland of melodies', paintings translate musical ragas into visual scenes — a particular raga might be shown as a woman waiting for her lover in a thunderstorm, its mood, season, and time of day all encoded in colour and composition. Mewar's version favoured bold, flat blocks of red, yellow, and black, giving the series a graphic punch distinct from more delicate Mughal work.",
        fact: "Each of the traditional 36 to 42 ragas had its own fixed visual formula, repeated by painters for generations."
      },
      {
        icon: "🐄",
        name: "Nathdwara Pichwai Paintings",
        medium: "Pigment on cloth",
        location: "Nathdwara, Rajasthan",
        description: "Large cloth paintings hung behind the shrine of Shrinathji, a form of Krishna, changing with the seasons and festivals — cows, lotus ponds, and gopis rendered in dense, patterned detail meant to be read as a devotional backdrop rather than a standalone artwork. Pichwai painting remains an active, living tradition in Nathdwara today.",
        fact: "A single large pichwai can take a workshop of artists several months to complete."
      }
    ]
  },
  {
    id: "colonial",
    era: "Company & Colonial Period",
    eraHindi: "औपनिवेशिक काल",
    period: "18th – 19th century",
    accent: "#B3A2C9",
    marker: "🦜",
    intro: "As British traders and administrators settled in, a new hybrid style emerged: Indian artists painting for European patrons, and new urban markets producing sharp, satirical folk art of their own.",
    artifacts: [
      {
        icon: "🦜",
        name: "Company School Natural History Paintings",
        medium: "Watercolour on paper, European-style perspective",
        location: "Calcutta, Patna, Delhi · British Library and other collections",
        description: "Indian artists trained in Mughal miniature traditions were commissioned by British officials to catalogue Indian plants, birds, and everyday trades in a more Western, naturalistic style — accurate, detailed, but stripped of the symbolic flourishes of court painting. The result was a distinctive hybrid: Indian hand, European brief.",
        fact: "Many of these paintings were bound into private albums that later became the basis of British botanical and zoological catalogues."
      },
      {
        icon: "✨",
        name: "Tanjore Gold-Leaf Paintings",
        medium: "Gold foil, gesso relief, and pigment on wood",
        location: "Thanjavur, Tamil Nadu",
        description: "Tanjore paintings build up their central deity in relief using a gesso paste, then cover it in gold foil and set semi-precious stones into the surface, so the figure catches light differently as you move past it. Rich colour and a devotional, almost jewel-like density made them popular in wealthy households across South India.",
        fact: "The gold used is genuine gold foil, hammered thin enough to be applied by hand over the raised plaster relief."
      },
      {
        icon: "🐈",
        name: "Kalighat Pat Paintings",
        medium: "Watercolour on paper",
        location: "Kalighat, Calcutta",
        description: "Sold as cheap souvenirs to pilgrims outside Calcutta's Kali temple, Kalighat paintings used bold, quick brushwork and flat colour to depict gods, but also everyday scandal and social satire — a woman leaving her husband, a fraudulent priest, a cat holding a fish. It was one of the first Indian art forms to comment openly on contemporary urban life.",
        fact: "Kalighat's loose, economical line work later influenced Bengal School and even some early Western modernists who saw examples in Europe."
      }
    ]
  },
  {
    id: "modern",
    era: "Bengal School to Contemporary",
    eraHindi: "आधुनिक भारतीय कला",
    period: "1900 – present",
    accent: "#D4A017",
    marker: "🐎",
    intro: "The twentieth century asked Indian art to define itself against colonial rule, then against the world. Painters moved from nationalist symbolism to bold, personal, and eventually global styles.",
    artifacts: [
      {
        icon: "🪔",
        name: "Bharat Mata by Abanindranath Tagore",
        medium: "Watercolour wash on paper",
        location: "1905 · Victoria Memorial Hall, Kolkata",
        description: "A calm, four-armed woman in saffron robes holds symbols of food, cloth, knowledge, and spiritual guidance — India personified as a goddess. Painted during the Swadeshi movement against the British partition of Bengal, it deliberately avoided European academic painting and Mughal miniature style alike, using a soft wash technique to found what became known as the Bengal School.",
        fact: "The painting became a nationalist icon almost overnight and was widely reproduced as a print during independence movements."
      },
      {
        icon: "🖼️",
        name: "Amrita Sher-Gil's Self-Portraits",
        medium: "Oil on canvas",
        location: "1930s · National Gallery of Modern Art, New Delhi",
        description: "Trained in Paris and influenced by European modernism, Sher-Gil returned to India and turned her attention to rural women, painting them with a flattened, deeply coloured style that borrowed from both Post-Impressionism and Indian miniature tradition. Her self-portraits are direct and unsentimental, part of what made her one of the first Indian painters to gain serious international recognition.",
        fact: "She died at just 28, but is now regarded as a pioneer of Indian modern art, sometimes called India's Frida Kahlo."
      },
      {
        icon: "🐎",
        name: "M. F. Husain's Horses",
        medium: "Oil on canvas",
        location: "1950s onward · collections worldwide",
        description: "A founding member of the Progressive Artists' Group, Husain returned again and again to the galloping horse — bold outlines, dynamic movement, and fractured, cubist-influenced form — turning a classical Indian motif of power and speed into a signature of Indian modernism. The Progressive Artists' Group deliberately broke from both colonial academic painting and revivalist nationalism to build a new, independent visual language.",
        fact: "Husain painted thousands of horse compositions over his career, none of them exact repeats of another."
      }
    ]
  }
];

/* ============================================================
   RENDER TIMELINE
   ============================================================ */
const timelineContainer = document.getElementById("timelineContainer");
const eraNav = document.getElementById("era-nav");

timelineData.forEach((eraObj, index) => {
  // era nav pill
  const pill = document.createElement("button");
  pill.className = "era-pill";
  pill.textContent = eraObj.era.split(" ").slice(0, 2).join(" ");
  pill.dataset.target = eraObj.id;
  pill.addEventListener("click", () => {
    document.getElementById(eraObj.id).scrollIntoView({ behavior: "smooth", block: "start" });
  });
  eraNav.appendChild(pill);

  // era block
  const block = document.createElement("div");
  block.className = "era-block";
  block.id = eraObj.id;
  block.style.setProperty("--era-color", eraObj.accent);

  const header = document.createElement("div");
  header.className = "era-header";
  header.innerHTML = `
    <div class="era-marker">${eraObj.marker}</div>
    <div class="era-titles">
      <h2 class="era-name">${eraObj.era}</h2>
      <p class="era-name-hindi">${eraObj.eraHindi}</p>
      <p class="era-period">${eraObj.period}</p>
    </div>
  `;
  block.appendChild(header);

  const introP = document.createElement("p");
  introP.className = "era-intro";
  introP.textContent = eraObj.intro;
  block.appendChild(introP);

  const grid = document.createElement("div");
  grid.className = "artifact-grid";

  eraObj.artifacts.forEach((artifact) => {
    const card = document.createElement("button");
    card.className = "artifact-card";
    card.style.setProperty("--era-color", eraObj.accent);
    card.innerHTML = `
      <div class="artifact-icon-wrap" aria-hidden="true">${artifact.icon}</div>
      <p class="artifact-name">${artifact.name}</p>
      <p class="artifact-medium">${artifact.medium}</p>
      <span class="card-cue">View details →</span>
    `;
    card.addEventListener("click", () => openModal(eraObj, artifact));
    grid.appendChild(card);
  });

  block.appendChild(grid);
  timelineContainer.appendChild(block);
});

/* ============================================================
   RIVER PATH — a winding line connecting each era marker
   ============================================================ */
function drawRiver() {
  const svg = document.getElementById("riverSvg");
  const path = document.getElementById("riverPath");
  const container = document.getElementById("timelineContainer");
  const containerRect = container.getBoundingClientRect();

  svg.setAttribute("viewBox", `0 0 ${containerRect.width} ${containerRect.height}`);
  svg.setAttribute("width", containerRect.width);
  svg.setAttribute("height", containerRect.height);

  const markers = Array.from(document.querySelectorAll(".era-marker"));
  if (markers.length === 0) return;

  const points = markers.map((m) => {
    const r = m.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - containerRect.left,
      y: r.top + r.height / 2 - containerRect.top
    };
  });

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }
  path.setAttribute("d", d);
}

window.addEventListener("load", drawRiver);
window.addEventListener("resize", () => requestAnimationFrame(drawRiver));

/* ============================================================
   SCROLL REVEAL + ACTIVE NAV PILL
   ============================================================ */
const eraBlocks = document.querySelectorAll(".era-block");
const pills = document.querySelectorAll(".era-pill");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        requestAnimationFrame(drawRiver);
      }
    });
  },
  { threshold: 0.15 }
);
eraBlocks.forEach((block) => revealObserver.observe(block));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const pill = document.querySelector(`.era-pill[data-target="${entry.target.id}"]`);
      if (!pill) return;
      if (entry.isIntersecting) {
        pills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);
eraBlocks.forEach((block) => navObserver.observe(block));

/* ============================================================
   MODAL
   ============================================================ */
const modalOverlay = document.getElementById("modalOverlay");
const modalEl = modalOverlay.querySelector(".modal");
const modalIcon = document.getElementById("modalIcon");
const modalEra = document.getElementById("modalEra");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDesc = document.getElementById("modalDesc");
const modalFact = document.getElementById("modalFact");
const modalClose = document.getElementById("modalClose");

let lastFocusedEl = null;

function openModal(eraObj, artifact) {
  lastFocusedEl = document.activeElement;

  modalEl.style.setProperty("--era-color", eraObj.accent);
  modalIcon.textContent = artifact.icon;
  modalEra.textContent = `${eraObj.era} · ${eraObj.period}`;
  modalTitle.textContent = artifact.name;
  modalMeta.innerHTML = `
    <dt>Medium</dt><dd>${artifact.medium}</dd>
    <dt>Location</dt><dd>${artifact.location}</dd>
  `;
  modalDesc.textContent = artifact.description;
  modalFact.textContent = `Did you know? ${artifact.fact}`;

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

/* ============================================================
   SEARCH
   ============================================================ */
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// flatten all artifacts with their era for search
const flatArtifacts = [];
timelineData.forEach((eraObj) => {
  eraObj.artifacts.forEach((artifact) => {
    flatArtifacts.push({ eraObj, artifact });
  });
});

function renderSearchResults(query) {
  searchResults.innerHTML = "";
  if (!query.trim()) return;

  const q = query.toLowerCase();
  const matches = flatArtifacts.filter(({ eraObj, artifact }) => {
    const haystack = `${artifact.name} ${artifact.medium} ${artifact.description} ${eraObj.era}`.toLowerCase();
    return haystack.includes(q);
  });

  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.textContent = `No artifacts match "${query}". Try a different word.`;
    searchResults.appendChild(empty);
    return;
  }

  matches.forEach(({ eraObj, artifact }) => {
    const card = document.createElement("button");
    card.className = "artifact-card";
    card.style.setProperty("--era-color", eraObj.accent);
    card.innerHTML = `
      <div class="artifact-icon-wrap" aria-hidden="true">${artifact.icon}</div>
      <p class="artifact-name">${artifact.name}</p>
      <p class="artifact-medium">${eraObj.era}</p>
      <span class="card-cue">View details →</span>
    `;
    card.addEventListener("click", () => openModal(eraObj, artifact));
    searchResults.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
