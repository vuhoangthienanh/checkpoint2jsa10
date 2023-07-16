const menu = ["rau xào", "thịt luộc", "gà rán"];
let kytu = prompt("Nhập 1 trong 4 ký tự C, R, U, D", "");
if (kytu == "C") {
    let food = prompt("Mời người dùng nhập món ăn muốn thêm vào menu", "");
    localStorage.setItem("food", food);
}
else if (kytu == "R") {
    menu.push(localStorage.getItem("food"));
    alert(menu);
}
else if (kytu == "U") {
    let update = prompt("Mời người dùng nhập vào tên món muốn update", "");
    let menuUpdate = menu.indexOf(update);
    Number(menuUpdate);
    const updateMenu = menu.slice(menuUpdate);
    let updateFood = prompt("Mời người dùng nhập vào tên món ăn mới");
    localStorage.setItem("updateFood", updateFood);
    updateMenu.push(localStorage.getItem("updateFood"));
    alert(updateMenu);
}
else if (kytu == "D") {
    let Delete = prompt("Mời người dùng nhập vào tên món muốn Delete");
    let menuDelete = menu.indexOf(Delete);
    Number(menuDelete);
    const deleteMenu = menu.slice(menuDelete);
    alert(deleteMenu);
}
else {
    alert("Nhập lại đúng ký tự");
}