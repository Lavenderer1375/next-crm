import CustomersDetailsPage from "@/components/templates/CustomerDetailsPage";
import { useRouter } from "next/router";
import useFetchCustomerData from "@/utils/fetchCustomerData";

const Index = () => {
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  const data = useFetchCustomerData(customerId, isReady);

  if (data) {
    return <CustomersDetailsPage data={data}/>;
  }
};

export default Index;
