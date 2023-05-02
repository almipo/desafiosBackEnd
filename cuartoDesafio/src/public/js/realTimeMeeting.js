const socket = io();


socket.on('meetings', data=>{
    const finalContent = document.getElementById('meetingsContent') 
    let content ="";
    data.foreach(meeting=>{
        content += `${meeting.title} -----${meeting.hour} ----${meeting.status}`
    })
    finalContent.innerHTML = content
})