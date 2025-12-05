// < !--js定義選單在桌機、手機的顯示與隱藏-- >
function showCard() {
    const card = document.querySelector('#card')
    sidebar.style.display = 'flex'
    // 點擊 body 時，如果點到 card 以外就關閉
    document.addEventListener('click', outsideClickListener)
}
function hideCard() {
    const card = document.querySelector('#card')
    document.removeEventListener('click', outsideClickListener)
}
function outsideClickListener(event) {
    // 如果點擊目標不是 card 或 sidebar 內的元素
    if (!card.contains(event.target) && !event.target.matches('')) {
        hideCade()
    }
}

// 選單出現、半透明遮罩出現
const sidebar = document.querySelector('#card')
const overlay = document.querySelector('.overlay')
const toggleBtn = document.querySelector('')

// 點擊按鈕 → 顯示 sidebar + 遮罩
toggleBtn.addEventListener('click', () => {
    card.style.display = 'flex'
    overlay.style.display = 'block'
})

// 點擊遮罩 → 隱藏 sidebar + 遮罩
overlay.addEventListener('click', () => {
    card.style.display = 'none'
    overlay.style.display = 'none'
})