let sinhvien = new Sinhvien("truong");
let sinhvienManager  = new SinhvienManager();


        function showAll() {
        document.getElementById("tbl-sinhvien ").innerHTML = sinhvienManager.getAllSinhvien();
        }
        function  getElementValue(id) {
            return document.getElementById(id + '-sinhvien').value;
        }
      function addSinhVien(){
        let id = getElementValue("id");
        let name = getElementValue("name");
        let date = getElementValue("date");
        let lop = getElementValue("lop");
        let diem= getElementValue("diem");
        let img = getElementValue("img");

        let sinhvien = new Sinhvien(id,name,date,lop,diem,img);
        sinhvienManager.addSinhvien(sinhvien);
        showAll();
        document.write(hi);
    }
