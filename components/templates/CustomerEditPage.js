import { useState, useEffect } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import moment from "moment";

const CustomerEditPage = ({ data }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    products: [],
    date: "",
  });

  // Sync form state with data when data is updated
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        lastName: data.lastName || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
        postalCode: data.postalCode || "",
        products: data.products || [],
        date: data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "",
      });
    }
  }, [data]); // Runs whenever `data` changes

  const saveHandler = async () => {
    try {
      const res = await fetch(`/api/edit/${data?._id}`, {
        method: "PATCH",
        body: JSON.stringify({ data: form }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await res.json();
      if (result.status === "Success") router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const cancelHandler = () => {
    router.push("/");
  };

  return (
    <div className="customer-detail">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default CustomerEditPage;

// import { useState } from "react";
// import Form from "../modules/Form";
// import { useRouter } from "next/router";
// import moment from "moment";

// const CustomerEditPage = ({ data }) => {
//   console.log("data log in CustomerEditPage", data);
//   const Date = data?.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
//   const router = useRouter();
//   const [form, setForm] = useState({
//     name: data?.name,
//     lastName: data?.lastName,
//     email: data?.email,
//     phone: data?.phone || "",
//     address: data?.address || "",
//     postalCode: data?.postalCode || "",
//     products: data?.products || [],
//     date: Date,
//   });

//   const saveHandler = async () => {
//     try {
//       const res = await fetch(`/api/edit/${data._id}`, {
//         method: "PATCH",
//         body: JSON.stringify({ data: form }),
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       if (data.status === "Success") router.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const cancelHandler = () => {
//     router.push("/");
//   };

//   return (
//     <div className="customer-detail">
//       <h4>Edit Customer</h4>
//       <Form form={form} setForm={setForm} />
//       <div className="customer-page__buttons">
//         <button className="first" onClick={cancelHandler}>
//           Cancel
//         </button>
//         <button className="second" onClick={saveHandler}>
//           Edit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerEditPage;
