function navigateTo(event) {
    const url = event.currentTarget.getAttribute('data-url');
    window.location.href = url;
}

document.querySelectorAll('.image-button').forEach(button => {
    button.addEventListener('click', navigateTo);
});

function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.style.display = "block";
    } else {
        element.classList.add('hidden');
        element.style.display = "none";
    }
}

function showWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    if(windowElement) {
        windowElement.style.display = "block";
    }
}

function hideWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    if(windowElement) {
        windowElement.style.display = "none";
    }
}

// code to make folder window draggable
document.querySelectorAll('.window').forEach(windowElement => {
    attachDragEvents(windowElement);
});

function attachDragEvents(dragElement) {
    dragElement.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", function(event) {
        drag(event, dragElement);
    });
}

let dragStartX, dragStartY, startPosX, startPosY;

function dragStart(event) {
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    startPosX = event.currentTarget.offsetLeft;
    startPosY = event.currentTarget.offsetTop;
    document.body.style.userSelect = "none";
}

function drag(event, dragElement) {
    if (dragStartX === undefined) return;

    let dx = event.clientX - dragStartX;
    let dy = event.clientY - dragStartY;

    dragElement.style.left = startPosX + dx + "px";
    dragElement.style.top = startPosY + dy + "px";
}

function dragEnd() {
    dragStartX = undefined;
    dragStartY = undefined;
    document.body.style.userSelect = "";
}


// Get the time
function updateDateTime() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var formattedDate = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var formattedTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('dateTimeDisplay').innerText = formattedDate + ' ' + formattedTime;
}

setInterval(updateDateTime, 1000);