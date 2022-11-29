class tablePoint{
    constructor(
        name, date, diem1, diem2, diem3, diem4, diem5, diem6, avg, rank,sum
    ) {
        this.name = name;
        this.date = date;
        this.diem1 = diem1;
        this.diem2 = diem2;
        this.diem3 = diem3;
        this.diem4 = diem4;
        this.diem5 = diem5;
        this.diem6 = diem6;
        this.avg = avg;
        this.rank = rank;
        this.sum = sum;
    }
    getName(){
        return this.name;
    }

    setName(value){
        this.name = value;
    }

    getDate(){
        return this.date;
    }

    setDate(value){
        this.date = value;
    }

    getDiem1(){
        return this.diem1;
    }

    setDiem1(value){
        this.diem1 = value;
    }
    getDiem2(){
        return this.diem2;
    }

    setDiem2(value){
        this.diem2 = value;
    }
    getDiem3(){
        return this.diem3;
    }

    setDiem3(value){
        this.diem3 = value;
    }
    getDiem4(){
        return this.diem4;
    }

    setDiem4(value){
        this.diem4 = value;
    }
    getDiem5(){
        return this.diem5;
    }

    setDiem5(value){
        this.diem5 = value;
    }
    getDiem6(){
        return this.diem6;
    }

    setDiem6(value){
        this.diem6 = value;
    }
    getAvg(){
        return this.avg;
    }

    setAvg(value){
        this.avg = value;
    }

    getRank(){
        return this.rank;
    }

    setRank(value){
        this.rank = value;
    }
    getSum(){
        return this.sum;
    }

    setSum(value){
        this.sum = value;
    }
}
    let pointarr =[];

    function display(){
        let result = "";
        result += "<table id='table2'>"+
            "<tr>" +
                "<th>STT</th>"+
                "<th>Họ và tên</th>"+
                "<th>Ngày sinh</th>"+
                "<th>Toán</th>"+
                "<th>Lý</th>"+
                "<th>Hóa</th>"+
                "<th>Ngữ Văn</th>"+
                "<th>Sinh Học</th>"+
                "<th>Ngoại Ngữ</th>"+
                "<th>Tổng điểm</th>"+
                "<th>Điểm Trung Bình</th>"+
                "<th>Xếp loại</th>"+
                "<th colspan='2'>Trạng thái</th>"+
            "</tr>"
        for (let i =0 ;i <pointarr.length;i++){
            result += "<tr>"+
                            "<td>"+(i+1)+"</td>"+
                            "<td>"+pointarr[i].getName()+"</td>"+
                            "<td>"+pointarr[i].getDate()+"</td>"+
                            "<td>"+pointarr[i].getDiem1()+"</td>"+
                            "<td>"+pointarr[i].getDiem2()+"</td>"+
                            "<td>"+pointarr[i].getDiem3()+"</td>"+
                            "<td>"+pointarr[i].getDiem4()+"</td>"+
                            "<td>"+pointarr[i].getDiem5()+"</td>"+
                            "<td>"+pointarr[i].getDiem6()+"</td>"+
                            "<td>"+pointarr[i].getSum()+"</td>"+
                            "<td>"+pointarr[i].getAvg()+"</td>"+
                            "<td>"+pointarr[i].getRank()+"</td>"+
                            "<td><button onclick='EXIT(" + i + ")'>Edit</button></td>" +
                            "<td><button onclick='DELETE(" + i + ")'>Delete</button></td>" +
                     "</tr>"
        }
        result += "</table>";
        document.getElementById('show').innerHTML = result;
    }

    function add(){
        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;
        let diem1 = +document.getElementById('diem1').value;
        let diem2 = +document.getElementById('diem2').value;
        let diem3 = +document.getElementById('diem3').value;
        let diem4 = +document.getElementById('diem4').value;
        let diem5 = +document.getElementById('diem5').value;
        let diem6 = +document.getElementById('diem6').value;
        let sum = diem1 + diem2 + diem3 + diem4 + diem5 + diem6;
        let avg = (sum/6).toFixed(2);
        document.getElementById('avg').innerHTML = avg ;
        let rank = "";
        if ((10<avg)||(avg<0)) {
            alert('Nhập sai điểm. Hãy nhập lại');
            return;
        }else if (8<=avg){
            rank ="Giỏi";
        }else if(6.5<=avg){

            rank = "Khá";
        }else if(5<=avg){
            rank = "TB";
        }else if(3<=avg){
            rank = "Yếu";
        }else if((0<=avg)&&(avg<3)){
            rank = "Kém"
        }
        let data1 = new tablePoint(name, date, diem1, diem2, diem3, diem4, diem5, diem6, avg, rank,sum);
        pointarr.push(data1);
        display();
    }
    function EXIT(index){
        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;
        let diem1 = +document.getElementById('diem1').value;
        let diem2 = +document.getElementById('diem2').value;
        let diem3 = +document.getElementById('diem3').value;
        let diem4 = +document.getElementById('diem4').value;
        let diem5 = +document.getElementById('diem5').value;
        let diem6 = +document.getElementById('diem6').value;
        let sum = diem1 + diem2 + diem3 + diem4 + diem5 + diem6;
        let avg = (sum/6).toFixed(2);
        document.getElementById('avg').innerHTML = avg ;
        let rank = "";
        if ((10<avg)||(avg<0)) {
            alert('Nhập sai điểm. Hãy nhập lại');
            return;
        }else if (8<=avg){
            rank ="Giỏi";
        }else if(6.5<=avg){
            rank = "Khá";
        }else if(5<=avg){
            rank = "TB";
        }else if(3<=avg){
            rank = "Yếu";
        }else if((0<=avg)&&(avg<3)){
            rank = "Kém"
        }
        let data2 = new tablePoint(name, date, diem1, diem2, diem3, diem4, diem5, diem6, avg, rank,sum);
        pointarr[index] = data2;
        display();
    }
    function DELETE(index) {
    pointarr.splice(index, 1);
    display()
}
    let username = localStorage.getItem("username")
    function checkAdmin() {
        let data = ""
        if (username === null) {
        data += "<div id='admin' style='color: white'><a href='Login.html'>Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin' style='color: white'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='Login.html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}
    function logout() {
        localStorage.clear()
}