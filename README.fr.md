# Travaux d'Héraclès #5 : la biche de Cérynie
Prérequis : cloner ce *repository*.

La prochaine mission d'Héraclès est de capturer la fantastique biche de Cérynie, mais sans lui faire aucun mal au risque de provoquer la colère d'Artémis.

Pour ce nouvel atelier, tu reprends là encore où tu t'étais arrêté à l'étape précédente. Le héros peut se déplacer et attaquer les monstres sur la carte.

> Remarque : Quelques ajouts UX ont été ajoutés. Tu peux maintenant consulté les infos sur tes ennemies en cliquant sur le bouton en bas. Cela te permettra de mieux suivre l'évolution des combats.

> Remarque : des modifications mineures ont également été effectuées sur la classe `Fighter`, `Hero` et `Monster` afin d'en simplifier l'instanciation. `x` et `y` ont été ajoutés en paramètres dans le constructeur de la classe `Fighters`, tandis qu'`image`, `dexterity` et `strength` ont été enlevés (car il y a déjà des valeurs par défaut) afin de pouvoir être redéfinies directement dans Hero. Ainsi dans *index.js*, pour instancier le Hero il n'y a plus qu'à lui préciser `x `et `y`. L'experience est également redéfinie par défault dans `Monster`

## C'est la tuile

La carte justement, elle est un peu triste. Tu te trouves sur la colline de Cérynie, entourée d'herbes, d'arbustes et de cours d'eau. Il va falloir représenter tout cela.

Dans ton *src*, ajoute un folder Tile et à l'intérieur :
Commence par créer une nouvelle classe `Tile`. Une tuile (une "case" sur la carte) va avoir des coordonnées `x` et `y` ainsi qu'une `image` pour la représenter.

Tu remarqueras que la classe `Fighter` possède également ces mêmes méthodes. C'est logique puisque les tuiles ou les combattants doivent pouvoir être affichés et positionnés sur une carte (arène). Notre arène manipule donc des objets cartographiables et qui **doivent** impérativement l'être.

Dans `Tile` ajoute un constructeur avec deux paramètres, permettant de spécifier les coordonnées de la tuile en `x` et `y` au moment de l'instanciation.
Mets également une chaîne vide par défaut pour la propriété `image`;

Sur ta carte, tu vas avoir plusieurs types de tuiles représentant les différents éléments du paysage (herbe, eau...), chacune ayant ses propres spécifités (traversable ou non...). Tu ne seras jamais amené à instancier directement une classe `Tile`, mais toujours quelques chose de plus précis.
> *En POO, c'est ce que l'on appelle une classe dites abstaite! C'est une classe Objet qui n'est pas instancié directement mais toujours via le biais d'une autre classe.*

Tu vas créer autant de nouvelles classes que de types de tuile. Créé pour commencer une classe `Grass` et une `Water` toutes deux héritant de `Tile`. Pour le moment, spécifie uniquement une valeur par défaut à la propriété `image` dans le constructor respectivement *grass.png* et *water.jpg* et n'oublies pas de passer la valeur de `x` et `y` dans le `super()`. Ces classes sont un peu vides et peu différentes, mais elles vont se spécialiser par la suite ;-).

> Remarques, penses à ajouter tes fichiers en ressources dans le *index.html* (En bas, dans la bonne section)

Il faut maintenant passer les tuiles à la carte. Décommente la première partie de code dans le *index.js*. Tu devrais voir apparaître de l'herbe et de l'eau, certaines cases restant vides.

## Méfie toi de l'eau qui dort

Si Héraclès peut se déplacer sans problème sur l'herbe (ou sur un sol sans tuile définie), il ne peut pas se déplacer sur l'eau. Or, pour le moment il n'y a aucune contrainte et notre héros peut se déplacer où bon lui semble.

Pour régler cela, commence par ajouter une nouvelle propriété `crossable` (booléen *true* par défaut) à `Tile`.

Dans la classe `Water`, passe `crossable` à *false*;

Maintenant, tu vas modifier légèrement le comportement de la méthode `move()` d'`Arena` pour qu'Héraclès ne puisse pas se déplacer sur une tuile qui ne l'autoriserait pas.
1. Commence par créer une méthode `getTile(x, y)` permettant de récupérer une tuile en fonction de ses coordonéés (ou un tableau vide si la case est vide).
2. Dans `move()`, utilise cette méthode pour récupérer la tuile potentielle correspondant à la destination potentielle du héros.
3. Vérifie si il y a une tuile et si oui, que la tuile est traversable grâce notamment à la nouvelle propriété `crossable`.
4. Sinon, génère le message d'erreur "Not crossable" ; si oui, le déplacement continue.

Teste sur la carte que le héros peut bien traverser l'herbe mais pas l'eau.

## Remplissage de la carte

Ajoute une nouvelle classe `Bush`, héritant de `Tile`, non traversable et affichant *bush.png*.

Réinitialise le jeu et décommente la deuxième partie de code dans le *index.js*. Tu vois que la carte commence à bien se remplir et qu'il est très facile d'ajouter de nouveaux types de tuiles. Pour l'instant nous nous contenterons de ces trois tuiles mais tu seras amené à en créer de nouvelles par la suite !
