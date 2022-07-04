/** creating the hero Heracles */
const heracles = new Hero('👨 Heracles', 0, 0);

/** Creating his weapon and associating it */
const bow = new Weapon('bow', 8, './images/bow.svg', 1);
heracles.weapon = bow;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
heracles.shield = shield;


/** Creating all of his adversaries */
const Ceryneian = new Monster('🐴 Ceryneian Hind', 9, 6);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(heracles, Ceryneian);


/** Creating the arena place  */
const arena = new Arena(heracles, [Ceryneian])
const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.setMoveEvent(arena);
ArenaHTML.setMonsterClick(arena);

arena.tiles = [];

/** Uncomment the code here when your class Grass and Water are ready */
// const grass = [
//   new Grass(0, 0),
//   new Grass(1, 0),
//   new Grass(8, 0),
//   new Grass(9, 0),
//   new Grass(0, 1),
//   new Grass(1, 1),
//   new Grass(8, 1),
//   new Grass(9, 1),
//   new Grass(0, 2),
//   new Grass(1, 2),
//   new Grass(7, 2),
//   new Grass(8, 2),
//   new Grass(0, 3),
//   new Grass(1, 3),
//   new Grass(2, 3),
//   new Grass(3, 3),
//   new Grass(4, 3),
//   new Grass(7, 3),
//   new Grass(8, 3),
//   new Grass(0, 4),
//   new Grass(1, 4),
//   new Grass(0, 5),
//   new Grass(0, 6)
// ];

// const water = [
//   new Water(2, 0),
//   new Water(3, 0),
//   new Water(4, 0),
//   new Water(5, 0),
//   new Water(6, 0),
//   new Water(7, 0),
//   new Water(2, 1),
//   new Water(3, 1),
//   new Water(4, 1),
//   new Water(5, 1),
//   new Water(6, 1),
//   new Water(7, 1),
//   new Water(3, 1),
//   new Water(4, 1),
//   new Water(3, 2),
//   new Water(4, 2),
//   new Water(5, 2),
//   new Water(6, 2),
//   new Water(5, 3),
//   new Water(6, 3),
//   new Water(6, 4),
//   new Water(6, 5),
//   new Water(7, 5),
//   new Water(7, 6),
//   new Water(0, 8),
//   new Water(1, 8),
//   new Water(0, 7),
//   new Water(0, 9),
//   new Water(1, 9),
//   new Water(2, 9),
//   new Water(3, 9),
//   new Water(4, 9),
//   new Water(5, 9),
//   new Water(7, 4),
//   new Water(8, 4),
//   new Water(8, 4),
//   new Water(8, 5),
//   new Water(9, 5),
// ]

// arena.tiles = [...grass, ...water];


/** Second part to uncomment when Bush class are implemented */
// const bush = [
//   new Bush(2, 2),
//   new Bush(4, 4),
//   new Bush(3, 7),
//   new Bush(2, 5),
//   new Bush(6, 9),
//   new Bush(7, 9),
//   new Bush(7, 8),
//   new Bush(7, 7),
//   new Bush(6, 8),
//   new Bush(9, 2)
// ]
// arena.tiles = [...grass, ...water, ...bush]

ArenaHTML.createArena(arena);

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = (type) => {
  if (openingModal) {
    const info = new InfoTemplate('info');
    if (type === "hero") info.createHeroInfoTemplate(heracles);
    if (type === "ennemy") info.createEnnemyInfoTemplate([Ceryneian]);
    document.getElementById("info").style.display = "flex";
    openingModal = false;
  }
}

const closeModal = () => {
  const heroInfo = document.getElementById("info");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
}
