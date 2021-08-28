const wrapper = [{
        No: 1,
        img: "https://wallpapercave.com/wp/wp3070125.jpg",
        name: "Juggernaut",
        type: "Melee Agility",
        info: "No one has ever seen the face hidden beneath the mask of Yurnero the Juggernaut. It is only speculation that he even has one. For defying a corrupt lord, Yurnero was exiled from the ancient Isle of Masks--a punishment that saved his life. The isle soon after vanished beneath the waves in a night of vengeful magic. He alone remains to carry on the Isle's long Juggernaut tradition, one of ritual and swordplay. The last practitioner of the art, Yurnero's confidence and courage are the result of endless practice; his inventive bladework proves that he has never stopped challenging himself. Still, his motives are as unreadable as his expression. For a hero who has lost everything twice over, he fights as if victory is a foregone conclusion."
    },
    {
        No: 2,
        img: "https://wallpapercave.com/wp/wp2031511.jpg",
        name: "Pudge",
        type: "Melee Strength",
        info: "In the Fields of Endless Carnage, far to the south of Quoidge, a corpulent figure works tirelessly through the night--dismembering, disembowelling, piling up the limbs and viscera of the fallen that the battlefield might be clear by dawn. In this cursed realm, nothing can decay or decompose; no corpse may ever return to the earth from which it sprang, no matter how deep you dig the grave. Flocked by carrion birds who need him to cut their meals into beak-sized chunks, Pudge the Butcher hones his skills with blades that grow sharper the longer he uses them. Swish, swish, thunk. Flesh falls from the bone; tendons and ligaments part like wet paper. And while he always had a taste for the butchery, over the ages, Pudge has developed a taste for its byproduct as well. Starting with a gobbet of muscle here, a sip of blood there...before long he was thrusting his jaws deep into the toughest of torsos, like a dog gnawing at rags. Even those who are beyond fearing the Reaper, fear the Butcher.",
    },
    {
        No: 3,
        img: "https://wallpapercave.com/wp/wp1892051.png",
        name: "Invoker",
        type: "ranged intelligence",
        info: "n its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell's power.The greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize. The most devoted might hope in a lifetime to have adequate recollection of three spells—four at most. Ordinary wizards were content to know two, and it was not uncommon for a village mage to know only one—with even that requiring him to consult grimoires as an aid against forgetfulness on the rare occasions when he might be called to use it."
    },
    {
        No: 4,
        img: "https://wallpapercave.com/wp/wp7252775.jpg",
        name: "Faceless Void",
        type: "Melee Agility",
        info: "Darkterror the Faceless Void is a visitor from Claszureme, a realm outside of time. It remains a mystery why this being from another dimension believes the struggle for the Nemesis Stones is worth entering our physical plane, but apparently an upset in the balance of power in this world has repercussions in adjacent dimensions. Time means nothing to Darkterror, except as a way to thwart his foes and aid his allies. His long-view of the cosmos has given him a remote, disconnected quality, although in battle he is quite capable of making it personal.",
    },
    {
        No: 5,
        img: "https://wallpapercave.com/wp/wp3664652.jpg",
        name: "Huskar",
        type: "Ranged Strength",
        info: "Emerging from the throes of the sacred Nothl Realm, Huskar opened his eyes to see the prodigal shadow priest Dazzle working a deep incantation over him. Against the ancient rites of the Dezun Order, Huskar's spirit had been saved from eternity, but like all who encounter the Nothl he found himself irrevocably changed. No longer at the mercy of a mortal body, his very lifeblood became a source of incredible power; every drop spilled was returned tenfold with a fierce, burning energy. However this newfound gift infuriated Huskar, for in his rescue from the Nothl, Dazzle had denied him a place among the gods. He had been denied his own holy sacrifice.",
    },
];

let getImg = document.getElementById("person-img");
let getName = document.getElementById("name");
let getType = document.getElementById("type");
let getInfo = document.getElementById("info");


let nextBtn = document.querySelector(".next-btn")
let prevBtn = document.querySelector(".prev-btn")
let rndmBtn = document.querySelector(".random-btn")
console.log(nextBtn);


currentVal = 0;

window.addEventListener("DOMContentLoaded", function() {
    const apply = wrapper[currentVal];
    getImg.src = apply.img;
    getName.innerText = apply.name;
    getType.innerText = apply.type;
    getInfo.innerText = apply.info;
});

function execute(currentVal) {
    const apply = wrapper[currentVal];
    getImg.src = apply.img;
    getName.innerText = apply.name;
    getType.innerText = apply.type;
    getInfo.innerText = apply.info;

}

nextBtn.addEventListener("click", function() {
    currentVal++;
    if (currentVal > wrapper.length - 1) {
        currentVal = 0;
    }
    execute(currentVal);
});

prevBtn.addEventListener("click", function() {
    currentVal--;
    if (currentVal < 0) {
        currentVal = wrapper.length - 1;
    }
    execute(currentVal);
});

rndmBtn.addEventListener("click", function() {
    currentVal = Math.floor(Math.random() * wrapper.length)
    execute(currentVal)
})