import React, { Component } from 'react';

class Control extends Component {
    // Khởi tạo state chứa dữ liệu của component Control
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.search(this.state.search);
    }
    handleSort = (e) => {
        let value = e.target.value;
        let arrSort = value.split("-");
        this.props.sort(arrSort[0], arrSort[1]);
    }
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text">
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                name="search"
                                onChange={this.handleChange}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" name='sort' onChange={this.handleSort}>
                            <option value="">Sắp xếp</option>
                            <option value="studentName-ASC">Tên tăng dần</option>
                            <option value="studentName-DESC">Tên giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DESC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;