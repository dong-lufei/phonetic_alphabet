const wrap = document.getElementsByClassName("ptable")[0],
  // const yinbiao48 = document.querySelectorAll(".ptable td[mp3]"),
  audioPlayer = document.getElementById("player")

// 鼠标悬浮处理
function handleMouserover(e) {
  console.log("触发鼠标悬浮")
  if (
    e.target.tagName === "A" &&
    e.target.parentElement.tagName === "TD" &&
    e.target.parentElement.hasAttribute("mp3")
  ) {
    const attr = e.target.parentElement.getAttribute("mp3")

    audioPlayer.src = "./assets/" + attr
    audioPlayer.play()
  }
}

// 监听鼠标悬浮
wrap.addEventListener("mouseover", handleMouserover)
// 鼠标悬浮离开移除监听
wrap.removeEventListener("mouseleave", handleMouserover)
