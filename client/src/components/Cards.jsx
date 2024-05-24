import Card from "./Card";
import { useQuery } from "@apollo/client";
import { getTransactions } from "../graphql/queries/transaction.query.js";

const Cards = () => {
  const { data, loading, error } = useQuery(getTransactions);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-full px-10 min-h-[40vh]">
      <p className="text-5xl font-bold text-center my-10">History</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20">
        {!loading &&
          data &&
          data?.transactions?.map((transaction) => {
            return <Card key={transaction._id} transaction={transaction} />;
          })}
      </div>
      {!loading && data && data?.length === 0 && (
        <p>There is no transactions in the history!</p>
      )}
    </div>
  );
};
export default Cards;
