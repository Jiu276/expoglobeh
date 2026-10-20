/** @typedef {{ label: string, value: string }} Spec */

/**
 * @typedef {Object} Product
 * @property {string} slug
 * @property {string} name
 * @property {string} category
 * @property {number} price
 * @property {string} image
 * @property {string[]} gallery
 * @property {string} summary
 * @property {string[]} description
 * @property {Spec[]} specs
 * @property {string} reviewSlug
 */

/** @type {Product[]} */
export const products = [
  {
    slug: "lumen-task-lamp",
    name: "Lumen Task Lamp",
    category: "Lighting",
    price: 186,
    image: "assets/images/lamp.jpg",
    gallery: ["assets/images/lamp.jpg", "assets/images/interior.jpg"],
    summary: "A matte floor lamp with a weighted arm and a shade that aims at the page, not the ceiling.",
    description: [
      "The Lumen Task Lamp is the light we kept after a year of moving the same chair between a bright afternoon and a late edit. The head tilts, the arm stays put, and the shade cuts the bulb out of your eyeline.",
      "It is not a decorative arc for a lobby. It is a reading and desk lamp that happens to stand on the floor, so the tabletop stays clear for a notebook, a cup, and whatever you are actually doing.",
      "We used it beside a sofa for night reading and behind a monitor when the overhead lights were too blunt. The second photograph shows a larger arc cousin in a shared lounge; the lamp we recommend for a home desk is the tighter gray task light.",
    ],
    specs: [
      { label: "Type", value: "Floor task lamp" },
      { label: "Finish", value: "Matte charcoal" },
      { label: "Shade", value: "Deep dome, tilts and rotates" },
      { label: "Best for", value: "Reading chairs and side-of-desk light" },
      { label: "Bulb", value: "E26, warm 2700K recommended" },
    ],
    reviewSlug: "lamp-that-changed-evenings",
  },
  {
    slug: "harbor-headphones",
    name: "Harbor Over-Ear Headphones",
    category: "Audio",
    price: 249,
    image: "assets/images/headphones.jpg",
    gallery: ["assets/images/headphones.jpg", "assets/images/headphones-desk.jpg"],
    summary: "Closed over-ears with enough isolation for a train, a cafe, and a house that is never fully quiet.",
    description: [
      "Harbor is the pair that left the house. The cushions seal without pinching, the headband survives a backpack, and the noise reduction takes the edge off a carriage without the underwater feeling of heavier sets.",
      "They are matte black, with thick ear pads and a simple on-cup control. We did not want an app for every commute. Volume, pause, and a transparency pass were enough.",
      "The silver-and-tan pair in the second photo is a separate wired headphone we kept at the desk for long calls. Harbor is the black travel set. If you only buy one, buy the one that can leave the room.",
    ],
    specs: [
      { label: "Style", value: "Closed over-ear" },
      { label: "Isolation", value: "Active, with a transparency pass" },
      { label: "Weight", value: "About 250 g" },
      { label: "Battery", value: "A work week of commutes" },
      { label: "Best for", value: "Trains, open offices, shared apartments" },
    ],
    reviewSlug: "headphone-field-guide-2026",
  },
  {
    slug: "fujifilm-x-t10",
    name: "Fujifilm X-T10",
    category: "Cameras",
    price: 680,
    image: "assets/images/camera-lens.jpg",
    gallery: ["assets/images/camera-lens.jpg", "assets/images/camera.jpg"],
    summary: "A small dial-driven mirrorless camera for weekends when you want pictures, not a settings menu.",
    description: [
      "The Fujifilm X-T10 is the weekend camera we actually carried. Shutter speed sits on a dial. Aperture sits on the lens. The body is light enough for a day of walking and serious enough that the files still look like photographs on Monday.",
      "We paired it with a short zoom and stopped treating photography like a second job. The menus exist, but you can ignore most of them. That is the point of this recommendation.",
      "The darker flat-lay in the gallery is the kit we retired: more lenses, more adapters, more decisions. The X-T10 replaced that pile for trips that are supposed to be trips.",
    ],
    specs: [
      { label: "Body", value: "Fujifilm X-T10" },
      { label: "Controls", value: "Shutter dial and aperture ring" },
      { label: "Sensor", value: "APS-C" },
      { label: "Kit we used", value: "Body with a short everyday zoom" },
      { label: "Price note", value: "Typical renewed kit, spring 2026" },
    ],
    reviewSlug: "weekend-camera",
  },
  {
    slug: "northline-65",
    name: "Northline 65 Keyboard",
    category: "Desk",
    price: 158,
    image: "assets/images/mech-keyboard.jpg",
    gallery: ["assets/images/mech-keyboard.jpg", "assets/images/keyboard.jpg"],
    summary: "A compact mechanical board with a calm typing sound and two orange keys you can find in the dark.",
    description: [
      "The Northline 65 is the keyboard that stayed after the slim aluminum one looked tidier in photographs. It is a 65 percent layout: arrows are still there, the number pad is not, and the desk gets a strip of wood back.",
      "The switches are tactile and quieter than a clicky board. The orange escape and delete keys are the only decoration. Everything else is charcoal, which disappears next to a notebook.",
      "We type on a Mac layout. If you live in shortcuts, check the modifier legends before you buy. The feel is the reason to switch; the color is just how you find your place at night.",
    ],
    specs: [
      { label: "Layout", value: "65 percent, Mac legends" },
      { label: "Switches", value: "Tactile, office-quiet" },
      { label: "Case", value: "Matte charcoal" },
      { label: "Accent", value: "Orange escape and delete" },
      { label: "Connection", value: "USB-C" },
    ],
    reviewSlug: "quiet-desk-setup",
  },
  {
    slug: "weekday-pourover",
    name: "Weekday Pour-Over Set",
    category: "Kitchen",
    price: 92,
    image: "assets/images/pourover.jpg",
    gallery: ["assets/images/pourover.jpg", "assets/images/coffee.jpg"],
    summary: "A glass carafe, a paper filter, and a gooseneck kettle for mornings that should take eight minutes, not a ritual hour.",
    description: [
      "This is the Chemex-style carafe and kettle we use when nobody in the house wants a lecture about extraction. Water goes on in slow circles. Coffee lands in a cup. The whole thing washes in the sink.",
      "The set is for two mugs, which is the right size for a weekday. A larger batch turns into a science project. We keep beans in a jar, filters in the drawer, and the kettle on the counter because it is also useful for tea.",
      "The second photo is the social version: cafe cups when the morning happens somewhere else. The pour-over is for the mornings that stay home.",
    ],
    specs: [
      { label: "Carafe", value: "Glass, wood collar, paper filter" },
      { label: "Kettle", value: "Gooseneck, stovetop" },
      { label: "Yield", value: "Two mugs" },
      { label: "Time", value: "About eight minutes" },
      { label: "Care", value: "Hand wash, no dishwasher for the carafe" },
    ],
    reviewSlug: "morning-routines",
  },
  {
    slug: "navy-commuter-pack",
    name: "Navy Commuter Pack",
    category: "Travel",
    price: 148,
    image: "assets/images/backpack.jpg",
    gallery: ["assets/images/backpack.jpg", "assets/images/porto.jpg"],
    summary: "A structured navy pack that holds a laptop, a camera, and a sweater without looking like luggage.",
    description: [
      "The Navy Commuter Pack is the bag that went to Porto and then back to the Tuesday train. It stands up on its own, the laptop sleeve is padded, and the front pocket takes a notebook without a hunt.",
      "Twenty-eight liters is the size that still fits under a seat and still fits a change of clothes if you pack like an adult. It does not have six dangling straps. The silhouette stays quiet in a cafe.",
      "We used it as a personal item on a short flight and as a day bag on the Ribeira. If a trip needs a second suitcase, this is still the bag that stays on your shoulder.",
    ],
    specs: [
      { label: "Volume", value: "28 liters" },
      { label: "Color", value: "Navy" },
      { label: "Sleeve", value: "Fits a 14-inch laptop" },
      { label: "Pocket", value: "Front zip for a notebook and cables" },
      { label: "Best for", value: "City trips and daily carry" },
    ],
    reviewSlug: "porto-slow-week",
  },
];

/**
 * 按 slug 查找产品。
 * @param {string} slug
 * @returns {Product|undefined}
 */
export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

/**
 * 返回去重后的产品类别。
 * @returns {string[]}
 */
export function getProductCategories() {
  return [...new Set(products.map((product) => product.category))];
}
