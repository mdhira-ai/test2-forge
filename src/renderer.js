

window.addEventListener('DOMContentLoaded' , () => {

    const editor = document.getElementById('editor')
    const log = document.getElementById('log')
    const fontSizeincrease = document.getElementById('fontSizeincrease')

    log.style.color = 'white'
    

    editor.addEventListener('keydown', (e) => {
        console.log(e)
       
        if(e.key === 'Tab'){
            e.preventDefault()
            const start = editor.selectionStart
            const end = editor.selectionEnd

            editor.value = editor.value.substring(0, start) + '\t' + editor.value.substring(end)
            editor.setSelectionRange(start + 1, start + 1);
        }

        

        
      
    })

    fontSizeincrease.addEventListener('input', () => {
        increaseFontSize(fontSizeincrease.value)
    
    })

    function increaseFontSize(currentSize) {
        editor.style.fontSize = currentSize + 'px'
        
    }
    

})