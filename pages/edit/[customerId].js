import CustomerEditPage from "@/components/templates/CustomerEditPage";
import { useRouter } from "next/router";
import useFetchCustomerData from "@/utils/fetchCustomerData";

const Index = () => {
  const router = useRouter();

  const {
    query: { customerId },
    isReady,
  } = router;

  const data = useFetchCustomerData(customerId, isReady);

  return (
    <div>
      <CustomerEditPage data={data} id={customerId} />
    </div>
  );
};

export default Index;
