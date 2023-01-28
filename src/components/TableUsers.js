import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { fetchAllUser } from "../services/UserService"
import ReactPaginate from 'react-paginate';
const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    //call apis
    //dry
    getUsers(1);
  }, [])
  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data)
      setTotalUsers(res.total);
    setListUsers(res.data);
    setTotalPages(res.total_pages);
  }
  // console.log("check list user", listUsers);
  const handlePageClick = (event) => {
    console.log(event);
    getUsers(+event.selected + 1);
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              )
            })}

        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  )
}
export default TableUsers