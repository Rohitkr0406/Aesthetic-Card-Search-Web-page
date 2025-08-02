const users = [
	{
		name: "amisha rathore",
		pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
		bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
	},
	{
		name: "amita mehta",
		pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
		bio: "main character energy 🎬 | coffee > everything ☕✨",
	},
	{
		name: "isha oberoi",
		pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
		bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
	},
	{
		name: "Ojin Oklawa",
		pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
		bio: "too glam to give a damn 💅 | filter free soul",
	},
	{
		name: "diya bansal",
		pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
		bio: "a little chaos, a lot of art 🎨✨ | just vibes",
	},
	{
		name: "tanay rawat",
		pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
		bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
	},
	{
		name: "mohit chhabra",
		pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
		bio: "aesthetic overload 📸🕊️ | living in lowercase",
	},
	{
		name: "riya kapoor",
		pic: "https://i.pinimg.com/736x/3a/60/5b/3a605b6cc364b5d1f04e1258dbd52503.jpg",
		bio: "moonchild with a playlist for every mood 🌙🎧",
	},
	{
		name: "samar arjun",
		pic: "https://i.pinimg.com/736x/1d/45/ec/1d45ecc867a7e405cdee8695b105c1d9.jpg",
		bio: "chaotic good with a camera roll full of sunsets 📷🌅",
	},

	{
		name: "neha singh",
		pic: "https://i.pinimg.com/736x/8f/f1/94/8ff194c61452a07fde97dc82627f1546.jpg",
		bio: "book hoarder 📚 | chai philosopher ☕",
	},
	{
		name: "arjun verma",
		pic: "https://i.pinimg.com/736x/06/cf/5b/06cf5b0cde0d102fee0228e0679a7d4e.jpg",
		bio: "lowkey genius, highkey procrastinator 🧠😴",
	},
	{
		name: "meera joshi",
		pic: "https://i.pinimg.com/736x/de/ef/98/deef98d1637a105e173b4a66290eeef3.jpg",
		bio: "dreams in color, lives in grayscale 🎨🖤",
	},
	{
		name: "yash thakur",
		pic: "https://i.pinimg.com/736x/b0/36/7e/b0367e1fb25089f303cb33b8dd5e3db4.jpg",
		bio: "vibes curator 🎶🌀 | meme dealer",
	},
	{
		name: "kabir sehgal",
		pic: "https://i.pinimg.com/1200x/92/3c/66/923c66733f0e117ca51c3537b57a147a.jpg",
		bio: "sarcasm is my cardio 🏃‍♂️💬",
	},
	{
		name: "ananya gupta",
		pic: "https://i.pinimg.com/1200x/e7/ce/37/e7ce371609b21f993c7af4844d338e19.jpg",
		bio: "sunshine mixed with a little hurricane 🌞🌪️",
	},
	{
		name: "devansh patel",
		pic: "https://i.pinimg.com/1200x/e7/f2/8b/e7f28bbbdb63e0b7b95c9f1aad5eaeae.jpg",
		bio: "code, coffee, repeat 💻☕🔁",
	},
	{
		name: "shruti rao",
		pic: "https://i.pinimg.com/1200x/3c/6d/ba/3c6dba831950525ca340b92b5ec02c76.jpg",
		bio: "poetry in pixels 🖋️🖥️",
	},
	{
		name: "tanya sharma",
		pic: "https://i.pinimg.com/736x/ff/83/1a/ff831a233c72dfa3f51f5ed3c55efcc4.jpg",
		bio: "soft soul, loud laugh 💗😂",
	},
	{
		name: "rohan malik",
		pic: "https://i.pinimg.com/736x/62/32/06/6232061577e1bc074fa0aafa6550d924.jpg",
		bio: "keyboard ninja 🥷⌨️ | bug whisperer",
	},
	{
		name: "priya desai",
		pic: "https://i.pinimg.com/1200x/1e/33/b9/1e33b9b518cc54a4a377d789a283ee5c.jpg",
		bio: "aesthetic addict 🌸📷 | playlist alchemist",
	},
	{
		name: "veer jain",
		pic: "https://i.pinimg.com/736x/c1/81/1d/c1811dc3892da6275a85e89800f4be7e.jpg",
		bio: "debugging life one line at a time 🧩💬",
	},
	{
		name: "kriti saxena",
		pic: "https://i.pinimg.com/736x/32/d5/a0/32d5a00330ed3ba678cb0246823b5174.jpg",
		bio: "chaos coordinator 💼🎨 | midnight doodler",
	},
];

users.forEach((user) => {
	user.name = user.name.split(" ").map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	}).join(" ");
});

function showUsers(arr) {
	const container = document.querySelector(".card-containers");
	if (!container) return; 

	const fragment = document.createDocumentFragment();

	arr.forEach((user) => {
		const card = document.createElement("div");
		card.classList.add("card");

		const img = document.createElement("img");
		img.classList.add("bg-img");
		img.src = user.pic;
		img.alt = "Profile-pic";

		const blurredLayer = document.createElement("div");
		blurredLayer.classList.add("blurred-layer");

		const content = document.createElement("div");
		content.classList.add("content");

		const h3 = document.createElement("h3");
		h3.textContent = user.name;

		const p = document.createElement("p");
		p.textContent = user.bio;

		content.appendChild(h3);
		content.appendChild(p);

		card.appendChild(img);
		card.appendChild(blurredLayer);
		card.appendChild(content);

		fragment.appendChild(card);
	});

	container.replaceChildren(fragment);
}

showUsers(users);

function debounce(func, delay){
	let timer;
	return function(...args){
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	}
}

const searchInput = document.querySelector("input.search");
const errormsg = document.querySelector(".error");

function handleSearch(){
	const inputValue = searchInput.value;
	const searchTerm = inputValue.toLowerCase().trim();
	const filteredUsers = users.filter((user) => {
		return user.name.toLowerCase().includes(searchTerm);
	});

	showUsers(filteredUsers);

	if (filteredUsers.length === 0 && searchTerm) {
		errormsg.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> &nbsp; &nbsp;No user found matching "${inputValue}"`;
		errormsg.style.display = "block";
	} else {
		errormsg.style.display = "none";
	}
}

const debouncedHandleSearch = debounce(handleSearch, 500);
searchInput.addEventListener("input", debouncedHandleSearch);

window.addEventListener("keydown", (e) => {
	if (e.key === "/") {
		e.preventDefault(); 
		searchInput.focus();
	}
});
