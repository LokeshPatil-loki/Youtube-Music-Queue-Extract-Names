const queue = document.querySelectorAll("#contents.style-scope.ytmusic-player-queue")[1];
const queueItems = queue.querySelectorAll("ytmusic-player-queue-item");

const songNameList = []
Array.from(queueItems).forEach(item => {
    const title = item.querySelector(".song-title").innerText
    const by = item.querySelector(".byline").innerText
    const fullName = `${title} by ${by}`;
    songNameList.push(fullName);
});

console.log(songNameList);
