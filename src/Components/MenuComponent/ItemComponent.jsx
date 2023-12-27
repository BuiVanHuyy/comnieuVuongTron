import PropTypes from "prop-types";

ItemComponent.propTypes = {
    val: PropTypes.array,
};

function ItemComponent({ val }) {
    return (
        <ul className="dish_list p-0 d-flex justify-content-between flex-wrap">
            {val.map((item, i) => (
                <li key={i} className="col-12 col-md-6 mt-2 px-3 list-unstyled text-start d-flex justify-content-between">
                    <span className="name text-start">{item.name}</span>
                    <span className="price text-end">{item.price.toLocaleString("en")}</span>
                </li>
            ))}
        </ul>
    );
}

export default ItemComponent;
