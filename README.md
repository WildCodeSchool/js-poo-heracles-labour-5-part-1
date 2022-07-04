# Labors of Heracles # 5: the deer of Cérynie
Prerequisite: clone this *repository*.

Heracles' next mission is to capture the fantastic doe of Cerynia, but without harming it at the risk of provoking the wrath of Artemis.

For this new workshop, you pick up where you left off in the previous step. The hero can move and attack monsters on the map.

> Note: Some UX additions have been added. You can now view information about your enemies by clicking on the button at the bottom. This will allow you to follow the evolution of the fights.

> Note: minor modifications have been made to the class `Fighter`, `Hero` and `Monster` in order to simplify their instantiation. `x` and `y` have been added as parameters in the `Fighters` class constructor, while `image`, `dexterity` and `strength` have been removed (because there have default values) so that they can be redefined directly in Hero. So in *index.js*, to instantiate the Hero, all you have to do is specify `x` and `y`. The experience is also redefined by default in `Monster`

## This is the tile

The card precisely, it is a little sad. You are on the hill of Cerynia, surrounded by grasses, shrubs and streams. All of this will have to be represented.

In your src, add a Tile folder and inside:
Start by creating a new `Tile` class. A tile (a "box" on the map) will have `x` and `y` coordinates as well as an `image` to represent it.

You will notice that the `Fighter` class also has these same methods. This is logical since the tiles or the fighters must be able to be displayed and positioned on a map (arena). Our arena therefore handles objects that can be mapped and which **must** be so.

In `Tile` add a constructor with two parameters, allowing to specify the coordinates of the tile in `x` and `y` at instantiation time.
Also set an empty string as default for the `image` property;

On your map, you will have several types of tiles representing the different elements of the landscape (grass, water...), each one having its own specificities (crossable or not...). You will never have to directly instantiate a `Tile` class, but always something more precise.
> *In OOP, this is called a so-called abstact class! It is an Object class that is not instantiated directly but always through another class.*

You will create as many new classes as there are tile types. To start, create a `Grass` class and a `Water` class both inheriting from `Tile`. For the moment, only specify a default value to the `image` property in the constructor *grass.png* and *water.jpg* respectively and don't forget to pass the value of `x` and `y` in the `super()`. These classes are a bit empty and not very different, but they will specialize later ;-).

> Notes, consider adding your files as resources in the *index.html*

It is now necessary to pass the tiles to the map. Uncomment the code in the *index.js*. You should see grass and water appear, with some squares remaining empty.

## Distrusts you to still waters

While Heracles can move smoothly on grass (or on ground with no tile defined), he cannot move on water. However, for the moment there is no constraint and our hero can move wherever he wants.

To fix this, start by adding a new `crossable` property (boolean *true* by default) to `Tile`.

In the `Water` class, set `crossable` to *false*;

Now you are going to slightly modify the behavior of the `move()` method of `Arena` so that Heracles cannot move on a tile that does not allow it.
1. Start by creating a method `getTile(x, y)` allowing to retrieve a tile according to its coordinates (or an empty array if the box is empty).
2. In `move()`, get the tile corresponding to the hero's potential destination.
3. Check there is a tile, and that the tile is crossable thanks to the new `crossable` property.
4. If not, generate the error message "Not crossable" ; if yes, the displacement continues.

Tests on the map that the hero can cross grass but not water.

## Map filling

Adds a new class `Bush`, inheriting from `Tile`, non crossable and displaying *bush.png*.

Reset the game, you see that the map is starting to fill up nicely and it's very easy to add new types of tiles. For the moment we will be satisfied with these three tiles but you will have to create new ones later!
