export const dummyRecipes = [
  {
    id: "1",
    title: "Tartine's Country Bread",
    date: "2018-03-27",
    photoURL: "/assets/tartine.jpg",
    hydration: "75%",
    createdBy: "Chad Robertson",
    description: "The country bread from Tartine Bakery in San Francisco has reached cult status among passionate bakers, and deservedly so.",
    totalFlourGrams: 1000,
    ingredients: [
      {
        id: 1,
        name: "Leaven",
        grams: 200,
        ounces: "",
        category: "leaven",
        bakersPercentage: "20%"
      },
      {
        id: 2,
        name: "Bread Flour",
        grams: 900,
        ounces: "",
        category: "flour",
        bakersPercentage: "90%"
      },
      {
        id: 3,
        name: "Whole Wheat Flour",
        grams: 100,
        ounces: "",
        category: "flour",
        bakersPercentage: "10%"
      },
      {
        id: 4,
        name: "Fine Sea Salt",
        grams: 20,
        ounces: "",
        category: "salt",
        bakersPercentage: "2%"
      },
      {
        id: 5,
        name: "Water",
        grams: 750,
        ounces: "",
        category: "water",
        bakersPercentage: "75%",
        temperature: "80°"
      }
    ],
    instructions: [
      {
        stepNumber: 1,
        step: "Make the Leaven",
        instruction: "Mix 1 tablespoon starter with 200g warm water. Add 200g of white/wheat flour mix and combine. Let rest 12 hours, or until tablespoon of leaven floats in room temp water.",
        minutes: 720
      },
      {
        stepNumber: 2,
        step: "Add Leaven to Water",
        instruction: "In a large bowl, combine 200 grams of leaven with 700 grams of warm water and stir to disperse."
      },
      {
        stepNumber: 3,
        step: "Add Flour",
        instruction: "Add 900 grams of white-bread flour and 100 grams of whole-wheat flour to bowl and use your hands to mix until no traces of dry flour remain. The dough will be sticky and ragged. Cover bowl with a towel and let dough rest for 25 to 40 minutes at room temperature.",
        minutes: 35
      },
      {
        stepNumber: 4,
        step: "Add Salt",
        instruction: "Add 20 grams fine sea salt and 50 grams warm water. Use hands to integrate salt and water into dough thoroughly. The dough will begin to pull apart, but continue mixing; it will come back together."
      },
      {
        stepNumber: 5,
        step: "Let Dough Rise",
        instruction: "Cover with a towel and let the dough rise for 30 minutes at about 75-80°F.",
        minutes: 30
      },
      {
        stepNumber: 6,
        step: "Fold Dough",
        instruction: "Fold dough by dipping hand in water, taking hold of the underside of the dough at one quadrant and stretching it up over the rest of the dough. Repeat this action 3 more times, rotating bowl a quarter turn for each fold. Do this every half-hour for 2 1/2 hours more (3 hours total). The dough should be billowy and increase in volume 20 to 30 percent. If not, continue to let rise and fold for up to an hour more.",
        minutes: 180
      },
      {
        stepNumber: 7,
        step: "Cut, Round, and Rest",
        instruction: "Transfer dough to a work surface and dust top with flour. Use a dough scraper to cut dough into 2 equal pieces and flip them over so floured sides are face down. Fold the cut side of each piece up onto itself so the flour on the surface remains entirely on the outside of the loaf; this will become the crust. Work dough into taut rounds. Place the dough rounds on a work surface, cover with a towel, and let rest 30 minutes.",
        minutes: 30
      },
      {
        stepNumber: 8,
        step: "Line Baskets and Flour Towels",
        instruction: "Line two 10- to 12-inch bread-proofing baskets or mixing bowls with towels. Use some rice/whole wheat flour mixture to generously flour towels (reserve some flour mixture for later)."
      },
      {
        stepNumber: 9,
        step: "Final Fold",
        instruction: "Dust rounds with whole-wheat flour. Use a dough scraper to flip them over onto a work surface so floured sides are facing down. Take one round, and starting at the side closest to you, pull the bottom 2 corners of the dough down toward you, then fold them up into the middle third of the dough. Repeat this action on the right and left sides, pulling the edges out and folding them in over the center. Finally, lift the top corners up and fold down over previous folds. (Imagine folding a piece of paper in on itself from all 4 sides.) Roll dough over so the folded side becomes the bottom of the loaf. Shape into a smooth, taut ball. Repeat with other round."
      },
      {
        stepNumber: 10,
        step: "Final Rest",
        instruction: "Transfer rounds, seam-side up, to prepared baskets. Cover with a towel and return dough to the 75- to 80-degree environment for 3 to 4 hours. (Or let dough rise for 10 to 12 hours in the refrigerator. Bring back to room temperature before baking.)",
        minutes: 210
      },
      {
        stepNumber: 11,
        step: "Score & Bake First Loaf",
        instruction: "About 30 minutes before baking, place a Dutch oven or lidded cast-iron pot in the oven and heat it to 500 degrees. Dust tops of dough, still in their baskets, with whole-wheat/rice-flour mixture. Very carefully remove heated pot from oven and gently turn 1 loaf into pan seam-side down. Use a lame (a baker’s blade) or razor blade to score the top of the bread a few times to allow for expansion, cover and transfer to oven. Reduce temperature to 450 degrees and cook for 20 minutes. Carefully remove lid (steam may release) and cook for 20 more minutes or until crust is a rich, golden brown color.",
        minutes: 40
      },
      {
        stepNumber: 12,
        step: "Score & Bake Second Loaf / Cool Loaves",
        instruction: "Transfer bread to a wire rack to cool for at least 15 minutes before slicing. The bottom of the loaf should sound hollow when tapped. Increase oven temperature to 500 degrees, clean out pot and repeat this process with the second loaf.",
        minutes: 60
      },
    ]
  },
  {
    id: "2",
    title: "King Arthur's French Baguette",
    date: "2018-07-27",
    photoURL: "/assets/baguette.jpg",
    hydration: "75%",
    createdBy: "Sally Waldorf",
    description: "These crunchy baguettes feature a chewy interior riddled with holes, and a crisp, deep-gold crust.",
    totalFlourGrams: 538,
    ingredients: [
      {
        id: 1,
        name: "Water",
        grams: 113,
        ounces: "",
        category: "water",
        temperature: "cool",
        forPreferment: "starter",
        bakersPercentage: "21%"
      },
      {
        id: 2,
        name: "Instant Yeast",
        grams: 0.19,
        ounces: "",
        category: "yeast",
        forPreferment: "starter",
      },
      {
        id: 3,
        name: "All-Purpose Flour",
        grams: 120,
        ounces: "",
        category: "flour",
        forPreferment: "starter",
        bakersPercentage: "22%"
      },
      {
        id: 4,
        name: "Instant Yeast",
        grams: 4.65,
        ounces: "",
        category: "yeast",
        bakersPercentage: "0.86%"
      },
      {
        id: 5,
        name: "Water",
        grams: 255,
        ounces: "",
        category: "water",
        temperature: "lukewarm",
        bakersPercentage: "47%"
      },
      {
        id: 6,
        name: "All-Purpose Flour",
        grams: 418,
        ounces: "",
        category: "flour",
        bakersPercentage: "78%"
      },
      {
        id: 7,
        name: "Salt",
        grams: 11.38,
        ounces: "",
        category: "salt",
        bakersPercentage: "2.1%"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        step: "Make the Starter",
        instruction: "To make the starter: Mix all starter ingredients together to make a soft dough. Cover and let rest at room temperature for about 14 hours; overnight works well. The starter should have expanded and become bubbly.",
        minutes: 840
      },
      {
        stepNumber: 2,
        step: "Make Dough",
        instruction: "Mix and knead all dough ingredients together to make a soft, somewhat smooth dough; it should be cohesive, but the surface may still be a bit rough. If you're using a stand mixer, knead for about 4 minutes on medium-low speed (speed 2 on a KitchenAid); the finished dough should stick a bit at the bottom of the bowl.",
        minutes: 8
      },
      {
        stepNumber: 3,
        step: "Rise and Deflate",
        instruction: "Place the dough in a lightly greased medium-sized bowl, cover the bowl, and let the dough rise for 90 minutes, gently deflating it, folding the edges into the center, and turning it over after 45 minutes.",
        minutes: 135
      },
      {
        stepNumber: 4,
        step: "Divide into Three",
        instruction: "Turn the dough out onto a lightly greased work surface. Gently deflate it, and divide it into three equal pieces."
      },
      {
        stepNumber: 5,
        step: "Round & Rest",
        instruction: "Round each piece of dough into a rough ball by pulling the edges into the center. Cover with greased plastic wrap, and let rest for 15 minutes; or for up to 1 hour, if that works better with your schedule.",
        minutes: 15
      },
      {
        stepNumber: 6,
        step: "Flatten & Fold",
        instruction: "Working with one piece at a time, flatten the dough slightly then fold it nearly (but not quite) in half, sealing the edges with the heel of your hand. Turn the dough around, and repeat: fold, then flatten. Repeat this whole process again; the dough should have started to elongate itself."
      },
      {
        stepNumber: 7,
        step: "Roll Out Baguettes",
        instruction: "With the seam side down, cup your fingers and gently roll the dough into a 16\" log. Your goal is a 15\" baguette, so 16\" allows for the slight shrinkage you'll see once you're done rolling. Taper each end of the log slightly to create the baguette's typical pointy end."
      },
      {
        stepNumber: 8,
        step: "Rest & Rise",
        instruction: "Place the logs seam-side down onto a lightly greased or parchment-lined sheet pan or pans; or into the folds of a heavily floured cotton dish towel (or couche). Cover them with lightly greased plastic wrap, and allow the loaves to rise until they're slightly puffy (\"marshmallow-y\" is the term we use in our baking school). The loaves should certainly look lighter and less dense than when you first shaped them, but won't be anywhere near doubled in bulk. This should take about 45 minutes to an hour at room temperature (about 68°F).",
        minutes: 45
      },
      {
        stepNumber: 9,
        step: "Prep the Oven",
        instruction: "Towards the end of the rising time, preheat your oven to 450°F with a cast iron pan on the floor of the oven, or on the lowest rack. If you're using a baking stone, place it on a middle rack. Start to heat 1 1/2 cups water to boiling."
      },
      {
        stepNumber: 10,
        step: "Prep Baguettes for Scoring",
        instruction: "If your baguettes have risen in a dish towel or couche, gently roll them (seam side down) onto a lightly greased (or parchment-lined) baking sheet. If you plan on baking them on a baking stone, roll them onto a piece of parchment, and lift the parchment onto a baker's peel."
      },
      {
        stepNumber: 11,
        step: "Score the Baguettes",
        instruction: "Using a baker's lame (a special curved blade) or a very sharp knife held at about a 45° angle, make three to five long lengthwise slashes in each baguette."
      },
      {
        stepNumber: 12,
        step: "Generate Steam in the Oven",
        instruction: "Load the baguettes into the oven. If you’re baking on a stone, use a baker’s peel to transfer the baguettes, parchment and all, onto the hot stone. Carefully pour the boiling water into the cast iron pan, and quickly shut the oven door. The billowing steam created by the boiling water will help the baguettes rise, and give them a lovely, shiny crust."
      },
      {
        stepNumber: 13,
        step: "Bake and Cool",
        instruction: "Bake the baguettes — on the pan, or on a stone — for 24 to 28 minutes, or until they're a very deep golden brown. Remove them from the oven and cool them on a rack. Or, for the very crispiest baguettes, turn off the oven, crack it open about 2\", and allow the baguettes to cool completely in the oven, until both baguettes and oven are at room temperature.",
        minutes: 45
      },
    ]
  }
];