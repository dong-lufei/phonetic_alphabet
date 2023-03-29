const wrap = document.getElementsByClassName("container")[0],
  audioPlayer = document.getElementById("player")

// 鼠标悬浮处理
function handleMouserover(e) {
  if (e.target.tagName === "DIV" && e.target.hasAttribute("mp3")) {
    const attr = e.target.getAttribute("mp3")
    console.log(attr)

    audioPlayer.src = "./assets/" + attr
    audioPlayer.play()
  }
}

// 监听鼠标悬浮
wrap.addEventListener("mouseover", handleMouserover)
// 鼠标悬浮离开移除监听
wrap.removeEventListener("mouseleave", handleMouserover)
