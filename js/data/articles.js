/** @typedef {{ type: 'p'|'h2'|'quote', text: string } | { type: 'ul', items: string[] } | { type: 'image', src: string, alt: string, caption: string }} Block */

/**
 * @typedef {Object} Article
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} category
 * @property {string[]} tags
 * @property {string} date
 * @property {{ name: string, role: string }} author
 * @property {string} readTime
 * @property {string} cover
 * @property {string} coverAlt
 * @property {string[]} products
 * @property {Block[]} blocks
 */

/** 期刊分类，顺序即筛选条顺序。 */
export const categories = [
  {
    name: "Product Reviews",
    blurb: "Objects we lived with long enough to trust.",
    image: "assets/images/headphones.jpg",
  },
  {
    name: "Platform Picks",
    blurb: "Software and storefronts that earn a daily open.",
    image: "assets/images/platforms.jpg",
  },
  {
    name: "Travel",
    blurb: "Cities taken slowly, without a checklist.",
    image: "assets/images/canal.jpg",
  },
  {
    name: "Food",
    blurb: "Weeknight cooking and the meals that rescue it.",
    image: "assets/images/food.jpg",
  },
  {
    name: "Lifestyle",
    blurb: "Mornings, rooms, and routines with the drama removed.",
    image: "assets/images/morning.jpg",
  },
];

/** @type {Article[]} */
export const articles = [
  {
    slug: "quiet-desk-setup",
    title: "The Quiet Desk Setup That Survived a Year of Remote Work",
    excerpt: "A bright room looked finished in a week. The setup that lasted was smaller, warmer, and much less interested in matching.",
    category: "Product Reviews",
    tags: ["desk", "keyboard", "lamp", "remote work"],
    date: "2026-05-18",
    author: { name: "Mara Ellison", role: "Product editor" },
    readTime: "8 min read",
    cover: "assets/images/workspace.jpg",
    coverAlt: "A bright home office with a gray chair, a desk, a monitor, and a small lamp",
    products: ["northline-65", "lumen-task-lamp"],
    blocks: [
      { type: "p", text: "The photograph everyone likes is the bright one. White walls, a gray chair, a plant that is still alive, a monitor sitting exactly where a designer would put it. We built that desk in a weekend in the spring of 2025 and felt, briefly, like the workday had been solved." },
      { type: "p", text: "A year later the bright desk is still in the house, and almost nobody uses it after four o'clock. The setup that survived is the narrower table by the window: a lamp with a visible bulb, a laptop that can close, and a keyboard that sounds like typing instead of like a photograph of typing." },
      { type: "h2", text: "What the tidy desk got wrong" },
      { type: "p", text: "The slim aluminum keyboard looked correct and felt anonymous. Shortcuts were fine. The trouble was endurance. After a long edit the keys disappeared under the fingers, and the only way to keep going was to turn the overhead light up, which made the room feel like a clinic." },
      { type: "image", src: "assets/images/keyboard.jpg", alt: "A slim white keyboard on a pale desk beside a notebook and a mouse", caption: "The first keyboard. It photographed well and asked for more light than the evening had." },
      { type: "p", text: "We replaced it with the Northline 65, a compact mechanical board in charcoal with two orange keys. Escape and delete are the keys you hunt for when you are tired. Giving them a color is not a personality. It is a landmark." },
      { type: "quote", text: "A desk should get quieter as the day goes on, not brighter." },
      { type: "h2", text: "The lamp did more than the chair" },
      { type: "p", text: "The chair was already good. The missing piece was a pool of warm light that did not include the whole wall. A small bulb on a thin stand, aimed past the screen, made the laptop optional. You could close it and still have a place to read a page of notes." },
      { type: "image", src: "assets/images/desk-setup.jpg", alt: "A wooden desk at night with an open laptop, a phone, and a warm lamp", caption: "The evening desk. Less furniture, a warmer lamp, and a keyboard you can find by touch." },
      { type: "p", text: "If you are starting over, buy the light and the keyboard before you buy another monitor. The bright room can stay for video calls. The work that needs care moved three steps to the left, and it has not moved back." },
      { type: "ul", items: ["Keep one surface for calls and one for actual work.", "Choose a keyboard you can use without looking down.", "Put the lamp beside the screen, not above your head.", "Leave room to close the laptop."] },
    ],
  },
  {
    slug: "platforms-before-email",
    title: "Five Platforms We Open Before Email",
    excerpt: "The apps that survived a year of good intentions are the ones that do one job and then get out of the way.",
    category: "Platform Picks",
    tags: ["platforms", "reader", "are.na", "notion", "calendar"],
    date: "2026-03-09",
    author: { name: "Jonah Park", role: "Platform editor" },
    readTime: "7 min read",
    cover: "assets/images/platforms.jpg",
    coverAlt: "Hands pointing at a laptop screen during a working session",
    products: [],
    blocks: [
      { type: "p", text: "Email is where other people's priorities go to stand in line. We still answer it. We just refuse to let it be the first door of the day. These five platforms earned the earlier click because each one has a finish line." },
      { type: "h2", text: "Readwise Reader" },
      { type: "p", text: "Reader holds the essays, manuals, and newsletters we meant to finish. The useful habit is not highlighting. It is closing the tab. If a piece is worth keeping, it goes into Reader before lunch. If it is still unopened on Friday, it gets deleted without a ceremony." },
      { type: "h2", text: "Are.na" },
      { type: "p", text: "Are.na is where images and references live when they are not ready to be a moodboard or a slide. Channels stay loose. We use one for desk objects, one for city color, and one for packaging we might steal from honestly. It does not nag, which is rarer than it should be." },
      { type: "image", src: "assets/images/notes.jpg", alt: "An open notebook with the word Notes written above a fountain pen", caption: "Some references still start on paper. The platform only has to catch them later." },
      { type: "h2", text: "A calendar, Spotify, and a small Notion" },
      { type: "p", text: "Google Calendar is the only planning tool we trust with other people. Spotify is a room, not a discovery engine: three focus playlists and the offline download for trains. Notion holds two shared pages, a packing list and a publishing calendar, and we stopped trying to make it a second brain." },
      { type: "quote", text: "A platform earns its icon when you can explain it in one sentence to a tired colleague." },
      { type: "ul", items: ["Reader, for pieces we will actually finish.", "Are.na, for references that are not tasks.", "Google Calendar, for time that involves someone else.", "Spotify, downloaded before the train.", "Notion, limited to shared lists."] },
      { type: "p", text: "Anything that wants a daily streak, a public profile, and a tour of its new AI button did not make the dock. The test is boring on purpose. Can you open it, do the thing, and leave?" },
    ],
  },
  {
    slug: "headphone-field-guide-2026",
    title: "A Field Guide to Noise-Cancelling Headphones in 2026",
    excerpt: "We wore four pairs through winter trains and a loud apartment. One of them earned the backpack.",
    category: "Product Reviews",
    tags: ["headphones", "audio", "commute", "noise cancelling"],
    date: "2026-01-21",
    author: { name: "Mara Ellison", role: "Product editor" },
    readTime: "8 min read",
    cover: "assets/images/headphones.jpg",
    coverAlt: "Black over-ear headphones on a yellow background",
    products: ["harbor-headphones"],
    blocks: [
      { type: "p", text: "Noise cancelling got good enough that the spec sheets started to sound the same. The differences moved into smaller places: clamp after an hour, how strange your own voice sounds on a call, and whether the headphones fit in a bag you already own." },
      { type: "p", text: "Through the winter we kept four pairs in rotation. Two were excellent and exhausting. One was stylish and leaked. The black over-ears we now call Harbor were the ones still by the door in January." },
      { type: "h2", text: "What we stopped optimizing" },
      { type: "p", text: "Battery life past thirty hours did not change a Tuesday. A companion app full of equalizer presets did not either. The useful features were a physical button, a transparency mode that did not hiss, and pads that did not cook our ears on a heated train." },
      { type: "quote", text: "The best noise cancelling is the kind you forget to mention." },
      { type: "image", src: "assets/images/headphones-desk.jpg", alt: "Silver and tan wired on-ear headphones resting on a desk", caption: "A separate wired pair stayed at the desk. It is lovely for calls and useless the moment you stand up." },
      { type: "h2", text: "Where Harbor fits" },
      { type: "p", text: "Harbor is a closed, matte black over-ear. It isolates a carriage well enough to read, and it comes off without a struggle when someone asks which stop is next. We used it for playlists more than for mixed mastering. If your job is critical listening, buy studio cans and leave them at home." },
      { type: "ul", items: ["Choose over-ears if the trip is longer than twenty minutes.", "Keep a cheap wired pair at the desk so the travel set can charge.", "Ignore extra codecs until the fit is right.", "Test them while you speak. Your own voice matters on calls."] },
      { type: "p", text: "We paid $249, which is the point where a pair can be good without becoming a hobby. A year from now the model name on the box will change. The test will not: wear them on a loud ride home and see if you resent them." },
    ],
  },
  {
    slug: "porto-slow-week",
    title: "Porto in Late Autumn: A Slow Week Without a Checklist",
    excerpt: "A river, a steep walk, and one good bakery beat any plan that tries to collect the city in six colors.",
    category: "Travel",
    tags: ["porto", "travel", "autumn", "backpack"],
    date: "2025-11-14",
    author: { name: "Leila Costa", role: "Travel editor" },
    readTime: "9 min read",
    cover: "assets/images/porto.jpg",
    coverAlt: "Colorful riverside buildings and boats along the Douro in Porto",
    products: ["navy-commuter-pack"],
    blocks: [
      { type: "p", text: "We arrived in Porto on a Wednesday in November with a list we threw out at the airport bus. The light was already low at four. The river was the color of slate until the facades along the Ribeira turned it orange. That was enough of an itinerary." },
      { type: "p", text: "Late autumn is the honest season here. Terraces are still open, the cruise crowds thin out, and a sweater lives on the shoulders of a chair. You can walk until the hills persuade you to sit down, which they will." },
      { type: "h2", text: "A shape for the days" },
      { type: "p", text: "Mornings belonged to one bakery and a long coffee. We picked a different neighborhood each day and stopped pretending we would see the other side before lunch. The bookshop on the hill, the grocery with the good tinned fish, the miradouro that was only a viewpoint because we were already tired: those were the sights." },
      { type: "image", src: "assets/images/backpack.jpg", alt: "A navy backpack standing on a pale floor in a patch of sunlight", caption: "The navy pack carried a camera, a sweater, and a raincoat. It did not need a second bag." },
      { type: "quote", text: "A good travel day has one anchor and a lot of unscheduled walking." },
      { type: "h2", text: "What we would repeat" },
      { type: "p", text: "Stay within walking distance of the river, but sleep up the hill where the rooms are quieter. Cross the bridge once in the morning and once at dusk. Buy the pastry you can see, not the one with the longest queue and a sign in four languages." },
      { type: "ul", items: ["One neighborhood each morning.", "A raincoat, even when the sky looks decided.", "Dinner reservations only twice. The other nights should be allowed to wander.", "Comfortable shoes. The postcard streets are steeper than they look."] },
      { type: "p", text: "We packed the Navy Commuter Pack as the only carry-on. A laptop for the one afternoon of work, the Fujifilm for the walks, and enough room for a bottle of something we did not need and bought anyway. The city did not require a system. It required stopping." },
    ],
  },
  {
    slug: "weeknight-cooking",
    title: "How We Cook Weeknights When Nobody Wants to Decide",
    excerpt: "A short list of ingredients, one pan, and permission to leave the house when the list fails.",
    category: "Food",
    tags: ["cooking", "weeknight", "dinner", "kitchen"],
    date: "2025-09-27",
    author: { name: "Leila Costa", role: "Food editor" },
    readTime: "7 min read",
    cover: "assets/images/kitchen.jpg",
    coverAlt: "Eggs, vegetables, and greens arranged on a wooden cutting board",
    products: [],
    blocks: [
      { type: "p", text: "The weeknight problem is not skill. It is the vote. Two people, both hungry, both convinced they might want the other thing. We stopped solving it with recipes that begin by preheating an oven for forty minutes." },
      { type: "h2", text: "The board, not the cookbook" },
      { type: "p", text: "Dinner starts as a cutting board. Eggs, a soft herb, something red, something green, and a pan already on the stove. If we have mushrooms they go in. If we have rice from yesterday, the eggs become a finish instead of a meal. The rule is that every item on the board has to be edible even if the plan changes." },
      { type: "image", src: "assets/images/food.jpg", alt: "Three bowls of grilled meat and herbs on a wooden table", caption: "Some nights the board becomes a proper plate. Most nights it becomes a pan and toast." },
      { type: "p", text: "We keep five repeating dinners and refuse to be embarrassed by the repetition. A tomato pan, a noodle broth, a big salad with something warm on it, eggs, and a pot of beans that started on Sunday. Guests get the version with a second bowl. Tuesdays get the version that uses the herbs before they sulk." },
      { type: "quote", text: "Decision fatigue is a kitchen problem disguised as a personality flaw." },
      { type: "h2", text: "The night we do not cook" },
      { type: "p", text: "Once a week the correct meal is a table someone else set. We pick places where the first plate arrives before the conversation gets managerial. Bread, a small dish, a glass. The point is to exit the vote, not to collect restaurants." },
      { type: "image", src: "assets/images/restaurant.jpg", alt: "A plated dinner with wine glasses on a restaurant table", caption: "The off-duty meal. Someone else handles the decision and the dishes." },
      { type: "ul", items: ["Shop for a board, not for a fantasy menu.", "Repeat five dinners until they are boring in a kind way.", "Keep one restaurant that can take you on a Wednesday.", "Wash the pan before you sit down, or you will resent the meal."] },
    ],
  },
  {
    slug: "lamp-that-changed-evenings",
    title: "The Floor Lamp That Changed the Shape of Evenings",
    excerpt: "We did not need a brighter room. We needed a smaller circle of light and a reason to leave the desk.",
    category: "Product Reviews",
    tags: ["lamp", "lighting", "reading", "evenings"],
    date: "2025-08-08",
    author: { name: "Adrian Cho", role: "Lifestyle editor" },
    readTime: "6 min read",
    cover: "assets/images/lamp.jpg",
    coverAlt: "A matte gray floor lamp with a dome shade against a white wall",
    products: ["lumen-task-lamp"],
    blocks: [
      { type: "p", text: "Evenings were leaking into the desk. The monitor was the brightest object in the apartment, so the body followed it. We kept saying we would read, and then we answered one more thing because the chair at the computer was the only chair with decent light." },
      { type: "p", text: "The fix was a floor lamp with a deep shade. The Lumen Task Lamp stands beside the low chair, tilts toward a lap, and leaves the rest of the room dim. That sounds like a small domestic note. It rearranged the night." },
      { type: "h2", text: "Aim the light at the page" },
      { type: "p", text: "Overhead light makes a room available for everything, which means it stays available for work. A shaded lamp makes a room available for one activity. We wanted the second kind. The gray dome hides the bulb. The arm holds a position. You do not have to style it. You have to point it." },
      { type: "image", src: "assets/images/interior.jpg", alt: "A bright lounge with a large black arc floor lamp over a sofa", caption: "A larger arc lamp suits a shared lounge. At home we preferred the tighter task light." },
      { type: "quote", text: "If the light is everywhere, the evening belongs to whoever last emailed you." },
      { type: "ul", items: ["Put the lamp by a chair that is not your desk chair.", "Use a warm bulb and a shade you cannot see through.", "Turn the overhead off on purpose.", "Leave a book where the light already falls."] },
      { type: "p", text: "We spent $186. For that, the apartment grew a second shift. Work still happens. It just has a harder time following us to the chair." },
    ],
  },
  {
    slug: "notes-app-that-won",
    title: "Notion, Craft, and the Notes App That Won Our Week",
    excerpt: "We gave three note-taking platforms a fair month. The winner was the one we opened when we were in a hurry.",
    category: "Platform Picks",
    tags: ["notes", "notion", "craft", "writing"],
    date: "2025-07-16",
    author: { name: "Jonah Park", role: "Platform editor" },
    readTime: "8 min read",
    cover: "assets/images/notes.jpg",
    coverAlt: "A notebook page labeled Notes with a fountain pen and glasses",
    products: [],
    blocks: [
      { type: "p", text: "Every notes app promises that this time the thoughts will have a home. We believed it often enough to keep a paper notebook as insurance. This summer we ran a plain test: Notion, Craft, and the notes app already on the phone. No migrations. No new taxonomy. Just a month of real scraps." },
      { type: "h2", text: "Notion is a place for shared facts" },
      { type: "p", text: "Notion won the publishing calendar and the packing list, because other people had to see them. It lost the quick capture. Opening a database to write down a sentence you might need at the shop is how sentences go to die. We still pay for it. We stopped asking it to be a pocket." },
      { type: "h2", text: "Craft is a pleasure to write in" },
      { type: "p", text: "Craft makes a long note feel like a document instead of a form. Cards, a calm type ramp, export that does not embarrass you. We drafted two essays there and liked the room it gave a paragraph. We did not open it in line at the pharmacy. Beauty lost to reach." },
      { type: "image", src: "assets/images/laptop.jpg", alt: "Hands typing on a laptop with a monitor in the background", caption: "Long writing can live anywhere calm. Quick notes have to live where the hands already are." },
      { type: "quote", text: "The best notes app is the one that does not ask you to get organized before you are allowed to remember." },
      { type: "h2", text: "The phone won" },
      { type: "p", text: "Apple Notes won the week because it was already open, already synced, and already willing to hold a grocery line next to a paragraph. We use folders sparingly: Inbox, Journal, Shared. Once a week the inbox gets sorted into Notion if someone else needs it, or into Craft if it wants to become a piece." },
      { type: "ul", items: ["Notion for anything two people must edit.", "Craft for drafts that deserve a page.", "The built-in notes app for everything captured in under thirty seconds.", "Paper when the point is to slow down."] },
      { type: "p", text: "None of this is a verdict against the others. It is a verdict against using one container for every kind of thought. The week got lighter when we let each tool keep its job." },
    ],
  },
  {
    slug: "weekend-camera",
    title: "A Weekend Camera for People Who Hate Menus",
    excerpt: "The Fujifilm X-T10 put shutter speed on a dial and gave us our walks back.",
    category: "Product Reviews",
    tags: ["camera", "fujifilm", "photography", "weekend"],
    date: "2025-06-03",
    author: { name: "Mara Ellison", role: "Product editor" },
    readTime: "8 min read",
    cover: "assets/images/camera-lens.jpg",
    coverAlt: "A black Fujifilm X-T10 camera with a zoom lens on a white background",
    products: ["fujifilm-x-t10", "navy-commuter-pack"],
    blocks: [
      { type: "p", text: "We used to travel with a bag of lenses and a camera that wanted a conversation before it took a picture. The files were excellent. The mornings were not. Half of them disappeared into a menu named after a feature we would never use twice." },
      { type: "p", text: "The Fujifilm X-T10 ended that arrangement. It is an older body, easy to find renewed, and it still does the thing expensive cameras keep hiding: it lets you set the exposure with your fingers." },
      { type: "h2", text: "Dials, then walking" },
      { type: "p", text: "Shutter speed is a dial on the top plate. Aperture is a ring on the lens. ISO can stay on auto until the evening. There is a menu, because every camera has a menu. You can take a weekend of photographs without opening it, which is the review." },
      { type: "image", src: "assets/images/camera.jpg", alt: "A camera body surrounded by several loose lenses on a dark table", caption: "The kit we stopped carrying. More glass did not make the day more interesting." },
      { type: "quote", text: "A weekend camera should be ready before your coffee cools." },
      { type: "h2", text: "What we gave up" },
      { type: "p", text: "We gave up chasing the newest sensor and the second zoom. The X-T10 with one short lens covered markets, river light, and dinner tables. Faces at arm's length are kinder on this sensor than on a phone that is trying to smooth them into a poster." },
      { type: "ul", items: ["Buy the body renewed and spend the difference on one lens you like.", "Leave the extra lenses at home for the first three trips.", "Learn the dials once. Then stop reading about cameras.", "Carry it in a daypack, not a dedicated cube that announces a hobby."] },
      { type: "p", text: "A renewed kit sat near $680 when we bought ours. That is real money, and it is still less than the system we were feeding. The pictures from Porto are not better because the camera is fashionable. They exist because the camera was in a jacket pocket and already set." },
    ],
  },
  {
    slug: "morning-routines",
    title: "Morning Routines That Do Not Require a Five a.m. Alarm",
    excerpt: "Light, water, and a short pot of coffee. The rest of the routine industry can wait until after breakfast.",
    category: "Lifestyle",
    tags: ["morning", "coffee", "routine", "lifestyle"],
    date: "2025-05-19",
    author: { name: "Adrian Cho", role: "Lifestyle editor" },
    readTime: "6 min read",
    cover: "assets/images/morning.jpg",
    coverAlt: "Sunrise over a misty green field with trees in silhouette",
    products: ["weekday-pourover"],
    blocks: [
      { type: "p", text: "The five o'clock morning is a genre. It photographs as discipline and often functions as debt: a person borrowing sleep from the afternoon and calling the interest a personality. We tried it. The writing was not better. The mood was a performance." },
      { type: "p", text: "What worked was smaller and later. Wake when the light is already negotiating with the room. Drink water before you negotiate with the phone. Make coffee in a way that has a beginning and an end." },
      { type: "image", src: "assets/images/ridge.jpg", alt: "A volcanic ridge lit by warm dawn light above a sea of fog", caption: "The light we mean. You do not have to be on a ridge to notice that the day has started." },
      { type: "h2", text: "Eight minutes, not a ritual" },
      { type: "p", text: "The Weekday Pour-Over Set is a glass carafe and a gooseneck kettle. It looks like a hobby and behaves like a kettle. Grind, wet the paper, pour until the mug is honest. Eight minutes. If it starts taking twenty, you have accidentally joined a club." },
      { type: "image", src: "assets/images/pourover.jpg", alt: "A hand pouring water from a gooseneck kettle into a glass coffee carafe", caption: "Weekday coffee. One carafe, paper filters, no speech about extraction." },
      { type: "quote", text: "A routine should survive a bad night's sleep. Otherwise it is a costume." },
      { type: "p", text: "We keep the phone in the kitchen, not the bedroom, and we do not open mail until the cup is empty. Some mornings that is the whole achievement. The sunrise in the field is a reminder, not a requirement. Most of our mornings happen at a counter, and they are still mornings." },
      { type: "ul", items: ["Let the alarm match the life you actually have.", "Water, then coffee, then the phone.", "Keep the coffee setup on the counter or you will not use it.", "Protect one quiet cup. The optimization can start after that."] },
    ],
  },
  {
    slug: "small-shop-shopify",
    title: "What We Learned Opening a Small Shop on Shopify",
    excerpt: "The platform was the easy part. The hard part was deciding what the shop was allowed to sell.",
    category: "Platform Picks",
    tags: ["shopify", "retail", "shop", "platforms"],
    date: "2025-04-07",
    author: { name: "Jonah Park", role: "Platform editor" },
    readTime: "9 min read",
    cover: "assets/images/retail.jpg",
    coverAlt: "A small clothing shop with shelves, hanging garments, and pendant lights",
    products: [],
    blocks: [
      { type: "p", text: "In April 2025 we opened a small shop for a friend who already knew her clothes and did not want to know her checkout. Shopify was the platform because the alternatives were either a plugin maze or a marketplace that would own the customer. The software did not scare us. The assortment did." },
      { type: "h2", text: "Start with the floor, not the theme" },
      { type: "p", text: "We spent a week looking at themes and an afternoon in shops that already worked. The useful rooms had fewer stories on the wall, a table at hand height, and a way to see price without hunting. Online, that translated to a plain collection page, large photographs, and shipping stated before the cart." },
      { type: "image", src: "assets/images/books.jpg", alt: "A stack of business and startup books on a white table", caption: "We read less of the stack than we planned. The shop improved when we watched a real counter instead." },
      { type: "p", text: "Shopify's defaults are better than its app aisle. Payments, discount codes, and a basic product page covered the launch. We added one app for print-ready packing slips and then stopped. Every extra app was a settings panel someone would have to remember in December." },
      { type: "quote", text: "A small shop fails from too many products more often than from too little software." },
      { type: "h2", text: "What we would do again" },
      { type: "p", text: "Twelve products, not forty. Photographs in the same light. A story on the about page written like a person, not a brand manifesto. Email only when there is something to ship or something to say. The platform can send a campaign every morning. That does not mean the shop should." },
      { type: "image", src: "assets/images/team.jpg", alt: "A small team working on laptops around a wooden table", caption: "Launch week was four people, one checklist, and a shared page for what was actually live." },
      { type: "ul", items: ["Use Shopify for checkout and custody of the customer list.", "Write shipping in plain language on the product page.", "Cap the catalog until the first dozen items have sold to someone who is not a friend.", "Skip the app that promises to optimize a store you have not met yet."] },
      { type: "p", text: "The shop is still open. The platform disappeared, which is the compliment. What people remember is the navy crewneck and the fact that the package arrived when the page said it would." },
    ],
  },
];

/**
 * 按日期从新到旧返回文章。
 * @returns {Article[]}
 */
export function getArticles() {
  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * 按 slug 查找文章。
 * @param {string} slug
 * @returns {Article|undefined}
 */
export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}

/**
 * 取出相关文章：同类优先，其余按新到旧补齐。
 * @param {Article} article
 * @param {number} [count]
 * @returns {Article[]}
 */
export function getRelatedArticles(article, count = 3) {
  const rest = getArticles().filter((item) => item.slug !== article.slug);
  const same = rest.filter((item) => item.category === article.category);
  const others = rest.filter((item) => item.category !== article.category);
  return [...same, ...others].slice(0, count);
}

/**
 * 判断文章是否匹配搜索词。
 * @param {Article} article
 * @param {string} query
 * @returns {boolean}
 */
export function articleMatches(article, query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return true;

  const body = article.blocks
    .map((block) => {
      if ("text" in block && block.text) return block.text;
      if ("items" in block && block.items) return block.items.join(" ");
      if ("caption" in block && block.caption) return `${block.alt} ${block.caption}`;
      return "";
    })
    .join(" ");

  const haystack = [article.title, article.excerpt, article.category, article.author.name, article.tags.join(" "), body]
    .join(" ")
    .toLowerCase();

  return words.every((word) => haystack.includes(word));
}
