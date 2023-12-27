import { Modal, Table, ToastContainer } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../../utils/AppContext";
import { FaPlus, FaTrash } from "react-icons/fa";

LikeListComponent.propTypes = {
    LikeListShow: PropTypes.bool,
    setLikeListShow: PropTypes.func,
};

function LikeListComponent({ LikeListShow, setLikeListShow }) {
    const { likeList, setLikeList, handleAddToCart } = useContext(Context);
    const handleDel = (name) => {
        setLikeList(likeList.filter((element) => element.name !== name));
    };
    return (
        <Modal
            scrollable={true}
            size="lg"
            show={LikeListShow}
            onHide={() => {
                setLikeListShow(false);
            }}
        >
            <Modal.Header className="pb-0" style={{ borderBottom: "none" }} closeButton>
                <Modal.Title id="LikeListTitle">Đanh sách các món yêu thích của bạn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {likeList.length > 0 ? (
                    <Table className="text-center" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Tên món</th>
                                <th>Giá</th>
                                <th>Gọi món</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {likeList.map((val, i) => (
                                <tr className="noselect" key={i}>
                                    <td>
                                        <span>{val.name}</span>
                                    </td>
                                    <td>{val.price.toLocaleString("vi") + " ₫"}</td>
                                    <td>
                                        <button
                                            style={{
                                                border: "none",
                                                padding: "3px 10px",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                pointerEvents: "visible",
                                                cursor: val.isSoldOut ? "not-allowed" : "pointer",
                                            }}
                                            className={val.isSoldOut ? "bg-secondary" : "bg-primary"}
                                            onClick={() => (!val.isSoldOut ? handleAddToCart(val, "") : undefined)}
                                        >
                                            <FaPlus />
                                        </button>
                                    </td>
                                    <td style={{ cursor: "pointer" }}>
                                        <button
                                            className="bg-danger"
                                            style={{
                                                border: "none",
                                                padding: "3px 10px",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                pointerEvents: "visible",
                                            }}
                                            onClick={() => handleDel(val.name)}
                                        >
                                            <FaTrash id="cartDelBtn" style={{ transition: "0.5s" }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <h4 className="text-center py-5">Danh sách yêu thích của bạn đang trống.</h4>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default LikeListComponent;
