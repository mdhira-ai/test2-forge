const { webFrame } = require('electron')

webFrame.setZoomFactor(1)
window.addEventListener('DOMContentLoaded' , () => {
    console.log('hello from preload.js')


    const timelabel = document.getElementById('timeshow')
    const date = new Date()

    timelabel.innerHTML = date.toLocaleTimeString()

    setInterval(() => {
        const date = new Date()
        timelabel.innerHTML = date.toLocaleTimeString()
    }, 1000)
})