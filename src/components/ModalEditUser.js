import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { putUpdateUser } from "../services/UserService";
import { toast } from "react-toastify"

const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit, handleEditUserFormModal } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleEditUser = async () => {
    let res = await putUpdateUser(name, job);
    console.log("checkres", res);
    if (res) {
      //success
      handleEditUserFormModal({
        first_name: name,
        id: dataUserEdit.id,
      });

      handleClose();
      toast.success("update user success")
    }
  }
  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
    }
  }, [dataUserEdit])
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              <div className="form-group">
                <label >Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />

              </div>
              <div className="form-group">
                <label >Job</label>
                <input
                  type="text"
                  className="form-control"
                  value={job}
                  onChange={(event) => setJob(event.target.value)}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalEditUser;