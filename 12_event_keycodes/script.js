const insert = document.getElementById('insert');

window.addEventListener('keydown', event => {
    insert.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
        <br>
        <div class="key">
            Press any key to get the keycode
        </div>
    `
});