import Card from "../modules/Card";

const HomePage = ({ customers }) => {

  return (
    <div>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
};

export default HomePage;
