import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", quantity: "" }],
    });
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({
      ...form,
      products: newProducts,
    });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({
      ...form,
      products: newProducts,
    });
  };
  return (
    <div className="item-list">
      <p>Purchased products</p>
      {products.map((product, index) => (
        <ProductItems
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;

function ProductItems({ product, changeHandler, deleteHandler }) {
  return (
    <div className="form-input__list">
      <FormInput
        name="name"
        label="Product Name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
        <FormInput
          name="price"
          label="Price"
          type="text"
          value={product.price}
          onChange={changeHandler}
        />
        <FormInput
          name="quantity"
          label="Quantity"
          type="number"
          value={product.quantity}
          onChange={changeHandler}
        />
      </div>
      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
}
