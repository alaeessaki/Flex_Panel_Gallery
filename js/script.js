var click = true
function Open(id1,id2,id3,id4,id5,id6){
    var section = document.getElementById(id1)
    var img = document.getElementById(id2)
    var text_cont = document.getElementById(id3)
    var text_top = document.getElementById(id4)
    var text_middle =document.getElementById(id5)
    var text_bottom = document.getElementById(id6)
    if (click) {
        text_cont.classList.remove("text-cont-before")
        text_top.classList.remove("p1-before")
        text_middle.classList.remove("p2-before")
        text_bottom.classList.remove("p3-before")
        section.classList.remove('section-before')
        text_cont.classList.add("text-cont-after")
        text_top.classList.add("p1-after")
        text_middle.classList.add("p2-after")
        text_bottom.classList.add("p3-after")
        section.classList.add('section-after')
        click = false;
    } else {
        text_cont.classList.remove("text-cont-after")
        text_top.classList.remove("p1-after")
        text_middle.classList.remove("p2-after")
        text_bottom.classList.remove("p3-after")
        section.classList.remove('section-after')
        text_cont.classList.add("text-cont-before")
        text_top.classList.add("p1-before")
        text_middle.classList.add("p2-before")
        text_bottom.classList.add("p3-before")
        section.classList.add('section-before')
        click = true;
    }
    console.log(click)
}

