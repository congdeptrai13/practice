const Home = (props) => {
  return (
    <>
      <div className="home-container">


        Yêu cầu:
        <br />
        <p>
          Sử dụng API  từ trang web https://reqres.in/ để  tạo website.
        </p>
        <ul>
          Sử dụng thư viện React để tạo một màn hình website cơ bản bao gồm các chức năng:
        </ul>
        <li>       1.       Đăng nhập</li>
        <li>
          2.       Thêm User
        </li>
        <li>   3.       Sửa User</li>
        <li>   4.       Xoá User</li>
        <li>5.       Hiển thị tất cả các User</li>
        <li> 6.       Tìm kiếm User theo Id</li>
        <li>  7.       Sắp xếp theo FirstName</li>
        <li> 8.       Import User từ file .csv</li>
        <li>9.       Export User ra file .csv</li>
        <p>
          Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và đẹp.
          Commit và đẩy source code lên github public.
          Triển khai website lên Heroku để demo.
        </p>
        <p>
          <b>Result: </b>
          Thời gian hoàn thành: 1-3 ngày
          Gửi link Heroku và Github link lại email này
          Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi.
        </p>
        <p>Yêu cầu backend (optional - không bắt buộc):
          Sử dụng python django rest framework, tạo các api như trên trang web: https://reqres.in/</p>
      </div>
    </>
  )
}
export default Home;