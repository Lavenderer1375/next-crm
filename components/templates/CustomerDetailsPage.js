import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomersDetailsPage = ({ data }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    try {
      const response = await fetch(`/api/delete/${data._id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.status === "Success") router.push("/");
    } catch (error) {
      console.error("Error deleting customer:", error.message);
    }
  };
  return (
    <div className="customer-detail">
      <h4>Customer's Details</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name:</span>
          <p>{data.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>Last Name:</span>
          <p>{data.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Email:</span>
          <p>{data.email}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone:</span>
          <p>{data.phone}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address:</span>
          <p>{data.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>Postal Code:</span>
          <p>{data.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date:</span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <h4>Products:</h4>
      <div className="customer-detail__products">
        <p>Name:</p>
        <p>Price:</p>
        <p>Quantity:</p>
        {data?.products.map((product, index) => (
          <React.Fragment key={index}>
            <p>{product.name}</p>
            <span>{product.price}</span>
            <span>{product.quantity}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <p>Edit or Delete</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${data._id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default CustomersDetailsPage;
