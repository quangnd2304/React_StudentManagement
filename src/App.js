import './App.css';
import ListStudent from './components/ListStudent';
import Control from './components/Control';
import Form from './components/Form';
import { Component } from 'react';

class App extends Component {
  // Khởi tạo state để lưu trữ thông tin danh sách sinh viên
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Linh Gucci", age: 20, sex: false, birthDate: "2003-04-25", birthPlace: "HN", address: "1, Mễ Trì, Hà Nội" },
        { studentId: "SV002", studentName: "Đinh Quốc Quân", age: 22, sex: true, birthDate: "2001-11-18", birthPlace: "ĐN", address: "47, Phạm Văn Đồng" },
        { studentId: "SV003", studentName: "Tiến bịp", age: 23, sex: true, birthDate: "2000-09-09", birthPlace: "HP", address: "5, Mạc Đĩnh Chi" }
      ],
      search: "",
      sortDir: "",
      sortBy: ""
    }
  }
  receiveSearchData = (searchData) => {
    // Hàm nhận giá trị search từ Control --> App --> cập nhật vào state (search)
    this.setState({
      search: searchData
    })
  }
  receiveSortData = (sortDir, sortBy) => {
    // Hàm nhận giá trị sort từ Control-->App
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy
    })
  }
  render() {
    // Lọc dữ liệu state (students)
    let listStudentShow = "";
    if (this.state.search == "") {
      listStudentShow = [...this.state.students];
    } else {
      // lọc
      listStudentShow = this.state.students.filter(st => {
        if (st.studentName.toLowerCase().includes(this.state.search.toLowerCase())) {
          return st;
        }
      })
    }
    // Thực hiện sắp xếp
    if (this.state.sortDir != "") {
      if (this.state.sortDir == "studentName") {
        // Sắp xếp theo tên sinh viên
        if (this.state.sortBy == "ASC") {
          // Sắp xếp theo tên sinh viên tăng dần
          listStudentShow.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0);
        } else {
          // Sắp xếp theo tên sinh viên giảm dần
          listStudentShow.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0);
        }
      } else {
        // Sắp xếp theo tuổi sinh viên
        if (this.state.sortBy == "ASC") {
          // Sắp xếp theo tuổi sinh viên tăng dần
          listStudentShow.sort((a, b) => a.age - b.age);
        } else {
          // Sắp xếp theo tuổi sinh viên giảm dần
          listStudentShow.sort((a, b) => b.age - a.age);
        }
      }
    }
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control search={this.receiveSearchData} sort={this.receiveSortData} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent students={listStudentShow} />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <Form />
        {/* END FORM SINH VIÊN */}
      </div>

    );
  }
}

export default App;
