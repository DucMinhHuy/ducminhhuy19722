let arr=[];

function addNewElement() {
    //lay phan tu
    let newE = +document.getElementById("number").value;
    //them moi vao mang
    arr.push(newE);
    show();
    document.getElementById("number").value = "";
    document.getElementById("number").focus();
}

function show(){
    let result = "";
    for (let i = 0; i <arr.length ; i++) {
        result+= arr[i] + ",";
    }
    document.getElementById("result").innerText = result;
}
function check() {
    //b1: nhap du lieu
    let number = +prompt("Moi nhap so can kiem tra")
    //b2: kiem tra xem co trong mang hay khong
    let index=-1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==number){
            index=i;
            break;
        }

    }
    //b3: show ket luan
    if (index>-1){
        alert(number + "o vi tri thu "+ index);
    }
    else {
        alert(number + " khong co trong mang");
    }
}