//bài 1
/**
 * - Đầu vào
 * + lương 1 ngày: 100.000
 * + số ngày làm
 * 
 * - Xử lý
 * + tạo biến luong1Ngay=100.000, soNgayLam 
 * + lấy kết quả số ngày làm người dùng nhập gán vào biến soNgayLam
 * + tính lương: luong= luong1Ngay*soNgayLam
 * + in kết quả ra UI
 * 
 * - Đầu ra
 *  + Tiền lương nhân viên
 */
//Dom toi button#btnBaiTap1
document.getElementById("btnBaiTap1").onclick = function() {
    //Dom toi the soNgayLam lay value
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    var luong1Ngay = 100000;
    //đưa ra số tiền định dạng tiền Việt
    var currentFormat = new Intl.NumberFormat("vn-VN");
    //xử lý
    var tienLuong = soNgayLam * luong1Ngay;
    //show ket qua ra UI
    document.getElementById("divInfo1").innerHTML = "Tiền lương là: " + currentFormat.format(tienLuong);
}

//bài 2
/**
 * - Đầu vào
 * + Nhập 5 số thực
 * 
 * - Xử lý
 * + tạo các biến soThuc1, soThuc2, soThuc3, soThuc4, soThuc5,  trungBinh
 * + lấy kết quả 5 số thực người dùng nhập gán vào lần lượt các biến soThuc
 * + chuyển kiểu dữ liệu của các biến soThuc từ string => float
 * + tính trung bình 5 số trungBinh= (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5 
 * + in kết quả ra UI
 * 
 * - Đầu ra
 *  + Trung bình 5 số thực
 */
//Dom toi button#btnBaiTap2
document.getElementById("btnBaiTap2").onclick = function() {
    //Dom tới các thẻ số thực lấy value
    var soThuc1 = document.getElementById("soThuc1").value;
    var soThuc2 = document.getElementById("soThuc2").value;
    var soThuc3 = document.getElementById("soThuc3").value;
    var soThuc4 = document.getElementById("soThuc4").value;
    var soThuc5 = document.getElementById("soThuc5").value;
    //chuyển kiểu dữ liệu từ string => số thực
    soThuc1 = parseFloat(soThuc1);
    soThuc2 = parseFloat(soThuc2);
    soThuc3 = parseFloat(soThuc3);
    soThuc4 = parseFloat(soThuc4);
    soThuc5 = parseFloat(soThuc5);
    //xử lý
    var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    //show kết quả ra UI
    document.getElementById("divInfo2").innerHTML = "Trung bình 5 số là: " + trungBinh;
}

//bài 3
/**
 * - Đầu vào
 *+ giá usd = 23.500 VND
 *+ nhập số USD cần quy đổi 
 * 
 * - Xử lý
 * + tạo các biến giaUSD, soUSD, soVND
 * + gán giaUSD=23500 VND
 * + lấy số USD người dùng nhập gán vào biến soUSD 
 * + tính giá VND : giaVND= soUSD * soVND 
 * + in kết quả ra UI
 * 
 * - Đầu ra
 *  + số tiền quy đổi VND
 */
//Dom tới button#btnBaiTap3
document.getElementById("btnBaiTap3").onclick = function() {
    var giaUSD = 23500;
    //Dom tới input lấy giá trị số USD
    var soUSD = document.getElementById("soUSD").value;
    // chuyển kiểu dữ liệu string => float
    soUSD = parseFloat(soUSD);
    var soVND = soUSD * giaUSD;
    //đưa ra số tiền định dạng tiền Việt
    var currentFormat = new Intl.NumberFormat("vn-VN");
    // var result = "Số tiền sau quy đổi: " + soVND;
    document.getElementById("divInfo3").innerHTML = "Số tiền sau quy đổi: " + currentFormat.format(soVND) + " VND";
    console.log(soVND);
}

//bài 4
/**
 * - Đầu vào
 * + nhập chiều dài
 * + nhập chiều rộng
 * 
 * - Xử lý
 * + tạo các biên chieuDai, chieuRong, dienTich, chuVi
 * + lấy số đo người dùng nhập gán vào biến chieuDai, chieuRong
 * + tính diện tích : dienTich=chieuDai*chieuRong
 * + tính chu vi : chuVi=(chieuDai+chieuRong)/2
 * + in kết quả ra UI
 * 
 * - Đầu ra
 *  + Diện tích của hình chữ nhật
 *  + Chu vi của hình chữ nhật
 */
//Dom tới button#btnBaiTap5
document.getElementById("btnBaiTap4").onclick = function() {
    //Dom tới các thẻ input lấy giá trị chiều dài và chiều rộng
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    // chuyển kiểu string => float
    chieuDai = parseFloat(chieuDai);
    chieuRong = parseFloat(chieuRong);
    var dienTich = chieuDai * chieuRong;
    console.log(dienTich);
    var chuVi = (chieuDai + chieuRong) * 2;
    var result = "";
    result += "<p>Diện tích : " + dienTich + "</p>";
    result += "<p>Chu vi : " + chuVi + "</p>";
    document.getElementById("divInfo4").innerHTML = result;
}

//bài 5
/**
 * Gia su:
 * n=12 => 1 + 2 = 3
 * n=44 => 4 + 4 = 8
 * 
 * - Đầu vào
 * + nhập số có 2 chữ số
 * - Xử lý
 * + tạo các biến so, hangChuc, hangDonVi, tongKySo
 * + lấy số người dùng nhập gán vào biến so
 * + Tách lấy hàng chục: hangChuc=Math/floor(so/10) 
 * + Tách lấy hàng đơn vị: hangDonVi=so%10
 * + Tổng 2 số hàng chục, dv: tongKySo=hangChuc+hangDonVi
 * + in kết quả ra UI
 * 
 * - Đầu ra: Tổng 2 ký số vừa nhập
 */
//Dom tới button#btnBaiTap5
document.getElementById("btnBaiTap5").onclick = function() {
    //Dom tới thẻ input lấy giá trị người dùng nhập
    var so = document.getElementById("so").value * 1;
    var hangChuc = Math.floor(so / 10);
    var hangDonVi = so % 10;
    var tongKySo = hangChuc + hangDonVi;
    var result = "";
    result += "<p>Tổng 2 ký số vừa nhập: " + tongKySo + "</p>";
    document.getElementById("divInfo5").innerHTML = result;
}