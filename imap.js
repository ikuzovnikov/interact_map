
//Часть скрипта для показа/скрытия карты через display = none
let hidemap = document.querySelector(".hidemap");
let imap = document.querySelector(".imap");
hidemap.onclick = function () 
{
    if (imap.style.display === "none") 
    {
        imap.style.display = "block";
        hidemap.textContent = "Скрыть карту";
    }   else 
        {
        imap.style.display = "none";
        hidemap.textContent = "Показать карту";
        };
};

//Часть скрипта для работы с .svg, задаем переменные svgstyles - все слои с классом hidden, p - подпись сверху для информации о текущем помещении, tooltip - всплывающая подсказка
let svgstyles = document.querySelectorAll('svg .hidden');
let p = document.querySelector ("p");
let tooltip = document.getElementById('tooltip');
//перебор всех элементов (слоев) .svg с классом hidden
for (let svgstyle of svgstyles)
{
//при наведении мыши на область на элемент (слой) удаляем класс hidden    
    svgstyle.onmouseover = function () 
    {
        svgstyle.classList.toggle('hidden');
        tooltip.textContent = svgstyle.dataset.hint;
        tooltip.style.display = "inline";
    };
//меняем CSS для tooltip (всплывающей подсказки) для следования всплывающего окна за курсором внутри конкретного элемента(слоя) .svg       
    svgstyle.onmousemove = function (e)
    {   
        tooltip.style.left = event.pageX + 5 + "px";
        tooltip.style.top = event.pageY + 5 + "px";
    };
//прячем элемент(слой) подсветки конкретного помещения внутри .svg когда курсор уходит с него
    svgstyle.onmouseout = function () 
    {
        svgstyle.classList.toggle('hidden');
        tooltip.style.display = "none"
    };
//меняем изображение при клике на конкретный элемент(слой) из тех, что в .svg
    svgstyle.onclick = function () 
    {
        viewimage.src = "image/"+svgstyle.id+".png"; //картинки или другие объекты называем также как и слои при создании .svg в фотошопе
        viewimage.alt = svgstyle.dataset.hint;
        p.textContent = svgstyle.dataset.hint;
    };
};

