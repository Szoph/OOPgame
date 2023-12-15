
let heldItem = [];
  let hasHammer = false;
  let hasKey = false;
  let hasNecklace = false;
  let hasShinyGem = false;
  let hasMirror = false;
  let hasSlug = false;
  let hasBook = false;
  itemsBag = document.getElementById("items");
  


class User { 
    constructor(startInfo) {
        this._startInfo = startInfo;
    }
    set startInfo(value) {
        this._startInfo = value;
    }
    get startInfo() {
        return this._startInfo;
    }
      
}
const You = new User("You experimented with a dark magic ritual in your house and ended up opening a portal to an unknown world. You passed out after the ritual and wake up in the hallway. You hear some strange noises coming from elsewhere in the house. You need to close the portal. This is why you shouldn't play with dark magic. Silly, curious human.");

class Item {
    constructor(name) {
      this._name = name;
      this._description = "There is an item on the floor.";
      this._damage = "";
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._description = value;
    }
    set damage(value) {
        this._damage = value;
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
    get damage() {
        return this._damage;
    }
    describe() {
      return "There is an item on the floor. ";
    }
    takeItems(item) {
      console.log(currentRoom)

      if (item._name === "key"){
        hasKey = true
        console.log(hasKey)
        currentRoom._item = "";
        heldItem.push(" Key")
        //put items in item bag or held items
        document.getElementById("items").innerText = heldItem
      } else if (item._name === "titanic hammer"){
          hasHammer = true
          console.log(hasHammer)
        currentRoom._item = "";
        heldItem.push(" Titanic Hammer")
      } else if (item._name === "gemstone necklace"){
        hasNecklace = true
        console.log(hasNecklace)
        currentRoom._item = "";
        heldItem.push(" Necklace")
        document.getElementById("items").innerText  = heldItem
      } else if(item._name === "shiny gem"){
        hasShinyGem = true
        console.log(hasShinyGem)
        currentRoom._item = "";
        heldItem.push(" Shiny Gem")
        document.getElementById("items").innerText  = heldItem
      } else if (item._name === "hand mirror"){
        hasMirror = true
        console.log(hasMirror)
        currentRoom._item = "";
        heldItem.push(" Mirror")
        document.getElementById("items").innerText  = heldItem
      } else if(item._name === "slug") {
        hasSlug = true
        console.log(hasSlug)
        currentRoom._item = "";
        heldItem.push(" Slug")
        document.getElementById("items").innerText = heldItem
      } else if (item._name === "book") {
        hasBook = true
        document.getElementById("items").innerHTML += "Book, ";
        currentRoom._item = "";
        heldItem.push(" Book")
        document.getElementById("items").innerText  = heldItem
      } else {
        return "There's nothing to pick up."
      }
    }
   }
  //create items
const Key = new Item("key");
Key.description = "its a shiny key."

const TitanicHammer = new Item("titanic hammer");
TitanicHammer.description = "a heavy hammer, it's head is large, probably good for bone-shattering impact against foes."

const Necklace = new Item("gemstone necklace");
Necklace.description = "a necklace that has unique gemstones and emits a faint, otherworldly glow.";

const ShinyGem = new Item("shiny gem");
ShinyGem.description = "a super shiny purple gem.";

const Mirror = new Item("hand mirror");
Mirror.description = "a handheld mirror that looks really old.";

const Slug = new Item("slug");
Slug.description = "a slimy slug."

const SpikedClub = new Item("spiked club");
SpikedClub.description = "a spiked club."

const Book = new Item("book");
Book.description = "a heavy book of folklore and legends. Its pages are tattered and inside you find the ritual to close the portal."



class Character {
    constructor(name) {
      this._name = name,
      this._description = ""
      this._conversation = ""
      this._species = ""
      this._friend = ""
      this._heldItem = ""
    }
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._description = value;
    }
    set conversation(value) {
        this._conversation = value;
    }
    set species(value) {
        this._species = value;
    }
    set friend(value) {
        this._friend = value;
    }
    set heldItem(value) {
        this._heldItem = value;
    }
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }

    get species() {
        return this._species;
    }

    get friend() {
        return this._friend;
    }

    get heldItem() {
        return this._heldItem;
    }
    
  //to tallk type talk
    describe() {
      return `You see a ${this._species}. It is ${this._description}. They look ${this._friend ? 'friendly. ' : 'unfriendly. '}`
    }
  
    converse() {
      if (currentRoom.character === Grendock && hasHammer === true){
        return `${this._conversation} You killed the troll with the titanic hammer and he dropped the key to the basement. It is now unlocked.`
      } else if (currentRoom.character === Grendock && hasHammer === false){
        alert("The troll killed you with his spiked club. Maybe you need a weapon"); 
      startGame()
      } else if (currentRoom.character === Lynxara && hasShinyGem === true){
        return `${this._conversation} " What is that you've got? I'll swap you that shiny thing for this other shiny thing." Lynxara takes the shiny gem and gives you a key.`
      } else if (currentRoom.character === Hopkins && hasSlug === true){
        return `${this._conversation} It says "ribbit." and takes the slug from your pocket. He looks up lovingly at you and gives you a heavy weapon.`
      }
      return `${this._conversation}`;
    }
    pushItems() {
        return `${this._heldItem}`;
    }
}


//create character objects
let Lynxara = new Character("Lynxara");
Lynxara.description = "a tall purple... human? with cat-like features, big pointy ears and a tail.";
Lynxara.conversation = `You approach the feline humanoid and it says "Oh.. hello, aren't you a weird creature. I'm Lynxara. I love shiny things. Where am I?" You notice it's holding a key.`
Lynxara.species = "feline humanoid";
Lynxara.friend = true;
Lynxara.heldItem = Key;

let Grendock = new Character("Grendock");
Grendock.description = "a small fat ugly green creature with sharp teeth";
Grendock.conversation = `You approach the troll and it says "Gruntharok krugnash vorplar, snarluk grok'nash!" You somehow understand this to mean "My name is Grendock, die!" as it charges at you holding a spiked club.`;
Grendock.species = "troll";
Grendock.friend = false;
Grendock.heldItem = SpikedClub;

let Hopkins = new Character("Hopkins");
Hopkins.description = "a small wise-looking frog. It looks like it might have some information for you."
Hopkins.conversation = `You approach the frog and it says "ribbit." ...What did you expect? You notice its sitting on something. Maybe a weapon?`;
Hopkins.species = "frog";
Hopkins.friend = true;

class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._character = "";
      this._item = "";
      this._isLocked = "";
      this._itemDescription = "";
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get character() {
      return this._character
    }

    get item() {
        return this._item
    }
    get itemDescription() {
      return this._itemDescription
    }
    
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
    set item(value) {
        this._item = value;
    }
    set itemDescription(value) {
      this._itemDescription = value;
    }
  
    describe() {
      return `You are in the ${this._name}. You see ${this._description}`
    }
    
  //link rooms 
  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink
}
  
    getDetails() {
      const entries = Object.entries(this._linkedRooms);
      let details = []
      for (const [direction, room] of entries) {
        let text = " The " + room._name + " is to the " + direction;
        details.push(text);
      }
      return details;
    }
  
    //method to move to a new room
    move(direction) {
        if (direction in this._linkedRooms) {
            let nextRoom = this._linkedRooms[direction];
            if (nextRoom.isLocked === true) {
                alert("This room is locked.");
                return this;
            } else {
                return nextRoom;
            }
      } else {
        alert("There's nothing there",);
        return this;
      }
    }
    
  }
  
  
  //create the room objects
  const Kitchen = new Room("kitchen");
  Kitchen.description = "the kitchen units, a fridge and an oven.";
  Kitchen.character = Grendock;

  const Lounge = new Room("living room");
  Lounge.description = "2 sofas, a TV, a cabinet and a coffee table.";
  Lounge.character = Lynxara;
  
 const Bathroom = new Room("bathroom");
  Bathroom.description = "a bath, a toilet, a sink and a cupboard.";
  Bathroom.character = Hopkins;
Bathroom.isLocked = true;
Bathroom.itemDescription = "a heavy hammer, it's head is large, probably good for bone-shattering impact against foes."
  
const Hall = new Room("hallway");
  Hall.description = "the hallway is narrow and long. There is a rug on the floor that seems to be covered in some sort of goo.";

  const Basement = new Room("basement");
  Basement.description = "a large glowing purple light in the corner of the room. This must be the portal. Maybe you need other items to close it.";
  Basement.isLocked = true;

  const Closet = new Room("closet");
  Closet.description = "its a coat closet, barely big enough for you."
  Closet.item = ShinyGem;
  Closet.itemDescription = "a super shiny purple gem.";

  const Bedroom = new Room("bedroom");
  Bedroom.description = "a comfy-looking bed in the middle of the room. There is a large scary creature on the bed in a deep sleep that you don't want to wake."
  Bedroom.item = Mirror
  Bedroom.itemDescription = "a handheld mirror that looks really old. The reflection is a little distorted.";

  const DiningRoom = new Room("dining room");
  DiningRoom.description = "a wooden table and chairs in the middle of the room, a painting you made hangs on the wall. On the table there is a slug-like creature eating your leftover dinner, leaving a trail of goo in it's path."
  DiningRoom.item = Necklace
  DiningRoom.itemDescription = "a necklace that has unique gemstones and emits a faint, otherworldly glow."

  const Garden = new Room("garden");
  Garden.description = "it's dark out, but the moon lights the garden. There's a hoard of small, pixie-like creatures digging up your flowers."
  Garden.item = Book
  Garden.itemDescription = "a heavy book of folklore and legends. Its pages are tattered and inside you find the ritual to close the portal."

  const Office = new Room("office");
  Office.description = "a desk with a computer on and an office chair. There is a little gremlin creature tearing up your important papers on the desk... how will you explain this to your boss?"
  Office.item = Slug;
  Office.itemDescription = "a slimy slug."
  
  //link the rooms together
Hall.linkRoom("north", Lounge);
Hall.linkRoom("east", Kitchen);
Hall.linkRoom("west", Bedroom);
Kitchen.linkRoom("west", Hall);
Kitchen.linkRoom("south", Basement);
Lounge.linkRoom("south", Hall);
Lounge.linkRoom("east", Bathroom);
Bedroom.linkRoom("east", Hall);
Bedroom.linkRoom("north", Closet);
Closet.linkRoom("south", Bedroom);
Bathroom.linkRoom("west", Lounge);
Basement.linkRoom("north", Kitchen);
Lounge.linkRoom("north", DiningRoom);
DiningRoom.linkRoom("south", Lounge);
Garden.linkRoom("west", DiningRoom);
DiningRoom.linkRoom("east", Garden);
Lounge.linkRoom("west", Office);
Office.linkRoom("east", Lounge);

//function to refresh page
function handleClick() {
  window.location.reload();
}

  //display the room information, get items and characters.
function displayRoomInfo(room) {
    let occupantMsg = currentRoom.character === "" ? "" : currentRoom.character.describe();
    let roomItem = "";
    if (currentRoom.item === ""){
        roomItem = "";
    } 
    else {
        roomItem = currentRoom.item.describe();
        
    }
    if (currentRoom === Basement && hasHammer === true && hasBook === true && hasMirror === true && hasNecklace === true){
      let winGame = ". You use the book, mirror and necklace to recreate the dark magic ritual. You chant the words in the book: 'By shadows bound, by unseen ties, Seal this rift, close the skies. Through veils and realms, let none pass, End this gateway, seal it fast.' There is a flash and everything that had passed through the portal is sucked back into it. After a few seconds the portal closes and disappears. Well done, your objective is complete."
      document.getElementById("location").innerText = currentRoom._name;
    let textContent = room.describe() + " " + occupantMsg + roomItem + room.getDetails() + winGame;
    document.getElementById("textarea").innerHTML = textContent;
    //show restart button that refreshes the page
      restartButton = document.getElementById("restart");
      restartButton.style.display = "inline-block";
       restartButton.addEventListener("click", handleClick);
    } else{
    document.getElementById("location").innerText = currentRoom._name;
    let textContent = room.describe() + " " + occupantMsg + roomItem + room.getDetails();
    document.getElementById("textarea").innerHTML = textContent;
    
  }}
  
//talk command to talk to characters
function talk() {

        let characterDialogue = currentRoom.character.conversation === "" ? "" : currentRoom.character.converse();
  
        textContent = currentRoom.character.describe() + characterDialogue + currentRoom.getDetails();
        document.getElementById("textarea").innerHTML = textContent;
        if (currentRoom.character === Grendock && hasHammer === true){
          Basement.isLocked = false;
          currentRoom.character = "";
          currentRoom.description += " There is a dead troll called Grendock on the floor."
        } else if (currentRoom.character === Lynxara && hasShinyGem === true){
          hasKey = true;
          hasShinyGem = false;
          heldItem.push(" Key")
          let index = heldItem.indexOf(" Shiny Gem");
          if (index !== -1) {
         heldItem.splice(index, 1);
        }
        document.getElementById("items").innerText  = heldItem
          Bathroom.isLocked = false;
        } else if (currentRoom.character === Hopkins && hasSlug === true){
          hasHammer = true;
          hasSlug = false;
          heldItem.push(" Titanic Hammer")
          let index = heldItem.indexOf(" Slug");
          if (index !== -1) {
         heldItem.splice(index, 1);
        }
        document.getElementById("items").innerText  = heldItem
        }
  }

  //command to take item
  function take(item) {
    item.takeItems(item) 
   textContent = `You take the item and put it in your bag. It's ` + currentRoom.itemDescription + currentRoom.getDetails();
    document.getElementById("textarea").innerHTML = textContent;
    }
  


  
  function startGame() {
    //set and display start room
    currentRoom = Hall
    console.log (currentRoom)
    displayRoomInfo(currentRoom);
    
 
    //handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value.toLowerCase();
        const directions = ["north", "south", "east", "west"]
        const converse = ["talk"]
        const grabItem = ["take"]
        if (directions.includes(command.toLowerCase())) {
          currentRoom = currentRoom.move(command)
          document.getElementById("usertext").value = ""
          displayRoomInfo(currentRoom);
        } else if(converse.includes(command.toLowerCase())){
            if (currentRoom.character === ""){
                alert("there's no one to talk to")
            } else {
                talk()
                document.getElementById("usertext").value = ""
            }
        } else if(grabItem.includes(command.toLowerCase())) {
            if (currentRoom.item === ""){
                alert("There's nothing to pick up")
            } else {
              console.log(currentRoom)
                take(currentRoom.item)
                document.getElementById("usertext").value = ""
            }
        } 
        else {
          document.getElementById("usertext").value = ""
          alert("that is not a valid command please try again")
        }
      }
    });
    //add story info to text 
    document.getElementById("important-info").innerText = You.startInfo
  }

  
  
  startGame();