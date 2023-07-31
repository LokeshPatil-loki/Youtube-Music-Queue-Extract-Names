const queue = document.querySelectorAll("#contents.style-scope.ytmusic-player-queue")[1];
const queueItems = queue.querySelectorAll("ytmusic-player-queue-item");
const playlistName = "Queued Items"
// const songNameList = []
// Array.from(queueItems).forEach(item => {
//     const title = item.querySelector(".song-title").innerText
//     const by = item.querySelector(".byline").innerText
//     const fullName = `${title} by ${by}`;
//     songNameList.push(fullName);
// });

// console.log(songNameList);

function getSongName(item){
  const title = item.querySelector(".song-title").innerText
  const by = item.querySelector(".byline").innerText
  return `${title} by ${by}`
}

async function saveItemToPlaylist(item,playlistName){
    const three_dots = item.querySelector(".yt-spec-touch-feedback-shape__fill");
    await three_dots.click();
    const menuItems = document.querySelectorAll("#navigation-endpoint");
    const saveToPlaylistButton = menuItems[1];
    await saveToPlaylistButton.click();
    const playlistButtons = document.querySelectorAll("div#playlists ytmusic-playlist-add-to-option-renderer button");
    let i=0;
    for(;i<playlistButtons.length;i++){
        const playlist = playlistButtons[i];
        if(playlist.innerText.split("\n")[0] == playlistName){
            break;
        }
    }
    if(i < playlistButtons.length){
        playlistButtons[i].click()
        console.log(`${getSongName(item)} to ${playlistName}`)
        return true;
    }else{
        return false;
    }
}

async function processQueueItemsSequentially() {
  for (const item of queueItems) {
    await saveItemToPlaylist(item, playlistName);
    await new Promise(resolve => setTimeout(resolve, 600)); // 1-second delay
  }
}

await processQueueItemsSequentially();
