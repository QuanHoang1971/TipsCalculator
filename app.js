function getEle(id) {
  return document.getElementById(id);
}

function calculateTip() {
  var tongBill = getEle("billamt").value;
  var haiLongVaTip = getEle("serviceQual").value;
  var soNguoiShare = getEle("peopleamt").value;
  // lấy giá trị mà ng dùng sẽ nhập vào

  //Validation
  if (tongBill === "" || haiLongVaTip == 0) {
    alert(" Vui lòng chọn giá trị");
    return;
    // kiểm tra xem đã nhập thông tin vào chưa
  }

  //Kiểm tra có nhập vào số người share tip hay không
  if (soNguoiShare === "" || soNguoiShare <= 1) {
    soNguoiShare = 1;
    // x1 luôn là nó, ko nhập vào thì peopleamt.value ko có giá trị
    // phải để default là 1, để chia ở dưới ko bị lỗi
    getEle("each").style.display = "none";
  } else {
    getEle("each").style.display = "block";
    // hiển thị dạng khối để nhập soNguoiShare vào
  }

  //Tính toán
  var tongTip = (tongBill * haiLongVaTip) / soNguoiShare;
  //   tongBill *  số tiền %  sẽ tips
  // làm tròn đến phần thập phân có 2 chữ số
  tongTip = Math.round(tongTip * 100) / 100;
  //   công thức là thế
  tongTip = tongTip.toFixed(2);
  //Đảm bảo lúc nào cũng có 2 chữ số ở phần thập phân
  //   fixed đến 2 kí tự

  //Hiển thị vùng div tiền tip
  getEle("totalTip").style.display = "block";
  getEle("tip").innerHTML = tongTip;
}

//Hiển thị vùng div tiền tip
getEle("totalTip").style.display = "none";
getEle("each").style.display = "none";
// ban đầu chưa có tổng bill j cả nên ko hiện ra

getEle("calculate").onclick = function () {
  calculateTip();
};
