let hidemap = document.querySelector(".hidemap");
let imap = document.querySelector(".imap");
hidemap.onclick = function () 
{
    if (imap.style.display === "none") 
    {
        imap.style.display = "block";
        hidemap.textContent = "Скрыть карту"
    }   else 
        {
        imap.style.display = "none";
        hidemap.textContent = "Показать карту"
        }
};


let svgstyles = document.querySelectorAll('svg .hidden');
let p = document.querySelector ("p");
let tooltip = document.getElementById('tooltip');

for (let svgstyle of svgstyles)
{
    svgstyle.onmouseover = function () 
    {
        svgstyle.classList.toggle('hidden');
        tooltip.textContent = svgstyle.dataset.hint;
        tooltip.style.display = "inline";
    };
        
    svgstyle.onmousemove = function (e)
    {   
        tooltip.style.left = event.pageX + 5 + "px";
        tooltip.style.top = event.pageY + 5 + "px";
    };
    svgstyle.onmouseout = function () 
    {
        svgstyle.classList.toggle('hidden');
        tooltip.style.display = "none"
    };
    svgstyle.onclick = function () 
    {
        viewimage.src = "image/"+svgstyle.id+".png";
        viewimage.alt = svgstyle.dataset.hint;
        p.textContent = svgstyle.dataset.hint;
    };
};

