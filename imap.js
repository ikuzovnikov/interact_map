let svgstyles = document.querySelectorAll('.hidden');
let p = document.querySelector ("p");

for (let svgstyle of svgstyles)
    {
    svgstyle.onmouseover = function () 
        {
            svgstyle.classList.toggle('hidden');
        };
    svgstyle.onmouseout = function () 
        {
            svgstyle.classList.toggle('hidden');
        };
    svgstyle.onclick = function () 
        {
            p.textContent = "Нажато " + svgstyle.id;
            viewimage.src = "image/"+svgstyle.id+".png";
            viewimage.alt = svgstyle.id;
        };
    };
     