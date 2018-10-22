const pokedexURL = "https://pokeapi.co/api/v2/pokemon/";
const answersContainer = document.querySelector('.answers-container');
const spriteContainer = document.querySelector('.img1');
const pokemonBio = document.querySelector('.pokemon-bio');
const nextPokemonButton = document.querySelector('.next-pokemon'); document.querySelector('.next-pokemon');
const answers = document.querySelector('.answer');
const visibility = document.querySelector('.visibility');
const newP = document.createElement("p");
const resetButton = document.querySelector('.reset');



newP.className = "row btn btn-success"
let attempts =0;
let correct=0;
let randomAnswer;
let pokeBio;

let triviaArr = [];


  triviaArr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*Math.floor(72)) + 649}`).then(results => {
  let spriteImage = document.createElement("img");
  spriteImage.src = results.data.sprites.front_default;
  spriteContainer.appendChild(spriteImage);
  let randomAnswer = document.createElement("p");
  randomAnswer.setAttribute("class", "answer correct btn btn-secondary")
  randomAnswer.setAttribute("onclick", "event.preventDefault()");
  randomAnswer.innerHTML = "It's a " + results.data.name +"!";
  let randomAnswerRow = document.createElement("div");
  randomAnswerRow.setAttribute("class", "row justify-content-center correct");
  randomAnswerRow.appendChild(randomAnswer);
  answersContainer.appendChild(randomAnswerRow);
  let pokeBio = document.createElement('p');
  if(results.data.name === 'chespin'){
    pokeBio.innerHTML = '';
  } else if(results.data.name === 'quilladin'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'chesnaught'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'fennekin'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'braixen'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'delphox'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'froakie'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'frogadier'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'greninja'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'bunnelby'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'diggersby'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'fletchling'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'fletchinder'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'talonflame'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'scatterbug'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'spewpa'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'vivillion'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'litleo'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'pyroar'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'flabebe'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'floette'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'florges'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'skiddo'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'gogoat'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'pancham'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'pangoro'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'furfrou'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'espurr'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'meowstic'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'honedge'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'doublade'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'aegislash'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'spritzee'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'aromatisse'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'swirlix'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'slurpuff'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'inkay'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'malamar'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'binacle'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'barbaracle'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'skrelp'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'dragalge'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'clauncher'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'clawitzer'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'helioptile'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'heliolisk'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'tyrunt'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'tyrantrum'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'amaura'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'aurorus'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'sylveon'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'hawlucha'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'dedenne'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'carbink'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'goomy'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'sliggoo'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'goodra'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'klefki'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'phantump'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'trevenany'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'pumpkaboo'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'gourgeist'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'bergmite'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'avalugg'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'noibat'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'noivern'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'xerneas'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'yveltal'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'zygarde'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'diancie'){
      pokeBio.innerHTML = ""
  } else if(results.data.name === 'hoopa'){
      pokeBio.innerHTML = "."
  } else if(results.data.name === 'volcanion'){
      pokeBio.innerHTML = ""
  }
  pokemonBio.appendChild(pokeBio);
  for(let i=0; i < 3; i++){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*Math.floor(72)) + 649}`).then(results => {
    let randomAnswer = document.createElement("p");
    randomAnswer.setAttribute("class", "answer incorrect btn btn-secondary");
    randomAnswer.setAttribute("onclick", "event.preventDefault()");
    randomAnswer.innerHTML = "It's a " + results.data.name +"!";
    let randomAnswerRow = document.createElement("div");
    randomAnswerRow.setAttribute("class", "row justify-content-center incorrect");
    randomAnswerRow.appendChild(randomAnswer);
    answersContainer.appendChild(randomAnswerRow);
    resetButton.addEventListener("click", e => {
      attempts = 0;
      correct = 0;
      newP.innerHTML = `Your accuracy has been reset `
    });
    answersContainer.addEventListener("click", e => {
      if (event.target.className === "answer correct btn btn-secondary") {
        correct++;
        attempts++;
        event.target.className = "answer correct btn btn-success"
      }
      else if(event.target.className === "answer incorrect btn btn-secondary"){
        attempts++
        event.target.className ="answer incorrect btn btn-danger"
      }
      console.log(correct, attempts)
      let percentage = correct/attempts;
      newP.innerHTML = `Your accuracy is ${(percentage).toFixed(2)*100}% `
      visibility.appendChild(newP);
    });
  })
}
}));

nextPokemonButton.addEventListener("click", e => {
  if(event.target.className = "next-pokemon btn btn-secondary" && triviaArr.length > 0){
    // triviaArr.pop();
    while (answersContainer.hasChildNodes()) {
    answersContainer.removeChild(answersContainer.firstChild);
    }
    while (spriteContainer.hasChildNodes()) {
    spriteContainer.removeChild(spriteContainer.firstChild);
    }
    while (pokemonBio.hasChildNodes()) {
    pokemonBio.removeChild(pokemonBio.firstChild);
    }

    event.target.className = "next-pokemon btn btn-secondary";
    triviaArr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*Math.floor(72)) + 649}`).then(results => {
    let spriteImage = document.createElement("img");
    spriteImage.src = results.data.sprites.front_default;
    spriteContainer.appendChild(spriteImage);
    let randomAnswer = document.createElement("p");
    randomAnswer.setAttribute("class", "answer correct btn btn-secondary")
    randomAnswer.setAttribute("onclick", "event.preventDefault()");
    randomAnswer.innerHTML = "It's a " + results.data.name +"!";
    let randomAnswerRow = document.createElement("div");
    randomAnswerRow.setAttribute("class", "row justify-content-center correct");
    randomAnswerRow.appendChild(randomAnswer);
    answersContainer.appendChild(randomAnswerRow);
    let pokeBio = document.createElement('p');
      if(results.data.name === 'bulbasaur'){
        pokeBio.innerHTML = 'Is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and scleras. It also has pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.';
      } else if(results.data.name === 'venusaur'){
          pokeBio.innerHTML = "Is a quadruped Pokémon similar to a dinosaur. It has blue-green skin with darker patches. On top of its head are pointed ears with black insides, and it has narrow red eyes. It has a short, rounded snout with a wide mouth. Two pointed teeth protrude from its upper jaw. Each of its feet has three claws on them. The bulb on its back has bloomed into a large pink bud. A short brown trunk surrounded by leafy green fronds supports the bud. The weight of the plant prevents this Pokémon from standing on its hind legs and forces its legs to grow sturdy. When its flower is ready to bloom, it gives off a distinct, strong sweet-smelling aroma and starts swelling. This Pokémon will also start spending more time in sunlight in preparation for its upcoming evolution. Exposure to sunlight adds to the strength of both this Pokémon  and its plant. This Pokémon’s natural habitat is plains."
      } else if(results.data.name === 'ivysaur'){
          pokeBio.innerHTML = "Is a squat, quadruped Pokémon with bumpy, blue-green skin. It has small, circular red eyes, a short, blunt snout, and a wide mouth with two pointed teeth in the upper jaw and four in the lower jaw. On top of its head are small, pointed ears with reddish pink insides. It has three clawed toes on each foot. The bud on its back has bloomed in a large pink, white-spotted flower. The flower is supported by a thick, brown trunk surrounded by green fronds. A female of this Pokémon will have a seed in the center of its flower."
      } else if(results.data.name === 'charmander'){
          pokeBio.innerHTML = "Is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. This Pokémon has blue eyes. Its arms and legs are short with four fingers and three clawed toes. A fire burns at the tip of this Pokémon's slender tail and has blazed there since this Pokémon's birth. The flame can be used as an indication of this Pokémon's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that this Pokémon dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain."
      } else if(results.data.name === 'charmeleon'){
          pokeBio.innerHTML = " Is a bipedal, reptilian creature. It has bright-red scales and a cream underside. There is a horn-like protrusion on the back of its head, and it has narrow blue eyes and a long snout. It has relatively long arms with three sharp claws. Its short legs have feet with three claws and cream-colored soles. The tip of its long, powerful tail has a flame burning on it. The temperature rises to unbearable levels if this Pokémon swings its tail."
      } else if(results.data.name === 'charizard'){
          pokeBio.innerHTML = "Is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail, which burns with a sizable flame. This Pokémon has a long neck, small blue eyes, raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the third joint of each wing. This Pokémon's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs and cream-colored soles under its feet."
      } else if(results.data.name === 'squirtle'){
          pokeBio.innerHTML = " Is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large eyes and a slightly hooked upper lip. Each of its hands and feet has three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves."
      } else if(results.data.name === 'wartortle'){
          pokeBio.innerHTML = "Is a bipedal, indigo Pokémon similar to a turtle. It has brown eyes, a dark blue streak on each cheek, and two sharp teeth protruding from its upper jaw. It has three clawed fingers and pointed toes. Pale blue fur covers its long ears and tail. A brown shell with a pale yellow underside encases its body. A thick, white rim separates the upper and lower halves of the shell. As this Pokémon grows old, its tail fur will darken, and it may have algae growing on its shell. The shell may also carry scars from past battles."
      } else if(results.data.name === 'blastoise'){
          pokeBio.innerHTML = "Is a large, bipedal turtle-like Pokémon. Its body is blue and is mostly hidden by its tough, brown shell. This shell has a pale yellow underside and a white ridge encircling its arms and separating the upper and lower halves. Two powerful water cannons reside in the top sides of its shell. These cannons can be extended or withdrawn and can be used to assist in high-speed charges. This Pokémon's head has triangular ears that are black on the inside, small brown eyes, and a cream-colored lower jaw. Its arms are thick and striated with three claws on each hand. Its feet have three claws on the front and one on the back. It has a stubby tail."
      } else if(results.data.name === 'caterpie'){
          pokeBio.innerHTML = "Is a Pokémon that resembles a green insect. There are yellow ring-shaped markings down the sides of its body, which resemble its eyes and are meant to scare off predators. Its most notable characteristic is the bright red antenna (osmeterium) on its head, which releases a stench to repel predators. Despite these features and its camouflage in green foliage, this Pokémon is often preyed upon by Flying-type Pokémon. Its feet are tipped with suction cups, permitting this Pokémon to scale most surfaces with minimal effort."
      } else if(results.data.name === 'metapod'){
          pokeBio.innerHTML = "This Pokémon resembles a green chrysalis. Its body is crescent-shaped with several segments making up the lower point. The front of its shell resembles a face with heavy-lidded eyes and a sharply pointed nose. The back of its shell consists of several geometrically shaped portions and projections. Its soft body is protected by a hard outer shell while it undergoes metamorphosis. While this shell is said to be as hard as steel, a sudden, powerful impact could cause its tender body to pop out, leaving it completely exposed. This Pokémon generally remains motionless, preparing its soft innards for evolution inside its hard shell. If an enemy discovers this Pokémon, it is unable to do anything other than harden its outer shell. Metapod lives in forests."
      } else if(results.data.name === 'butterfree'){
          pokeBio.innerHTML = "This Pokémon resembles a vaguely anthropomorphic butterfly with a purple body. Unlike true insects, it only has two body segments and four light blue legs. The upper pair of legs resembles small, three-fingered hands, while the lower pair resembles long, digit-less feet. This Pokémon has two black antennae, a light blue snout with two fangs underneath, and large, red compound eyes. Its two pairs of veined wings are white with black accents. The oval scales of a female Butterfree's lower wings are black, but white in males."
      } else if(results.data.name === 'weedle'){
          pokeBio.innerHTML = "Is a small larva Pokémon with a segmented body ranging in color from yellow to reddish-brown. Combined with its red nose and feet, this Pokémon's bright coloration wards off its enemies. This Pokémon has a conical, two-inch (five centimeter) venomous stinger on its head and a barbed one on its tail, but its other body parts are spherical."
      } else if(results.data.name === 'kakuna'){
          pokeBio.innerHTML = "Is a yellow, cocoon Pokémon. This Pokémon has a dome-shaped head and black, triangular eyes. It has two scythe-like arms in the middle of its body. When it comes close to evolving, its body gives off heat that makes it warm to the touch. This Pokémon remains virtually immobile and waits for evolution often hanging from tree branches by long strands of silk. When attacked, however, it can extend its poison barbs. This Pokémon nests in forests and misty wooded areas. Occasionally, it will also nest at the mouths of tunnels and caves, as seen in Pokémon Snap."
      } else if(results.data.name === 'beedrill'){
          pokeBio.innerHTML = "This Pokémonmostly resembles a bipedal, yellow wasp; however, it only has four legs instead of six and lacks pigment pits. This Pokémon's head is round with a slightly pointed mouth, large, red eyes, and black antennae with a sharp bend in the middle. Its forelegs are tipped with long, conical stingers. It stands on its other two legs, which are long, segmented, and insectoid in shape. This Pokémon has two pairs of rounded, veined wings, and another stinger on its yellow-and-black striped abdomen."
      } else if(results.data.name === 'pidgey'){
          pokeBio.innerHTML = "Is a small, plump-bodied avian Pokémon. It is primarily brown with a cream-colored face, underside, and flight feathers. On top of its head is a short crest of three tufts. The center crest feathers are brown and the outer two tufts are cream-colored. Just under its crest are its narrow, brown eyes. Angular black marking extend from behind its eyes down its cheeks. It has a short, stubby beak and feet with two toes in front and one in back. Both its beak and feet are a grayish-pink. It has a short, brown tail made of three feathers."
      } else if(results.data.name === 'pidgeotto'){
          pokeBio.innerHTML = "Is a raptor-like avian Pokémon. It is covered with brown feathers, and has a cream-colored face, underside, and flight feathers. It has a crest of pinkish-red feathers on its head and black, angular markings behind its eyes. The plumage of its tail has alternating red and yellow feathers with ragged tips. Its beak and legs are pink. Two of its toes point forward, while one points backward. Additionally, it has powerful, sharp talons that it uses to grasp prey."
      } else if(results.data.name === 'pidgeot'){
          pokeBio.innerHTML = "Is an avian Pokémon with large wings, sharp talons, and a short, hooked beak. Its glossy plumage is mostly brown with cream-colored underparts and flight feathers. Its head has a decorated crest that is nearly as long as its body. The center feathers of its crest are yellow, while the outer feathers are red. The fan-like feathers of its tail are red or brown. Its beak and legs are pink, and there three forward-facing toes and one backward-facing toe on each foot. Behind each eye is an angular black marking."
      } else if(results.data.name === 'rattata'){
          pokeBio.innerHTML = "Is a small, quadruped rodent Pokémon. Its most notable feature is its large teeth. Like most rodents, its teeth grow continuously throughout its life and must be worn down by gnawing. This Pokémon has purple fur on its back, and cream fur on its stomach. It has a pair of thin, cream-colored whiskers and a long tail that curls at the tip. Females have shorter whiskers and lighter fur color."
      } else if(results.data.name === 'raticate'){
          pokeBio.innerHTML = "is a large rodent Pokémon. Although it is often depicted on its hind legs, it is a quadruped. It is mostly tawny colored with a cream underside. It has large incisors that grow constantly. There are three whiskers on each side of its face, which it uses to maintain balance. It has webbed feet with three toes that allow it to swim. Its tail is long and scaly, and its ears have a ragged appearance. Females will have shorter whiskers and lighter fur."
      } else if(results.data.name === 'spearow'){
          pokeBio.innerHTML = "Is an avian Pokémon that is very small. It has rough, brown plumage on its head and three brown tail feathers. It has narrow, dark brown eyes with white pupils and a short, hooked beak. The feathers covering its wings are pinkish red with lighter tips, and it has a beige underside with two thin, horizontal stripes. Its light pink feet have two toes in front and one in the back. Black feathers cover its back."
      } else if(results.data.name === 'fearow'){
          pokeBio.innerHTML = "Is a large, mostly brown avian Pokémon with a vulturine neck and broad, powerful wings. It has a long, pointed, pink beak, and a decorative red coxcomb on top of its head. Its narrow eyes have very small pupils, and do not appear to have colored irises. It has shaggy, feathers on the base of its neck and covering the upper portion of its wings. These feathers are cream-colored, as are the tips of its flight feathers. Its sharp-clawed talons are pink, with three toes pointing forward and one pointing backward."
      } else if(results.data.name === 'ekans'){
          pokeBio.innerHTML = "Is a purple, serpentine Pokémon. Its eyes, underbelly, the thick stripe around its neck, and rattle are yellow. This Pokémon has three pairs of black lines encircling its body, as well as another line that connects each slitted eye and curves toward its nose. Its large mouth has a round, pink tongue and no visible teeth. While painful, a newborn's bite is not venomous. This Pokémon grows longer with age."
      } else if(results.data.name === 'arbok'){
          pokeBio.innerHTML = "Is a serpent like Pokémon with purple scales all over its body. It has a large hood just below its head. On its hood, it has a pattern much like an angry face, which can come in over 20 possible variations. The pattern typically has red and yellow eyespot outlined it black, a wide black streak resembling a mouth, and a V-shaped stripe about the face pattern."
      } else if(results.data.name === 'pikachu'){
          pokeBio.innerHTML = "Is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, brown eyes, and the two red circles on its cheeks contain pouches for electricity storage. It has short forearms with five fingers on each paw, and its feet each have three toes. At the base of its lightning bolt-shaped tail is patch of brown fur at the base. A female will have a V-shaped notch at the end of its tail, which looks like the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs."
      } else if(results.data.name === 'raichu'){
          pokeBio.innerHTML = "Is a bipedal, rodent-like Pokémon. This Pokémon is covered in dark orange fur with a white belly. Its bifurcated ears are brown on the outside, yellow on the insides, and end in a distinctive curl. There are circular yellow markings on its cheek where its electric sacs are, and it has a triangular, dark brown nose. Its arms and feet have patches of brown fur at the end, and the soles of its big feet are tan with a circular orange pad. On its back are two horizontal brown stripes. Its long, thin tail has a lightning bolt-shaped end. This lightning bolt is smaller on females. The tail is used to gather electricity from the atmosphere, or it can be planted in the ground to search for electricity. Its tail also serves to protect itself from its own power."
      } else if(results.data.name === 'sandshrew'){
          pokeBio.innerHTML = "Is a bipedal mammalian Pokémon, but runs on all fours in the anime. Its brick-patterned yellow hide is dry, tough, blends in with desert sand, and protects its soft white underbelly and muzzle. This Pokémon has blue, almond-shaped eyes, a pointed snout, and triangular ears with white insides. Its tail is thick and conical. It has two long claws on each foot and three sharp claws on its forepaws, which are used to burrow."
      } else if(results.data.name === 'sandslash'){
          pokeBio.innerHTML = "Is a bipedal, ground dwelling pholidote Pokémon. Although this Pokémon is usually bipedal, it can run on all fours. Most of its underside is light yellow with a white underbelly. It has a narrow muzzle, almond-shaped blue eyes, and a thick tail. Its back is mostly covered in sharp, brown quills formed from its tough, dry hide. It has two large claws on its paws and feet. These claws are its primary weapons, and are used for slashing. They can also be used for burrowing. Its claws and spikes can both break off and are shed regularly, but grow back quickly. It can curl into a large ball to protect its white underbelly. In this position, it can roll to attack or escape and protect itself from heatstroke. This Pokémon is also adept at climbing trees, and is prone to ambush its enemies from above. This Pokémon can mostly be found in deserts."
      } else if(results.data.name === 'nidoran-f'){
          pokeBio.innerHTML = "Is a small, quadruped, rodent-like Pokémon. It has large, spiny ears, oversized front teeth, red eyes, and a pair of whiskers on each cheek. It is light blue with several darker blue spots. There are two white claws on each of its paws. Its back is covered with small toxic spines, and it has a small forehead horn. The poison secreted by the spines and horn is extremely potent, and even a scratch from its horn or a drop of poison from its barbs can be deadly. However, this docile Pokémon only uses its poison when it feels threatened. This Pokémon lives in open spaces, such as savannas and plains."
      } else if(results.data.name === 'nidorina'){
          pokeBio.innerHTML = "Is a quadruped, light-blue Pokémon with darker blue patches. It has red eyes, large, spiny ears, and has two pointed teeth protruding from its upper jaw. It possesses large poison spikes, which it retracts whenever it is with a group and while resting in its burrow. Its paws have three claws each, and it is able to stand on its hind legs. The hind legs are longer and thicker than its forelegs. It has a stubby tail. This is a female only species."
      } else if(results.data.name === 'nidoqueen'){
          pokeBio.innerHTML = "Is a large, bipedal blue Pokémon with distinct reptilian features. Its body is encased with extremely hard scales that serve as excellent protection from any attack and stand up when this Pokémon is excited or provoked. It has a blunt snout, narrow brown eyes, and large ears with brown insides. There is a small horn on its forehead, and single spine on each ear, and there is a line of toxic spikes running down the length of its back. Each hand has three short claws and each foot was two claws. Its lower jaw, the front of its abdomen, and two plates on its chest are cream-colored. It has a thick, powerful tail."
      } else if(results.data.name === 'nidoran-m'){
          pokeBio.innerHTML = "Is a small, quadruped rodent-like Pokémon. It is pinkish purple with darker spots, and has large, spiny ears with teal insides, oversized front teeth, and red eyes. Its back is covered with three lines of large spines that can release potent poisons if threatened. The center line of spines is taller than the other two. The size of the long, pointed horn on its forehead is indicative of the strength of its venom."
      } else if(results.data.name === 'nidorino'){
          pokeBio.innerHTML = "Is a light purple, quadruped Pokémon. It has several darker purple spots across its body. It has large, spiny ears with teal insides, narrow black eyes, and a long snout with two pointed teeth protruding from the upper jaw. It has a ridge of toxic spines on its back, and a long, pointed horn on its forehead. The horn is harder than a diamond and capable of secreting poison on impact. Its short legs have three claws on each foot. This is a male only species."
      } else if(results.data.name === 'nidoking'){
          pokeBio.innerHTML = "Is a large, bipedal, purple Pokémon with distinct reptilian features. It has narrow eyes, large, spiny ears, fur-like tufts on its cheeks, and a short snout filled with pointed teeth. There is a long, venomous horn on its forehead and a ridge of spines down its back. Gray plates cover its chest and belly, and there is a gray rounded spine on each elbow. Each hand was three claws, while foot has only a single hoof-like nail. It has a long, powerful tail. This is a male only species."
      } else if(results.data.name === 'clefairy'){
          pokeBio.innerHTML = "Is a bipedal, pink Pokémon with a chubby, vaguely star-shaped body. A small, pointed tooth protrudes from the upper left corner of its mouth. It has wrinkles beside its black, oval eyes, dark pink, oval markings on its cheeks, two small wings, and large, pointed ears with brown tips. A tuft of fur curls over its forehead, much like its large, upward-curling tail. Each stocky arm has two small claws and a thumb on each hand, and each of its feet has a single toenail."
      } else if(results.data.name === 'clefable'){
          pokeBio.innerHTML = "Is tall, pink Pokémon with a vaguely star-shaped body. It has long, pointed ears with dark brown tips and black, oval eyes with wrinkles on either side. A curled lock of fur hangs over its forehead, much like its long, tightly curled tail. There are dark pink wings on its back, and each wing has three points. Its hands have three fingers each, and its feet have two clawed toes and dark pink soles."
      } else if(results.data.name === 'vulpix'){
          pokeBio.innerHTML = "Is a small, quadruped, fox-like Pokémon. It has red-brown pelt, brown, pupil-less eyes, large, pointed ears with dark brown insides, and six orange tails with curled tips. The tails grow hot as evolution approaches for this Pokémon. This Pokémon also has curled locks of orange fur with bangs on top of its head. Although some of this Pokémon, such as Enta's, are born with only one tail that eventually splits into six as they grow older, others, such as Samson Oak's from the Sun & Moon series, are naturally born with six orange tails. This Pokémon has a cream underbelly, and brown feet with lighter brown paw pads."
      } else if(results.data.name === 'ninetales'){
          pokeBio.innerHTML = "This fox-like, quadruped Pokémon is covered with a thick, luxurious golden-white fur. It has nine, long tails, each tipped with pale orange. There is a fluffy crest atop its head, and a small mane around its neck. Ninetales has gleaming red eyes that are said to give it the ability to control minds. Its ears are pointed, and it has long, slender legs with three-toed paws."
      } else if(results.data.name === 'jigglypuff'){
          pokeBio.innerHTML = "Is a round, pink ball with pointed ears and large, blue eyes. It has rubbery, balloon-like skin and small, stubby arms and somewhat long feet. On top of its head is a curled tuft of fur. As seen in Pokémon Stadium, it is filled with air, as a defeated Pokémon, deflates until it is flat. By drawing extra air into its body, it is able to float as demonstrated in Super Smash Bros."
      } else if(results.data.name === 'wigglytuff'){
          pokeBio.innerHTML = "This Pokémon resembles a pink blob with stubby arms and legs. There is a fluffy, curled tuft of fur on its head, and it has long, rabbit-like ears and large, blue eyes. A layer of tears covers its eyes, quickly washing away any debris. It is covered in pink fur with a white underbelly and ear tips. This fine layer of fur is so soft that those who touch it, including other of this Pokémon, will not want to stop. Its body is soft and rubbery, allowing it to inflate by inhaling."
      } else if(results.data.name === 'zubat'){
          pokeBio.innerHTML = "Is a blue, bat-like Pokémon. While it lacks eyes, it has pointed ears with purple insides and a mouth with two sharp teeth on each jaw. A male will have larger fangs than the female. It has purple wing membranes support by two, elongated fingers, and two long, thin, tails."
      } else if(results.data.name === 'golbat'){
          pokeBio.innerHTML = "Is a large, blue bat-like Pokémon with purple wing membranes. It has small eyes with slit pupils and a massive mouth containing four fangs; females have smaller fangs than males. These fangs are sharp enough to pierce thick hide, and have hollow tubes specialized for sucking blood; however, they are also fragile. While its mouth seems to be otherwise empty, this Pokémon occasionally displays a long, purple tongue. Its pointed ears are tiny, and it has short legs with long, thin feet."
      } else if(results.data.name === 'oddish'){
          pokeBio.innerHTML = "This Pokémon resembles a blue plant bulb with a round body, beady red eyes, and oval, foot-like roots. Five large, green leaves sprout from its head. As demonstrated in the anime, these leaves are prehensile and can be used to scale vertical surfaces and catch light objects."
      } else if(results.data.name === 'gloom'){
          pokeBio.innerHTML = "This Pokémon is a blue, bipedal Pokémon with rudimentary hands and feet. It has orange leaves and a reddish-brown flower growing from its head. The flower has large, rounded petals and white spots. The female displays only a single large spot on each petal, while the male will have more, smaller spots. Its eyes are wide and often appear closed and its lips are thin and purple."
      } else if(results.data.name === 'vileplume'){
          pokeBio.innerHTML = "Is a blue, bipedal Pokémon with rudimentary hands and feet. It has beady red eyes and a massive red flower growing from its head. This Pokémon's flower is said to have the largest petals in the world, and is almost too heavy for the Pokémon itself to support. The rounded petals of the flower are red and covered with white spots. The female of this Pokémon has fewer, but larger, spots on its petals. It can shake, flap, or burst its petals into bloom with a bang in order to release clouds of pollen. This pollen is highly allergenic to humans and toxic to other Pokémon; this Pokémon uses it to paralyze its prey. It can also utilize these petals in its former signature move, Petal Dance. Vileplume lives in grassy plains, where it is often mistaken for local flowers."
      } else if(results.data.name === 'paras'){
          pokeBio.innerHTML = "Is an orange, insectoid creature resembling the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pupils."
      } else if(results.data.name === 'parasect'){
          pokeBio.innerHTML = "Is an orange, insectoid Pokémon that has been completely overtaken by the parasitic mushroom on its back. It has a small head with pure white eyes and a segmented body that is mostly hidden by the mushroom. It has three pairs of legs, with the foremost pair forming large pincers. The fungus growing on its back has a large red cap with yellow spots throughout."
      } else if(results.data.name === 'venonat'){
          pokeBio.innerHTML = "This Pokémon has a round body covered in purple fur. Poison oozes from all over its fuzzy body. A pincer-like mouth, stubby forepaws, and a pair of clodhopper feet are visible through its fur. There is also a pair of white antennae sprouting from the top of its head. However, the most prominent feature on its face are its large, red eyes. This Pokémon's highly developed eyes help it find suitable prey and can shoot powerful beams."
      } else if(results.data.name === 'venomoth'){
          pokeBio.innerHTML = "Is an insectoid creature with a light purple body. It has bulbous, round eyes with large pupils and a small mandible. Its abdomen is paler with several black, zigzagging stripes running across the horizontal length. It has six short legs and a three-point crest on its head. Its two pairs of wings are covered in dust-like, purple scales that vary in color depending on their toxic capability. Dark scales are poisonous, while lighter scales can cause paralysis. These scales are released when this Pokémon flutters its wings."
      } else if(results.data.name === 'diglett'){
          pokeBio.innerHTML = "Is a tiny, brown Pokémon that seems to be perpetually buried within the earth, leaving only its head visible. Its small stature makes it both the lightest and shortest Ground-type Pokémon. It has beady black eyes and a large, round, pink nose. One this Pokémon in Pokémon Mystery Dungeon: Red Rescue Team and Blue Rescue Team mentions that it has feet, though their size and appearance are unknown. It spends much of its time underground, and has very thin skin. If this Pokémon is exposed to sunlight, its blood will heat up and cause it to grow weak."
      } else if(results.data.name === 'dugtrio'){
          pokeBio.innerHTML = "Is a set of Diglett triplets sharing a single body. Each head has brown skin, black eyes, and a large, round, pink nose. This Pokémon's three heads think the same thoughts and act cooperatively, though on rare occasions may fight over which head gets to eat first. In order to make burrowing easier, each head will bob up and down to loosen the soil. This Pokémon can tunnel under the earth at 60 mph (100 km/h) to a depth of 60 miles (100 km), triggering tremors and earthquakes. It is capable of burrowing endlessly. For a brief time, Fissure was its signature move."
      } else if(results.data.name === 'meowth'){
          pokeBio.innerHTML = "Is a small, feline Pokémon with cream-colored fur that turns brown at the tips of its hind paws and tail. Its ovoid head features four prominent whiskers, wide eyes with slit pupils, two pointed teeth in the upper jaw, and a gold oval coin embedded in its forehead. Its ears are black with brown interiors, and are flanked with an additional pair of long whiskers. This Pokémon is a quadruped with the ability to walk on its hind legs; while the games always depict this Pokémon on two legs, the anime states that this Pokémon normally walks on all fours. It can freely manipulate its claws, retracting them when it wants to move silently. The tip of its tail curls tightly."
      } else if(results.data.name === 'persian'){
          pokeBio.innerHTML = "Is a large, quadruped, feline Pokémon. Its fur is pale tan with the exception of its black-rimmed ears. It has a short muzzle with a small, black nose, red eyes with slit pupils, rounded ears, a pair of pointed teeth in its upper jaw, and three whiskers on either side of its face. Its thick whiskers are very sensitive to changes in air movements, enabling it to detect its prey by movement alone. In the center of its forehead is a red jewel. Its long tail has a distinctive curl at the end. This Pokémon communicates with body language, and holds its tail upright to signal its intention to pounce. It has long legs and three-toed paws with retractible claws. Persian's lithe muscles also enable it to walk without making a sound."
      } else if(results.data.name === 'psyduck'){
          pokeBio.innerHTML = "Is a yellow Pokémon that resembles a duck or bipedal platypus. Three tufts of black hair grow on top of its head, and it has a wide, flat, cream-colored beak and vacant eyes. Its legs, arms, and tail are stubby and its webbed feet are cream-colored. There are three claws on both of its hands. is constantly stunned by its headache and is unable to think very clearly. It usually stands immobile, trying to calm its headache. However, when its headache becomes too severe, it releases tension in the form of strong psychic powers."
      } else if(results.data.name === 'golduck'){
          pokeBio.innerHTML = "Is a blue, bipedal, duck-like Pokémon. It has red eyes, a cream-colored beak, and four spikes on the back of its head. There is a small, red gem on its forehead. It has webbed hands and feet, which it uses to swim in rivers and lakes. Its body is especially adapted to have a hydrodynamic shape, and it has a long tail that it uses as a rudder to steer."
      } else if(results.data.name === 'mankey'){
          pokeBio.innerHTML = "Is a primate Pokémon, similar to a New World monkey. It is a bipedal Pokémon with a round body covered in whitish, shaggy fur. Its nose is similar to a pig’s snout, and it has red eyes and triangular ears with brown insides. This Pokémon's hands, two-toed feet, and the tip of its curved, prehensile tail are brown. Along with Stufful, it is the smallest Fighting-type Pokémon."
      } else if(results.data.name === 'primeape'){
          pokeBio.innerHTML = "Is a bipedal Pokémon with a round body covered in whitish, shaggy fur. It usually has a throbbing vein on the left side of its forehead, and it has triangular ears with pink insides and a pink, snout-like nose. Its arms and legs are brown and have metal shackles on the wrists and ankles. This is probably indicative of a method of training with weights. The hands have no visible fingers, instead resembling mittens or boxing gloves, and the feet have two toes."
      } else if(results.data.name === 'growlithe'){
          pokeBio.innerHTML = "Is a quadruped, canine Pokémon. It has orange fur with black stripes along its back and legs. The fur on its muzzle, chest, belly, and tail is cream-colored, as well as an additional tuft of fur on top of its head. This Pokémon's coat is noticeably longer on its chest and tail. It has gray eyes, a black nose, and large, round ears. Its forepaws have two visible claws, while its hind paws have three toes each. Each paw has a brown pad."
      } else if(results.data.name === 'arcanine'){
          pokeBio.innerHTML = "Is a quadruped, canine Pokémon with an orange pelt marked by jagged black stripes. It has diamond-shaped ears with beige insides, black eyes, a round, black nose, and two pointed teeth protruding from its upper jaw. Its head, muzzle, and chest are covered in shaggy, beige fur, except for two oval sections around each eye and ear. Long tufts of fur grow behind its knees and around its ankles. Its underside is black, and it has a billowing, beige tail that is bent in the middle. Each paw has three toes and a round, pink pad."
      } else if(results.data.name === 'poliwag'){
          pokeBio.innerHTML = "This Pokémon resembles a blue, spherical tadpole. It has large eyes and pink lips. There is a black and white swirl on its abdomen, which are actually its internal organs showing through its semitransparent skin. The swirl looks clearer after it eats, and the skin is very elastic so that it will not break if the Pokémon is bitten. The direction of the belly spiral differs by area, with the equator being thought to have an effect on this. It has newly developed legs that are poor at walking, and no arms. Its long, mostly transparent tail makes it a powerful swimmer. Because of its ineptitude on land, this Pokémon is more likely to be found swimming in small freshwater ponds and lakes. In the anime, this Pokémon feeds on salveyo weed, which can only be found on clear lake bottoms"
      } else if(results.data.name === 'poliwhirl'){
          pokeBio.innerHTML = "This Pokémon is a blue, bipedal Pokémon with a spherical body. It has bulbous eyes that protrude from the top of its head. A black and white swirl covers its belly, which are actually its organs showing through its thin skin. It appears to have white gloves on its hands and rounded, digit-less feet."
      } else if(results.data.name === 'poliwrath'){
          pokeBio.innerHTML = "Is a blue, bipedal Pokémon with muscular arms. It has bulbous eyes that protrude from the top of its head. Its belly is covered by a white and black swirl. There appear to be white gloves on its hands, and it has rounded, digit-less feet. It has powerful muscles in its arms and legs that never tire. When it swims, it uses all the muscles in its body, and is able to swim vast distances with minimal breathing. It is even capable of briefly running on the water's surface. This Pokémon, despite being an excellent swimmer, usually lives on dry land near the water's edge."
      } else if(results.data.name === 'abra'){
          pokeBio.innerHTML = "Is a bipedal Pokémon that is primarily yellow. Its face is kite-shaped, with a small, pale yellow snout and two short, pointed ears with pale yellow interiors. Its wide eyes are normally closed. This Pokémon's body is segmented with black skin is visible between its joints and along its neck. It has two brown, pauldron-shaped extensions on its shoulders, as well as a brown, fauld-like piece around its chest. It has three fingers and toes, with its fingers considerably shorter than its toes. Its tail is thick and long, with a brown band located near the tip."
      } else if(results.data.name === 'kadabra'){
          pokeBio.innerHTML = "Is a primarily yellow, humanoid Pokémon. It has two large, pointed ears on top of its head, a red star on its forehead, and wide cheeks leading down to a thin snout. Its eyes are deep-set and narrow. Extending from its snout are two mustache-like tufts of fur, with males having longer mustaches than females. This Pokémon's torso is segmented with bulky shoulders, a thick, brown chest, and a small abdomen marked by three red, wavy lines. Attached to the Pokémon's abdomen is a large, thick tail encircled with a brown band near its base. Its arms are thin with brown elbows, and end in three-fingered hands with white claws. Its legs have prominent knees and large, three-toed feet, also ending in white claws. This Pokémon is always seen carrying a silver spoon, which amplifies its telekinetic powers. It is able to bend its spoon to use Kinesis, its signature move."
      } else if(results.data.name === 'alakazam'){
          pokeBio.innerHTML = "Is characterized by its humanoid structure and large mustache. The female of this Pokémon has a significantly shorter mustache than the male. Its snout is long and thin, and it has long, ear-like spikes extending from the back of its head. Additional spike protrude from each cheek. Covering its yellow, skeletal body are brown armor-like sections over its chest, shoulders, forearms and knees. There are three toes on each foot, each of which has a white claw. It wields a silver spoon in each hand, which act as amplifiers for its psychic abilities. This Pokémon is able to lower the accuracy of its opponents by bending the spoons it wields, using its signature move Kinesis."
      } else if(results.data.name === 'machop'){
          pokeBio.innerHTML = "Is a humanoid, bipedal Pokémon that has gray skin. There are three brown ridges on top of its head, and it has large red eyes and relatively flat face. Its chest has three, thin, rib-like stripes on either side. Its feet appear to have no toes, while its hands have five fingers. It has a short, stubby tail. This Pokémon's entire body is covered with muscles that will never tire or cramp. With these muscles, it can lift many times its own body weight. It spends its time and energy practicing all different forms of martial arts and trying to improve its abilities. This Pokémon lives in the mountains."
      } else if(results.data.name === 'machoke'){
          pokeBio.innerHTML = "Is a bipedal, humanoid Pokémon covered in gray skin. It has a vaguely reptilian face with a short snout, narrow red eyes, and four pointed teeth visible inside its mouth. Two of these teeth are in the upper jaw, while two are in the lower jaw. On top of its head are three, light brown ridges. Its arms are muscular with dark red, vertical stripes on them. It possesses large pectoral muscles that protrude slightly over its belt. The lower part of its body has black markings that resemble briefs. It is always seen wearing a black and golden power-save belt resembling a Championship belt that regulates this Pokémon's strength."
      } else if(results.data.name === 'machamp'){
          pokeBio.innerHTML = "Is a large, humanoid Pokémon with four well-muscled arms. Its skin is bluish gray, and it has red eyes and pale yellow lips. On its head, there are three, brown ridges right above its eyes. It has two arms on each side of its body: a pair located in the normal position, and another pair directly above that attaches on the top of the shoulders. It has black markings that resemble briefs along with a golden power-save belt. Its legs have considerable muscle tone, and its feet have two toes."
      } else if(results.data.name === 'bellsprout'){
          pokeBio.innerHTML = "Is a plant-based Pokémon with a stem-like brown body. This stem is long, thin and very flexible, making it capable of swerving rapidly to avoid many attacks or moving with blinding speed to capture prey. Its roots resemble feet, and it uses them as such. It will plant these feet in the ground to replenish water, but it is unable to flee while it is rooted. It has one green leaf on each side of its body. Its yellow head is bell-shaped and has what appear to be pink lips at the end. Bellsprout prefers hot and humid places, living in forests."
      } else if(results.data.name === 'weepinbell'){
          pokeBio.innerHTML = "This Pokémon has a yellow, bell-shaped body with a single green leaf on either side. It uses these razor-sharp leaves to slice up prey. It has a wide, gaping mouth with pink lips. Above this Pokémon's circular eyes is a pattern of three small green spots and a small hook-shaped stem. This Pokémon camouflages itself as a plant in the forest whilst awaiting an unwary victim. When its prey draws near it sprays poison powder to immobilize the target before melting it with its internal acids. It oozes a neutralizing fluid that prevents these internal acids from melting its own body. Weepinbell live in forests where it hangs from tree branches by its stem to sleep. If it moves around during sleep, this Pokémon may slip and awaken to find itself on the ground."
      } else if(results.data.name === 'victreebel'){
          pokeBio.innerHTML = "This Pokémon has a bell-shaped body with a gaping mouth that has two sharp teeth. Its semicircular eyes appear directly under its mouth and it has several dark green spots on its body. Covering this Pokémon's mouth is a leaf with a long, brown, yellow-tipped vine growing out of it. The vine is flicked to mimic an animal in order to attract prey. This Pokémon also produces a sweet scent to further aid in luring its victims. Acid that has dissolved numerous prey animals becomes sweeter and even more effective at attracting prey."
      } else if(results.data.name === 'tentacool'){
          pokeBio.innerHTML = "This Pokémon resembles a box jellyfish. It has a light blue, clear body with two large, transparent, red crystals on each side of its body, and one small one in the middle. It has two small eyes with black pupils and no visible irises near the base of its body. It uses its two tentacles laced with stinging cells to poison its prey. The tentacles extend from beneath its round, blue lower body, which has a cape-like formation in the back. Its entire body is made of 99% water and the remaining 1% contains the organ that makes its poison."
      } else if(results.data.name === 'tentacruel'){
          pokeBio.innerHTML = "Is a large, jellyfish-like Pokémon. Its hood features two large, red orbs that can refract sunlight, store energy, and fire ultrasonic waves. Its red orbs glow whenever it is excited or agitated, and it may alert others to danger by stridently flashing them. Tentacruel's round lower body, from which its eyes are visible, is colored black. It has two blue, beak-like appendages."
      } else if(results.data.name === 'geodude'){
          pokeBio.innerHTML = "Is a gray boulder Pokémon. It has bulging, rocky eyebrows and trapezoidal, brown eyes. Its arms are muscular with five-fingered hands. This Pokémon uses its arms to climb steadily up steep mountain paths. This Pokémon is proud of its sturdy body and will bash against others of its kind in a contest of sorts to prove whose body is harder. The longer it lives, the more chipped and worn its body becomes."
      } else if(results.data.name === 'graveler'){
          pokeBio.innerHTML = "Is a living, bipedal boulder. It has a rocky crest about its small eyes. It has four arms, each with a three-fingered hand. It was shown in Pokémon Snap that, despite having legs, it can revert to a legless form. This grants it the ability to float. Its preferred locomotion is rolling, specifically because it is a slow walker. It often rolls down mountain paths at high speeds, crushing objects in the way and stopping by running into huge rocks. If it breaks or shatters, it has the ability to restore itself overtime. This Pokémon climbs a mountain from base to summit, feasting on rocks all the while. Upon reaching the peak, this Pokémon rolls down to the bottom. This Pokémon can be often found on mountain trails."
      } else if(results.data.name === 'golem'){
          pokeBio.innerHTML = "Is a bipedal tortoise-like Pokémon with plated, green rocks as its shell. This Pokémon grows bigger by shedding its skin once a year. The discarded shell immediately hardens when exposed to air, crumbling away and returning to the soil. This Pokémon has a head protruding out of the center of the shell, short arms that have three claws, and two legs with five-clawed feet that have four claws in front and one in back. It has red eyes and a flat snout with two pointed teeth in its lower jaw. As shown in the Pocket Monsters Carddass Trading Cards, this Pokémon's shell is hollow."
      } else if(results.data.name === 'ponyta'){
          pokeBio.innerHTML = "Is an equine Pokémon with yellow and reddish-orange flames forming its mane and tail. This fiery mane and tail grows out about an hour after hatching. Its body is mainly cream and has four long legs, each ending in a single, gray hoof. These hooves are said to be harder than diamonds. It also has extraordinary jumping abilities, and is capable of leaping tall buildings in a single bound. However, a newborn of this Pokémon is a weak runner and is actually barely able to stand. It gradually strengthens its legs and becomes faster by chasing after its parents. In the anime, it is shown that this Pokémon can control its flames so that its rider is not burned by them. This Pokémon live in grasslands, on plains, or anywhere that it can run freely."
      } else if(results.data.name === 'rapidash'){
          pokeBio.innerHTML = "Is an equine Pokémon with four slender legs and black hooves. Its body is cream-colored, and it has a horn on its forehead. It also has small red eyes and pointed ears with red insides. Red and orange flames stream from neck, part of its back, and its fetlocks. Flames also form this Pokémon's tail. This Pokémon is a very agile Pokémon. It runs at about 150 mph (240 km/h), chasing everything that moves in hopes of racing it. With incredible acceleration, it reaches its top speed in only ten steps. At full gallop, its hooves barely touch the ground. The faster this Pokémon goes, the longer the swaying flames of its mane will become. At an all-out gallop, its blazing mane sparkles, a feature which is said to enhance its beautiful appearance. This Pokémon lives in grasslands, but it can also be seen on mountains in Pokémon Snap."
      } else if(results.data.name === 'slowpoke'){
          pokeBio.innerHTML = "Is a pink creature that resembles a cross between a salamander and a hippopotamus. Its vacant eyes never seem focused, and it has curled ears and a rounded, tan muzzle. It has four legs, each of which ends in a single white claw. Its long, tapering tail has a white tip. This tail drips a sweet, sappy substance that is attractive to many species of fish. This Pokémon uses it as a lure for fishing, and it will grow back if cut off. In Alola, its tail is often dried and used in home cooked stews."
      } else if(results.data.name === 'slowbro'){
          pokeBio.innerHTML = "Is a bipedal, pink Pokémon with a tan, striped belly and a tan muzzle. It has large, vacant eyes, curled ears, and two pointed teeth protruding from its upper jaw. On its hands, it has three clawed fingers, and two clawed toes on its feet. There is a Shellder attached to its tail. This Shellder has a gray, spiraled shell with darker gray spots. There are several spikes across the surface of the Shellder, and it holds onto this Pokémon with many sharp teeth. If its tail or the Shellder attached to it is broken off, this Pokémon will revert to its unevolved form."
      } else if(results.data.name === 'magnemite'){
          pokeBio.innerHTML = "Is a seemingly robotic life form that has a gray, spherical metal body with horseshoe magnets on each side and a single, large eye. It has three Phillips head screws on its body: two near the bottom of its body, and the other on top of its head and looks similar to an antenna. The two bottom screws serve no noticeable purpose, although they may be its feet as the Pokédex identifies a footprint similar to that of the screw's head. Even though this Pokémon and its evolved forms are mechanical creatures, the anime has shown that it has emotions and a way of reproducing. It has even exhibited the need to eat, although its main form of nutrients is electrical currents. It is commonly found in locations such as power plants or caves with a strong magnetic field. Despite its modern, artificial appearance, this Pokémon has been depicted in carvings discovered at the Ruins of Alph, and has been present in AZ's retelling of the Kalos war, indicating it has existed for at least 3,000 years."
      } else if(results.data.name === 'magneton'){
          pokeBio.innerHTML = "Is the result of three Magnemite being linked together by a strong magnetic force, although a single Magnemite can evolve by itself when no other Magnemite are in the vicinity. The three Magnemite that this Pokémon consists of can be linked several ways. This Pokémon is most commonly seen as one Magnemite on top, and two Magnemite linked via body on the bottom, forming a triangle. However, in some cases, commonly seen in 3D Pokémon games, the Magnemite will not be connected at all, remaining in a triangular formation at rest, and being able to freely move within each other's vicinity to form other patterns. The magnetic forces that holds the three Magnemite together is powerful enough to dry up all moisture and raise the temperature 3.6 °F (2 °C) within a 3,300 foot (1,000 m) radius. It can also be disruptive to electronic devices."
      } else if(results.data.name === `farfetchd`){
          pokeBio.innerHTML = "This Pokémon resembles a brown duck with a white underbelly. It has a yellow beak and a V-shaped, black marking on its forehead. It has wings as big as its body, which appear to be prehensile enough to substitute for hands. It has yellow legs with webbed feet. This Pokémon is always seen carrying a leek stalk or spring onion. It carries this sprig in its wings, and sometimes chooses to hold it in its beak or feet instead. Unable to live without its stick, this Pokémon will defend the stalk with its life. Known uses for the stick include use as a weapon, nesting material, and emergency food source. It is selective about which sticks it will use, and has been known to fight over good ones. Farfetch'd is found in grasslands."
      } else if(results.data.name === 'doduo'){
          pokeBio.innerHTML = "This Pokémon is a two-headed, bipedal avian Pokémon. Each head has a long sharp beak and two beady black eyes with no discernible sclerae. It has a soft but bristly, down-like covering of brown feathers on its body and both heads. The males of the species have black flexible necks, whereas females have brown necks; both genders have brown coloring on their legs. It has two feet, each with four digits ending in a sharp claw."
      } else if(results.data.name === 'dodrio'){
          pokeBio.innerHTML = "Is a large, wingless, three-headed avian Pokémon. Each head has a long, sharp beak and a black feathered, V-shaped crest. It has bristly brown feathers covering its heads and upper body, while its lower half has a smooth layer of black feathers. Its wingless body rests on two long and slender, but powerful legs with feet that have three clawed toes in front and one in back. Males have black necks, whereas females have brown necks; both genders have brown legs."
      } else if(results.data.name === 'seel'){
          pokeBio.innerHTML = "Is a pinniped Pokémon with a thick hide covered in bluish white fur. It has a pale tan maw with a large red tongue and a pair of tusks on its lower jaw. It has circular eyes and a black nose that is capable of closing while this Pokémon swims. There is a small horn on its forehead, which it uses in combination with its tusks to bore through ice floes. It has two flippers on its chest, and two more on the end of its tail. When the tail is raised, it resembles a waterspout."
      } else if(results.data.name === 'dewgong'){
          pokeBio.innerHTML = "Is a pinniped Pokémon resembling a sea lion. It has a snowy white, furry body, which renders it virtually invisible in snowy conditions. Its face has two black eyes with no visible sclerae, a black button nose and two tusks extending from its upper jaw. It has a streamlined body with two front flippers and a long flowing tail. Even in extremely cold and ice-packed waters, its tail allows it to be a swift and agile swimmer at speeds of 8 knots. On top of its head is a sharp horn, which allows it to cut and plow through even the thickest of ice floes."
      } else if(results.data.name === 'grimer'){
          pokeBio.innerHTML = "Is a slimy, amorphous blob-like Pokémon whose body was animated because of lunar X-rays. Its purple sludge body contains a variety of pungent bacteria, which are so potent that it renders soil barren and incapable of supporting plant life. It has two large eyes with beady pupils, and a gaping mouth with a gray tongue. While it lacks any visible legs, it does have two arms with three digits on each hand. It is constantly oozing a bacteria-rich fluid from all parts of its body. Pieces of it often break off during travel, and go on to become new Pokémon. When combined with another of this Pokémon, it produces new poisonous compounds."
      } else if(results.data.name === 'muk'){
          pokeBio.innerHTML = "Is a large, sticky, amorphous Pokémon, made of living purple sludge. It has two small eyes with beady black pupils. It also has an enormous mouth with a gray tongue and strands of ooze connecting its top and bottom jaws. While it has no visible legs, it does have two arms with three fingers on each hand. However, it typically keeps one hand tucked in while it extends the other hand."
      } else if(results.data.name === 'shellder'){
          pokeBio.innerHTML = "Is a black pearl-like Pokémon encased within a spiky, blue-violet bivalve shell. It has two round white eyes with tiny black pupils. Its enormously long red tongue is used to burrow itself into sand to sleep overnight, and also to lure and capture prey. It typically hunts along the seafloor. It can make pearls from accumulated sand, though it discards them as it can affect its hunting. Its soft and tender body is well-protected by its extremely durable shell, which is purported to be harder than diamonds and has historically been used by people to make shields. Prehistoric version of this Pokémon were apparently preyed upon by Omastar, whose powerful bites were capable of breaking through its shell."
      } else if(results.data.name === 'cloyster'){
          pokeBio.innerHTML = "Is a black, pearl-like Pokémon. It is encased inside a light-gray shell, which is surrounded by a second jagged, blue-violet outer shell casing. It has one barb-like spike protruding from above its head, and multiple conical horns on its outer shell. Its shell is harder than diamond with spikes that are even harder; harsh tidal currents will affect the size and sharpness of these spikes. On its pearl-like face, it has two white eyes and a mouth. Aside from its face and head, its internal anatomy has never been seen."
      } else if(results.data.name === 'gastly'){
          pokeBio.innerHTML = "This Pokémon has no true form, due to 95% of its body being poisonous gas. However, it consistently appears as a black, spherical Pokémon surrounded by a purple haze. It has a wide, pink mouth with two visible fangs. Though its eyes seem to extend past its round body, visible eyelids surround them. The toxic gas surrounding the main body can induce fainting and suffocation, and is capable of enshrouding an Indian elephant within two seconds. Because it is mostly gas, this Pokémon will dwindle away when exposed to strong winds"
      } else if(results.data.name === 'haunter'){
          pokeBio.innerHTML = "Is a purple Pokémon with a gaseous body. It has a round head with a pair of disembodied hands. Each hand has three pointed fingers. Its head is flanked by three large, spiked protrusions on either side, and its eyes are large and triangular with small pupils. The gases composing its head curve down to form several pointed teeth framing a pink mouth and a long tongue. Its body tapers into a jagged tail."
      } else if(results.data.name === 'gengar'){
          pokeBio.innerHTML = "Is a dark purple, bipedal Pokémon with a roundish body. It has red eyes and a wide mouth that is usually curled into a sinister grin. Multiple spikes cover its back, and it has large pointed ears. Its arms and legs are short with three digits on both its hands and feet. It also has a stubby tail."
      } else if(results.data.name === 'onix'){
          pokeBio.innerHTML = "This Pokémon resembles a giant chain of gray boulders that become smaller towards the tail. It has a rocky spine on its head and a pair of black eyes right beneath it. This Pokémon has a magnet in its brain that serves as an internal compass. Its body absorbs many hard objects, making its body very solid. As it grows older, it becomes more rounded and smoother, eventually becoming similar to black diamonds."
      } else if(results.data.name === 'drowzee'){
          pokeBio.innerHTML = "Is a bipedal Pokémon that resembles a tapir. It has tired-looking eyes, a short trunk above its mouth, and triangular ears. The upper half of this Pokémon's body is yellow and the lower half is brown. A wavy line separates the two halves. It has a round belly and short legs. Its feet are brown, except for its two toes, which are the same yellow as the upper half of the body. The bottom of each foot has a small, round, pink pad in the middle of it. There are three fingers on each of its hands."
      } else if(results.data.name === 'hypno'){
          pokeBio.innerHTML = "Is a bipedal, humanoid Pokémon that has yellow skin. It has two triangular, ears on the top of its head and two sleepy looking eyes with a large nose underneath. On its neck, it has a ruff of white fur, which is longer on the female. This Pokémon has five fingers on each hand and holds a pendulum in its left. The pendulum is used for hypnotism, and this Pokémon is never seen without it. There are three toes on each of its feet, which have a pink pad on the undersides."
      } else if(results.data.name === 'krabby'){
          pokeBio.innerHTML = "As a crustacean, this Pokémon has a strong outer shell protecting its small body. Its upper half is red, containing two small spikes facing upwards on the top of its head. Its lower body is light tan and doubles as its jaw with two fangs overlapping its upper body. Its hips are visible on the lower front of its body connected to its long, thin legs, which have small, claw-like feet. The main feature of this Pokémon's body is its large, red pincers. This Pokémon uses them as its main form of offense, and as a form of balance. Sometimes, this Pokémon may lose a claw during battle, or it can forcibly remove a claw if it is damaged, and regenerate the claw over a short period."
      } else if(results.data.name === 'kingler'){
          pokeBio.innerHTML = "Is a crustacean Pokémon resembling a crab. Its strong shell covers the outside of its body, featuring a red upper-half, and a light tan lower-half. Its upper half is topped with six tall, thin spikes that resemble a crown. Its lower half doubles as its jaw with six fangs overlapping its upper body. Its two outer fangs are much larger than the inner two, and are roughly half as tall as this Pokémon's entire body. Its hips are visibly protruding from its lower body connecting its long, thin legs with claw-like feet. This Pokémon's main feature is its red claws. Its left claw is roughly twice as large as the other and hard as steel."
      } else if(results.data.name === 'voltorb'){
          pokeBio.innerHTML = "is a spherical Pokémon that looks like a Poké Ball with a face, minus the button. The top half is red, while the bottom half is white. Because of its resemblance to Poké Balls, it is thought that it was created when one was exposed to an energy pulse. It was first seen in the plant where modern Poké Balls were invented. This Pokémon is generally found in power plants and other areas with electric fields. It has a volatile temperament, and will explode if bumped or agitated."
      } else if(results.data.name === 'electrode'){
          pokeBio.innerHTML = "Is a round Pokémon resembling a reverse-colored Poké Ball with a mouth and eyes. Its top half is white, while its lower half is red. For this reason, many Trainers try to pick it up, mistaking it for an item. The Pocket Monsters Carddass Trading Cards depict this Pokémon as hollow. Many know it by the nickname 'Bomb Ball'."
      } else if(results.data.name === 'exeggcute'){
          pokeBio.innerHTML = "Is a Pokémon resembling six light pink eggs, usually seen arranged with five heads huddled around a sixth. Each 'head' has a slightly different facial expression, but each face has triangular eyes with tiny black pupils and a small mouth. Each shell has some cracks, and one member of the bundle usually has its yolk or brain exposed. Despite looking like eggs, this Pokémon is actually more closely related to plant seeds. This Pokémon inhabit jungles and forests."
      } else if(results.data.name === 'exeggutor'){
          pokeBio.innerHTML = "Is a tall, bipedal Pokémon that strongly resembles a coconut palm or other palm tree. Its legs and body resemble a tree trunk, and its legs are thick with two-toed feet and a light yellow paw pad on each foot's underside. It has leaves sprouting from the top of its body, and this Pokémon has three to six round, light-yellow heads that resemble coconuts, each with differing facial expressions. Each head thinks independently of the others, so it makes a lot of noise as each head speaks its mind. If one of these heads grows too large, it falls off and groups back together to become an Exeggcute. In the anime, this Pokémon also has been seen in groups of its own kind, meaning that it is not a solitary Pokémon. It lives in forests and jungles."
      } else if(results.data.name === 'cubone'){
          pokeBio.innerHTML = "Is a small, bipedal Pokémon with a golden brown hide that covers most of its body, including both dorsal spikes. Its belly is a very light brown. Two small claws, one on each hand, serve as its thumbs, and one large nail on each foot make up its toes. On its head, this Pokémon wears the skull of its dead mother as a helmet. Because of this, much of its actual face has never been seen, except for its triangular, black eyes and a small area surrounding them. The skull has two rounded horns on the top of its head and a tooth-like point on the lower sides. Under the skull, this Pokémon has a brown snout. The small species survives only through the immense skill it possesses in wielding the bone it carries as a weapon. The bone allows it to learn Bone Club and Bonemerang, two moves exclusive to this Pokémon and its evolution."
      } else if(results.data.name === 'marowak'){
          pokeBio.innerHTML = "Is a bipedal Pokémon with a spike located on its tail. On its stomach, this Pokémon is very light brown in color, as opposed to most its body, which is a darker brown. Two small claws, one on each hand, serve as its thumbs, and two large nails make up its toes. This Pokémon's head is composed of the skull it once wore as a mask. It can no longer remove the skull, as it became a part of its body. This Pokémon's jaw is composed of bone, and its nostrils are located on the nose of the skull. Its triangular eyes are brown and are also located on the skull. This Pokémon is well known for ferocity with its bone club, which it is said to collect from a hidden graveyard. It and its pre-evolution, Cubone, are the only known Pokémon that can learn Bone Club and Bonemerang."
      } else if(results.data.name === 'hitmonlee'){
          pokeBio.innerHTML = "Is a humanoid Pokémon with an ovoid body. Lacking a distinct neck and head, its upper torso has almond-shaped eyes with black rings around them and appears to lack a nose and mouth. Primarily brown, it has cream-colored, segmented arms and legs, with three fingers and three clawed toes respectively. The soles of its feet and its ankles have circular, yellow markings. It is an exclusively male species with no female counterpart."
      } else if(results.data.name === 'hitmonchan'){
          pokeBio.innerHTML = "Is a tan, humanoid Pokémon that is exclusively male. There are five blunt protrusions on top of its head, and it has extensions resembling pads over its shoulders. It appears to be wearing a light purple tunic and kilt, as well as red boxing gloves and light purple boxing shoes. As this appearance suggests, this Pokémon specializes in punching. It is able to throw punches too quick to be seen with the naked eye. By punching with a corkscrew motion, it is even capable of drilling through concrete. However, this Pokémon requires a break every three minutes while fighting. Despite the need for frequent breaks, it has an unwavering spirit and will never give up in a difficult situation. Usually found in urban areas, it is rarely seen in the wild."
      } else if(results.data.name === 'lickitung'){
          pokeBio.innerHTML = "Is a bipedal Pokémon with a round body and a thick, powerful tail. It has soft, pink skin with curved yellow lines on its belly and yellow ring markings on its knees. It has a thumb-like claw on each hand, and a single large nail on each foot. There is a yellow spot on its palms and the soles of its feet. It has beady eyes and a long, prehensile tongue. The tongue is likely connected to its tail, which twitches when the tongue is pulled."
      } else if(results.data.name === 'koffing'){
          pokeBio.innerHTML = "Is a spherical Pokémon filled with toxic gases. It has vacant eyes and a wide mouth that usually has two pointed teeth in the upper jaw. However, a full set of teeth has been seen in the anime. Below its face is a cream-colored skull-and-crossbones marking. Several geyser-like protrusions, which usually release a mustard-colored gas, cover this Pokémon’s body. Its purple skin is very thin, and over inflation can cause it to explode."
      } else if(results.data.name === 'weezing'){
          pokeBio.innerHTML = "Is a purple Pokémon consisting of two spherical heads connected by a thin tube with another sphere in the center. The heads have differing sizes and features. The left head is larger, and has prominent eyebrows, pointed teeth protruding from its lower jaw, and two flat teeth in its upper jaw. The smaller, right head simply has two pointed teeth, one at each corner of its mouth. The larger head has a cream-colored skull-and-crossbones marking below its face, while the smaller head has a light yellow circle instead. It is covered with many geyser-like protrusions, which usually expel yellowish gases. This Pokémon is said to form when poisonous gases pool and two Koffing fuse over many years. Very rarely, two Koffing can become this Pokémon in a short timespan because of a sudden mutation. Triplet of Pokémon have been discovered, although it is extremely rare"
      } else if(results.data.name === 'rhyhorn'){
          pokeBio.innerHTML = "Is a rhinoceros-like creature with a body covered in gray, rocky plates. Its underside and rear are smooth, and it has four short legs with two claws on each foot. It has a triangular head with narrow, red eyes, two fangs protruding from its upper jaw, and small, triangular openings on the upper sides. A spiked ridge runs along its back, and it has a single short horn on the tip of its snout. The female has a shorter horn than the male. In addition to its rocky hide, its bones are a thousand times harder than human bones."
      } else if(results.data.name === 'rhydon'){
          pokeBio.innerHTML = "Is a large, gray, bipedal Pokémon with features of both dinosaurs and rhinoceroses. It has a cream-colored, drill-like horn on its snout, the female having a smaller horn than the male. There are other protrusions on the head as well, including a spike curving forward from the middle of its head, two triangular, points resembling ears to the sides, a wide, wavy crest under the ears, and spiky ridges on its cheeks. It has red eyes and two fangs protruding from its upper jaw. It has a cream-colored stomach and a row of spikes down its back. This Pokémon has a long tail with skinny, black stripes."
      } else if(results.data.name === 'chansey'){
          pokeBio.innerHTML = "Is a pink, ovoid Pokémon. There are three hair-like growths on the sides of its head, tipped with a darker shade of pink. On the center of its belly is a dark pink pouch that contains a single white egg. Its arms are stubby, and it has small, dark pink feet. Additionally, it has a short tail. It is a female-only species with no male counterpart. This Pokémon lays several nutritious eggs every day, which it carefully carries in its pouch. A kindhearted Pokémon, it will share these eggs with injured people and Pokémon. The eggs become more delicious if this Pokémon is raised with love and care. This Pokémon is extremely rare in the wild, and is said to bring good luck and happiness to those who manage to catch it. It is more commonly found in urban settings."
      } else if(results.data.name === 'tangela'){
          pokeBio.innerHTML = "Is covered with thick blue vines that obscure its face so only its eyes can be seen. These vines are covered in fine hair, and they give it a round shape. It is unknown what it looks like without them. The vines are always growing, and can be replaced if lost or damaged. It has a pair of red boot-like feet, but no visible arms."
      } else if(results.data.name === 'kangaskhan'){
          pokeBio.innerHTML = "Is a large, bipedal creature with a thick tail. It has a brown hide with several raised patches, and a cream-colored belly. On top of its head is a black patch, and it has large cream-colored ears and red eyes. Its snout is short and rounded with two pointed teeth protruding from its upper jaw. There are epaulette-like growths over its shoulders and a row of spikes down its back. It has three clawed digits on each hand and foot. In the pouch on its belly, it carries a baby. Unlike its parent, the baby is light purple and has smooth skin. This Pokémon is a female-only species with no male counterpart."
      } else if(results.data.name === 'horsea'){
          pokeBio.innerHTML = "Is a small, blue, seahorse-like Pokémon with a single dorsal fin and a tightly curled tail. Its eyes are red and its ridged belly and dorsal fin are cream-colored. It has a long, tubular mouth and three spike-like projections on either side of its head. It is highly adept in the water, using its dorsal fin to swim in any direction while facing forward. It can use its tail as both a balance and an anchor when caught in a strong current. In safer environments, it uses its tail to play with other members of its species. If this Pokémon senses danger, it sprays water or dense black ink from its mouth at its attacker. It can shoot ink more precisely at insects flying above the surface of the water. This Pokémon feeds on insects and moss gathered from rocks. It nests in coral reefs and islands throughout the ocean. Many Eggs are laid every year, and the young are raised by the male Horsea rather than the female."
      } else if(results.data.name === 'seadra'){
          pokeBio.innerHTML = "Is a blue, seahorse-like Pokémon. It has a long snout and a two fin-like ridges curving over either side of its head. Its belly is covered with rough, cream-colored scales. This Pokémon's lower pectoral fins have sharp, pointed, cream-colored tips that exude venom. It also has a large, coiled tail. This Pokémon can swim in any direction while facing forward by rapidly flapping its fins and tail. It catches its prey by spinning its body to create large whirlpools. When its prey is exhausted, This Pokémon swallows it whole using its long snout. This Pokémon's venom is toxic enough to induce fainting in humans, but is prized among practitioners of traditional medicine."
      } else if(results.data.name === 'goldeen'){
          pokeBio.innerHTML = "Is a white, fish-like Pokémon with orange markings on its tail, back, and fins. It has a thin dorsal fin and long pectoral fins. Its dorsal and pectoral fins are quite strong, allowing it to maintain a steady speed of five knots while swimming upstream. This Pokémon's caudal fin is admired by many for its beauty as it billows very much like a ballroom dress. Its circular eyes are blue, and it has pink lips. On its forehead is a large horn, which is larger on the male than on the female."
      } else if(results.data.name === 'seaking'){
          pokeBio.innerHTML = "Is a large, orange, fish-like Pokémon. It has billowing caudal and pectoral fins, all of which are white specked with black. However, its dorsal fin is pure white and rigid. It has round, dark eyes, prominent pink lips, small fangs, and a horn in the center of its forehead. Females have smaller horns than males. This Pokémon is a very powerful swimmer that is found in rivers and streams. It can not only swim against a river's current but it can travel up waterfalls. In the autumn spawning season, it travels upriver, where male of this Pokémon, grown fattier and more vibrant in color, engage in elaborate dances to court females. Seaking uses its powerful horn to bore holes in riverbed boulders in order to shelter its Eggs from water currents. A mated pair takes turns patrolling around their new nest for roughly a month, and defends it with their lives."
      } else if(results.data.name === 'staryu'){
          pokeBio.innerHTML = "Is a golden-brown sea star-like Pokémon with five appendages. These appendages surround an exterior organ called the core, which is held in place by a golden ring looped around Staryu's left 'leg'. If any of this Pokémon's appendages are lost or eaten by predators like Lumineon, it is unharmed and can grow them back with ease provided the core is still intact. The core resembles a red jewel and is similar to a madreporite."
      } else if(results.data.name === 'starmie'){
          pokeBio.innerHTML = "Is a violet sea star-like Pokémon with a gold formation on its front. This Pokémon's jewel core, which can glow in seven colors, has developed to resemble a cut precious stone. There is second set of semi-attached arms on its back, which are able to spin 360°. This Pokémon can emit electrical waves from the core that are powerful enough to reach the furthest parts of the universe. It can sometimes launch itself out of the water and fly through the air for short periods, as seen in Pokémon Snap."
      } else if(results.data.name === 'mr-mime'){
          pokeBio.innerHTML = "Is a bipedal, humanoid Pokémon with a round, white body with a magenta spot in the middle. Its light pink arms and legs are connected to its body by magenta spheres. Its knees have small, white coverings. There are magenta pads on the tips of its white fingers, and its dark blue feet curl upward at the tips. Blue growths resembling clown hair extend from the sides of its pale pink head, and there are magenta circles on its cheeks. Its jaw is curved inward, resembling the mouth of a wooden dummy."
      } else if(results.data.name === 'scyther'){
          pokeBio.innerHTML = "Is a bipedal, insectoid creature. It is primarily green with cream accents between its three body segments. On the back of its somewhat reptilian head are three points, and it has narrow eyes. Its forearms consist of large, white scythes, which it uses for hunting as well as fighting. On its thighs are spikes of fur, and it has three clawed toes on its large feet. Two pairs of cream-colored wings extend from its back. While these wings do allow this Pokémon to fly, it prefers to leap instead. The abdomen of a female will be slightly larger than that of the male."
      } else if(results.data.name === 'jynx'){
          pokeBio.innerHTML = "Is a bipedal, humanoid Pokémon that resembles a woman. Jynx wears a red gown that hides its feet and has white arms with purple hands. There are golden circles on the chest area of its gown. This Pokémon has a purple face, pink lips, saucer-like eyes, and long blonde hair. Originally, its face was colored black, causing controversy in the United States due to its perceived racial insensitivity. This Pokémon is a female-only species with no true male counterpart."
      } else if(results.data.name === 'electabuzz'){
          pokeBio.innerHTML = "Is a slightly humanoid creature with a few feline traits. It is covered in yellow fur with black stripes; a large stripe on its chest is shaped like a lightning bolt. It has a long tail. There are three, clawed toes on each of its feet, two in front and one in back, while it has five fingers on each hand. This Pokémon has two sharp fangs and a pair of antennae with bulbous ends."
      } else if(results.data.name === 'magmar'){
          pokeBio.innerHTML = "Is a bipedal Pokémon with a red body that has yellow flame designs on it. A row of red spikes runs down its back, and there are two lumps on its forehead with a flame on top of each one. It has a puckered, yellow beak and small eyes. Its thighs are yellow, and it has red feet with two, clawed toes each. Its arms are covered in rigid, red scales and it has red hands with five, clawed fingers. It has black, metal shackles on its neck and ankles. At the tips of its yellow tail is a flame."
      } else if(results.data.name === 'pinsir'){
          pokeBio.innerHTML = "Is a bipedal Pokémon with a wide, dull brown body and a large pair of gray, spiky pincers on top of its head. In its mouth are many long, flat teeth arranged horizontally. Its legs are short and thick while its arms are long and thin, and each limb ends with three gray claws. This Pokémon's limbs and abdomen are divided into segments. Its eyes are simple, but usually appear angry."
      } else if(results.data.name === 'tauros'){
          pokeBio.innerHTML = "Is a quadruped, bovine Pokémon. It is covered in light brown fur with a thick, darker brown mane around the neck. It has a rounded muzzle with a dark brown nose, and three gray bumps running vertically down its forehead. A pair of curved, gray horns grows from atop its head. Each of its three black tails has a tuft of fur on the end, and there is a single gray hoof on each foot. Tauros is a male-only species with no true female counterpart."
      } else if(results.data.name === 'magikarp'){
          pokeBio.innerHTML = "This Pokémon is a medium-sized fish Pokémon with large, heavy reddish-orange scales. It has large, vacant eyes and pink lips. Its pectoral and tail fins are white, but it has a stiff, three-peaked fin on its back and stomach that are both yellow. It also has long barbels. The barbels are white on a female and tan on a male."
      } else if(results.data.name === 'gyarados'){
          pokeBio.innerHTML = "Is a serpentine Chinese dragon-like Pokémon. It is mostly blue, with a yellow underbelly and yellow spots along its body. It has a three-pointed, dark blue crest on its head and four white, dorsal fins. Its mouth is very large and gaping, bearing four canine teeth. It has one barbel on each side of its face. The barbels are white on a female and tan for a male. This Pokémon's tailfin is similar in structure to the crest on its head, except with a thin, white fin spread between the points."
      } else if(results.data.name === 'lapras'){
          pokeBio.innerHTML = "Is a large sea creature that resembles a plesiosaur. It has a spotted, blue hide with a cream underside. Its neck is long, and it has large black eyes. There is a short horn in the middle of its forehead and curled ears placed farther back on its head. It has four flippers with the foremost pair being larger than the hind. On its back is a heavy, gray shell covered in blunt knobs."
      } else if(results.data.name === 'ditto'){
          pokeBio.innerHTML = "In its natural state, this Pokémon is a light purple or magenta free-form blob with vestigial facial features. It also appears to have two vestigial, handless 'arms' protruding from its body. It is capable of transforming into an exact replica of any physical object, including its form and abilities."
      } else if(results.data.name === 'eevee'){
          pokeBio.innerHTML = "Is a mammalian, quadruped creature with primarily brown fur. The tip of its bushy tail and its large furry collar are cream-colored. It has short, slender legs with three small toes and a pink paw pad on each foot. This Pokémon has brown eyes, long pointed ears, and a small black nose. This Pokémon is rarely found in the wild, and is mostly only found in cities and towns. However, this Pokémon is said to have an irregularly shaped genetic structure that allows it to adapt to many different kinds of environments. Eventually, this Pokémon may evolve to better suit its surroundings. According to Pokémon Mystery Dungeon, Eevee has a naive personality."
      } else if(results.data.name === 'vaporeon'){
          pokeBio.innerHTML = "Is a composite creature sharing physical traits of aquatic and land animals. It is a quadruped with three small toes on each foot and dark blue paw pads on the hind feet. This Pokémon's body is light blue with a dark blue marking around its head and a ridge down its back. This Pokémon has a split tailfin that has been mistaken for a mermaid's in the past. It has a white ruff around its neck, and three fins around its head made of cream-colored webbing. It is said that rain will come within a few hours if this Pokémon's fins begin to vibrate."
      } else if(results.data.name === 'jolteon'){
          pokeBio.innerHTML = "Is a quadruped, mammalian Pokémon. It is covered in yellow fur with a spiky fringe around its tail and a white ruff around its neck. Its ears are large and pointed, and its eyes and small nose are black. It has slender legs and small paws, each with three toes and a pink paw pad. In addition to the ability to become sharp like needles, this Pokémon's fur also amplifies the electrical charges produced by its cells. It can also store and generate negative ions in its fur, which create a sparking noise. This Pokémon is most often found in cities and towns under the ownership of Trainers."
      } else if(results.data.name === 'flareon'){
          pokeBio.innerHTML = "Is a mammalian, quadruped Pokémon covered in short, reddish-orange fur. It has long ears, dark eyes, and a small black nose. There are three small toes and a yellow paw pad on each foot. Fluffy yellow fur forms a small tuft on its head, as well as its bushy tail and a mane around its chest and neck. It will fluff out its collar to cool down its high body temperature. This high temperature is caused by its internal flame sac. This Pokémon stores and heats inhaled air in this sac, and then exhales it as fire. It is an omnivore who roasts either Berries or prey before consumption. This Pokémon is mostly found in populated areas, and is rarely seen in the wilderness."
      } else if(results.data.name === 'porygon'){
          pokeBio.innerHTML = "Is a Pokémon made completely out of programming code. It has a pink polyhedral body with a blue stomach, blue triangular prism feet, and a blue rectangular prism tail. It has a pink, polyhedral head that ends in a blue beak and has hexagonal eyes. Built into this code is Silph Co. copy protection DRM, preventing duplication through electronic means. Due to its man-made origins, this Pokémon does not need to breathe or eat, though it can still accept food if given. It has the ability to convert its body into digital data, allowing it to travel through cyberspace. It was created 20 years ago using the latest technology of its time, so many of its parts have since become obsolete."
      } else if(results.data.name === 'omanyte'){
          pokeBio.innerHTML = "Is a small, sky-blue ammonite Pokémon. It has ten tentacles and a pale yellow, helix spiraled shell on its back. The shell's hem has two circular indents, from which this Pokémon's large saucer-like eyes protrude. Several gas-filled chambers exist within this Pokémon's shell, which it uses to regulate its buoyancy within the water. By evacuating or filling the chambers, it rises and falls while twisting its tentacles to swim. Living on and swimming about the sea floor, it feeds on plankton. If attacked or endangered, it quickly withdraws into its hard shell. this Pokémon is considered extinct, although it can be revived from Fossils."
      } else if(results.data.name === 'omastar'){
          pokeBio.innerHTML = "Is a sky-blue ammonite Pokémon, with several tentacles and a pale yellow, helix spiraled shell on its back. Several sharp spikes line the shell's midsection, spanning from its forefront to just a little towards its back. The shell's hem has two circular indents where this Pokémon's eyes come out. Its eyes have yellow sclerae and vertically-slit pupils. It has an oval mouth with a four-way jawed, fang-like beak. Once caught, it never lets go of prey, immediately biting down on its victim with immense power."
      } else if(results.data.name === 'kabuto'){
          pokeBio.innerHTML = "Is a small Pokémon with a large brown shell covering its body. There are two small eyes facing upwards on the outside of its shell, which it uses for sight when it hides on the ocean floor. The structure of its body is almost entirely unknown, except its four short, yellow legs and luminescent red eyes found on its underside. Isolated populations of this Pokémon have been found to be unchanged for 300 million years. However, most living of this Pokémon are resurrected from Dome Fossils. In its original time, it was prominently found on beaches, likely aided by its fast and powerful swimming ability. As seen in the anime, Kabuto prefer seclusion and can be very territorial. It protects itself with its stiff shell."
      } else if(results.data.name === 'kabutops'){
          pokeBio.innerHTML = "With a body closely resembling a living skeleton, this Pokémon has a half-moon, disc shaped head, with two small, forward facing eyes. Its body has a light gray chest plate with a brown shell resembling a visible backbone, containing three ribs protruding on each side and a thick pointed tail. It does not have hands, but large, sharp, gray scythes. Its legs are brown and thin, leading into small feet with two large gray claws."
      } else if(results.data.name === 'aerodactyl'){
          pokeBio.innerHTML = "Is a reptilian, bipedal Pokémon with large, membranous wings. It has sharply pointed ears and a fierce expression with intense eyes. Its snout is ridged, with a gaping mouth and strong lower jaw full of serrated fangs. Its body is covered in light violet-gray skin with violet wings. This Pokémon's wings consist of a membrane running from the side of the body to the tip of an elongated finger. The clawed hands at the bend of each wing allow it to grasp objects. A hump-like ridge grows from its back and it has a strong, arrow-tipped tail. Its talon-like feet are capable of scooping up and tightly clutching its prey in flight."
      } else if(results.data.name === 'snorlax'){
          pokeBio.innerHTML = "Is a huge, bipedal, dark blue-green Pokémon with a cream-colored face, belly, and feet. Its body is composed of mostly its belly, where most of its fat reserves accumulate. Its head is large, with small, pointed ears and two pointed teeth protruding from its lower jaw. It has large, hind feet with three claws and a circular brown paw pad, and its arms and five foreclaws are short."
      } else if(results.data.name === 'articuno'){
          pokeBio.innerHTML = "Is a large avian Pokémon with predominantly blue plumage and large wings said to be made of ice. It has a head crest that consists of three, darker blue rhombus-shaped feathers on its forehead and circular red eyes. Its beak is short and gray, and its long, thin legs are the same color. It has a long, streamer-like tail that is longer than its body and the same shade of blue as its crest."
      } else if(results.data.name === 'zapdos'){
          pokeBio.innerHTML = "Is a large avian Pokémon with predominantly yellow plumage. Black rings encircle its eyes, and it has a long, thin, light orange beak. Its wings and tail are a mass of spiky feathers, with black feathers covering the back of its wings and inner tail feathers. A large crest of spiked feathers surrounds its head. Its thighs are a khaki color, and it has anisodactyl feet ending in talons."
      } else if(results.data.name === 'moltres'){
          pokeBio.innerHTML = "Is a large, avian Pokémon with orange or golden plumage. It has a long, flowing head crest and a billowing tail, both made of flames. Additionally, its wings are also shrouded in fiery plumage. Its straight, pointed beak is brown, as are its anisodactyl feet. It has short talons."
      } else if(results.data.name === 'dratini'){
          pokeBio.innerHTML = "Is a serpentine Pokémon with a blue body and a white underside. It has white, three-pronged fins on the sides of its head and a white bump on its forehead. Above its large, round, white snout are oval, purple eyes. As this Pokémon is filled with life energy, it is constantly growing, and can thus reach lengths of over six feet. As it grows, it sheds its skin regularly. Whenever this Pokémon undergoes shedding, it hides behind a large waterfall. Although this Pokémon was originally thought to be nothing more than a myth, it has been found in colonies living underwater."
      } else if(results.data.name === 'dragonair'){
          pokeBio.innerHTML = "This Pokémon is a long, serpentine Pokémon with sky blue scales and a white underside. Its violet eyes are dark and glossy. It has a smooth, rounded snout and a small, white horn on its forehead. Its head is flanked by two small, stylized wings, which are white and curve into a swirl at the base. Three blue, crystal orbs, one on its neck and two on its tail, adorn its body."
      } else if(results.data.name === 'dragonite'){
          pokeBio.innerHTML = "Is a draconic, bipedal Pokémon with light orange skin. It has large, grayish-green eyes and a round snout with small nostrils. A pair of long, thin antennae sprout from the top of its head, with a small horn set between them. Its striated underbelly is cream-colored, and extends from its neck to the tip of its long, tapering tail. It has thick arms and legs ending in three claws each. The leg joints are well defined, while its arms have a smooth, rounded appearance. This Pokémon's wings are small relative to its body, with teal wing membranes."
      } else if(results.data.name === 'mewtwo'){
          pokeBio.innerHTML = "Is a Pokémon created by science. It is a bipedal, humanoid creature with some feline features. It is primarily gray with a long, purple tail. On top of its head are two short, blunt horns, and it has purple eyes. A tube extends from the back of its skull to the top of its spine, bypassing its neck. It has a defined chest and shoulders, which resemble a breastplate. The three digits on each hand and foot have spherical tips. Its tail is thick at the base, but thins before ending in a small bulb."
      } else if(results.data.name === 'mew'){
          pokeBio.innerHTML = "Is a pink, bipedal Pokémon with mammalian features. Its snout is short and wide, and it has triangular ears and large, blue eyes. It has short arms with three-fingered paws, large hind legs and feet with oval markings on the soles, and a long, thin tail ending in an ovoid tip. Its fur is so fine and thin, it can only be seen under a microscope. This Pokémon is said to have the DNA of every single Pokémon contained within its body, and as such is able to learn any attack."
      }
    pokemonBio.appendChild(pokeBio);
    for(let i=0; i < 3; i++){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*Math.floor(72)) + 649}`).then(results => {
      let randomAnswer = document.createElement("p");
      randomAnswer.setAttribute("class", "answer incorrect btn btn-secondary");
      randomAnswer.setAttribute("onclick", "event.preventDefault()");
      randomAnswer.innerHTML = "It's a " + results.data.name +"!";
      let randomAnswerRow = document.createElement("div");
      randomAnswerRow.setAttribute("class", "row justify-content-center incorrect");
      answersContainer.appendChild(randomAnswerRow);
      randomAnswerRow.appendChild(randomAnswer);
      resetButton.addEventListener("click", e => {
        attempts = 0;
        correct = 0;
        newP.innerHTML = `Your accuracy has been reset `
      });
      answersContainer.addEventListener("click", e => {
        if (event.target.className === "answer correct btn btn-secondary") {
          correct++;
          attempts++;
          event.target.className = "answer correct btn btn-success"
        }
        else if(event.target.className === "answer incorrect btn btn-secondary"){
          attempts++
          event.target.className ="answer incorrect btn btn-danger"
        }
        console.log(correct, attempts)
        let percentage = correct/attempts;
        newP.innerHTML = `Your accuracy is ${(percentage).toFixed(2)*100}% `
        visibility.appendChild(newP);
      });
    })
  }
  }));
  }
})
// resetButton.addEventListener("click", e => {
//   attempts = 0;
//   correct = 0;
// })
