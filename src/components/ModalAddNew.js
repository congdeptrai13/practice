import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { postCreateUser } from "../services/UserService";
import { toast } from "react-toastify"
const ModalAddNew = (props) => {
  const { handleUpdateTable, show, handleClose } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleSaveUser = async () => {
    let res = await postCreateUser(name, job)
    console.log("check res", res)
    if (res && res.id) {
      //success
      handleClose();
      setName("");
      setJob("");
      toast.success("A user is created success");
      handleUpdateTable({ first_name: name, id: res.id })
    }
    else {
      //error
      toast.error("A error...");
    }
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
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
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalAddNew;