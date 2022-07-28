let a=document.getElementById("rumahh")
let b=document.getElementById("audioNotifikasi")
let c=document.getElementById("rumah-ucapan-2-1")
let d=document.getElementById("rumah-ucapan-2-2")
let e=document.getElementById("rumah-ucapan-2-4")
let f=document.getElementById("rumah-ucapan-2-5")
let g=document.getElementById("rumah-ucapan-2-7")
let h=document.getElementById("rumah-ucapan-2-8")
function hapus(){
    a.style.display = ('none')
}

function nyala(){
    b.play()
}
function buka(){
    c.style.display = ('block')
    d.style.display = ('none')
    
}
function tutup(){
    c.style.display =('none')
    d.style.display =('block')
   
    
}

function buka1(){
    e.style.display =('block')
    f.style.display =('none')
}

function tutup1(){
    e.style.display =('none')
    f.style.display =('block')
}

function buka2(){
    g.style.display =('block')
    h.style.display =('none')
}

function tutup2(){
    g.style.display =('none')
    h.style.display=('block')
}

