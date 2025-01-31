// 1. Import the all three objects (Song, Musician, Playlist) that you created in the MusicData.js module file

// 2. declare a new constant and assign to it a new musician object to describe the musician for the first song.

// 3. declare a new constant and assign to it a new musician object to describe the musician for the second song.

// 4. declare a new constant and assign to it a new musician object to describe the musician for the third song.

// 5. declare a new constant and assign to it a new Song object to describe the first song
// (make sure to use the Musician object from step 2 in creating this Song object

// 6. declare a new constant and assign to it a new Song object to describe the second song
// (make sure to use the Musician object from step 3 in creating this Song object

// 7. declare a new constant and assign to it a new Song object to describe the third song
// (make sure to use the Musician object from step 4 in creating this Song object

// 8. declare a new constant called myPlaylist and assign to it a new Playlist object and make sure to use the three Song objects
//from steps 5, 6, & 7 when creating it.
//It must be called myPlaylist
//It must be called myPlaylist

//9. call the .getInfo() method on myPlaylist

import { Song, Musician, Playlist } from "./MusicData.js";
const musician1 = new Musician("Cameron Lew", "Keys", "City Pop");
const musician2 = new Musician("Corey Wong", "Guitar", "Rock");
const musician3 = new Musician("Dave Koz", "Sax", "Smooth Jazz");
const song1 = new Song("Only You", musician1, "Shinbangumi");
const song2 = new Song("Radio Shack", musician2, "Wong's Cafe");
const song3 = new Song("Together Again", musician3, "The Golden Hour");
const myPlaylist = new Playlist("Obsessive Replays", song1, song2, song3);
myPlaylist.getInfo();

//DO NOT EDIT BELOW THIS LINE
//the code below here will insert the Playlist data into the webpage.
const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;
