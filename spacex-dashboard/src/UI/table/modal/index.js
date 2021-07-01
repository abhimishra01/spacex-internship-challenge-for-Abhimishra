import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TableModal = (props) => {
  const { mission_name, flight_number, launch_success, details } = props.data;
  // launch status column cell value formatter
  function statusFormatter(value) {
    if (value) {
      return "Success";
    } else if (value === false) return "Failure";
    else return "Upcoming";
  }

  // launch status column styles handler
  function getStatusStyle(value) {
    if (value) {
      return {
        height: "21px",
        width: "10%",
        textAlign: "center",
        textShadow: " -1px 2px 7px green",
      };
    } else if (value === false)
      return {
        textAlign: "center",
        color: "red",
        textShadow: " -1px 2px 7px red",
      };
    else
      return {
        textAlign: "center",
        textShadow: " -1px 2px 7px yellow",
      };
  }
  return (
    <Modal
      key={flight_number}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-evenly",
          }}
          id="contained-modal-title-vcenter"
        >
          <img
            style={{
              height: "100px",
            }}
            src={props.data.links.mission_patch_small}
            alt={"mission-img"}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h2
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "300px",
                  justifyContent: "space-around",
                }}
              >
                {mission_name}
                <span
                  style={{
                    fontSize: 20,
                    color: "green",
                  }}
                >
                  {statusFormatter(launch_success)}
                </span>
              </h2>
              <p
                style={{
                  marginLeft: 30,
                }}
              >
                {props.data.rocket.rocket_name}
              </p>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{details}</p>
        <div
          style={{
            display: "flex",
            width: "20%",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <p>Flight number</p> <span> {flight_number} </span>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TableModal;
