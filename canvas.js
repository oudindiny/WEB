const canvas = document.getElementById("JScanvas");
const ct = canvas.getContext("2d");
const colors = document.getElementsByClassName("JScolor");
const saveBtn = document.getElementById("JSsave");
const range = document.getElementById("JSrange");

canvas.width = 500;
canvas.height = 400;


ct.strokeStyle = "#000000"; /*라인 컬러 (검정) 기본값 */
ct.lineWidth = 2.5; /*라인 굵기 기본값 */



let painting = false;

function stopPainting() {
    painting = false;
}
function startPainting() {
    painting = true;
}
function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    if (!painting) {
        ct.beginPath();
        ct.moveTo(x, y);
    }else{
        ct.lineTo(x, y);
        ct.stroke();
    }
}
function onMouseDown(e) {
    painting = true;
}
if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', colorClick);
    
}


function colorClick(e) {/*라인 컬러 변경 함수 target 받아서 넣기 */
    const color = e.target.style.backgroundColor;
    ct.strokeStyle = color;
}
Array.from(colors).forEach(color => /*Array 를 만들고 forEach로 모든 컬러 호출*/
    color.addEventListener("click" , colorClick));



function rangeChange(e) {
    const size = e.target.value;
    ct.lineWidth = size;
}
    
if(range){
    range.addEventListener("input", rangeChange);
}

if (saveBtn){
    saveBtn.addEventListener("click", saveClick);
}
function saveClick() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[EXPORT]";
    link.click();
}  
