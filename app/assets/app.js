// Change Mode //
function change_mode(){
    let mode = document.getElementById('mode');
    if( mode.innerHTML ==  '☽'){
        document.getElementById('main-list').style.backgroundColor = '#222222';
        document.getElementById('body').style.backgroundColor = '#222222';
        document.getElementById('body').style.color = '#fff';
        let section = document.getElementsByClassName('section');
        for(let id=0; id<section.length; id++){ section[id].style.backgroundColor = '#2a2a2a'; }
        mode.innerHTML = '☀';
    }else{
        document.getElementById('main-list').style.backgroundColor = '#e2e2e2';
        document.getElementById('body').style.backgroundColor = '#e2e2e2';
        document.getElementById('body').style.color = '#151515';
        let section = document.getElementsByClassName('section');
        for(let id=0; id<section.length; id++){ section[id].style.backgroundColor = '#f0f0f0'; }
        mode.innerHTML = '☽';
    }
}

// download years //
function download_year(){
    let download_years = document.getElementById('download_years'),
        color_list = ['#d00', '#0d0', '#00d', '#dd0', '#d0d', '#0dd', '#ddd'],
        year = Number((new Date()).getFullYear());
    setInterval(()=>{
        download_years.innerHTML = '▼ Download Year [ ' + year++ + ' ]';
        download_years.style.color = color_list[year%7];
    }, 60);
};

// Scrolling into places //
function scroll_to(place){
    document.getElementById("body").classList.add('body_anime');
    setTimeout(()=>{document.getElementById("body").classList.remove('body_anime')}, 500);
    document.getElementById(place).click();
}

// Change language //
function change_language(){
    if(document.getElementById("language").innerHTML == "● Language (En)") window.location = "app_ar.html";
    else window.location = "app_en.html";
}

// Main //
window.onload = ()=>{
    // prevent resize window
    window.addEventListener("resize", function(event){
        //alert('Is not recommended to resize the window');
    });
    change_mode();
    download_year();
    // Body
    document.getElementById("body").style.opacity = "1";
    document.getElementById("body").classList.add('body_anime');
    setTimeout(()=>{document.getElementById("body").classList.remove('body_anime')}, 1000);
}