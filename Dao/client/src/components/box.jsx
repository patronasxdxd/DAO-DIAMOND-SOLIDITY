import { BoxContext } from "../context/BoxContext";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";


const TransactionsCard = ({ timestamp, message, amount }) => {

  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          {/* <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a> */}

          <p className="text-white text-base">Amount: {amount}</p>

          {message && (
            <>
              <br />
              <p className="text-white text-base">Description: {message}</p>
            </>
          )}
        </div>
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};




const Box = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  const { boxvalues, structArray,timevalue,getTime,durationvalues,isProposalActive } = useContext(BoxContext);



  return (



    <div className="flex w-full justify-center items-center 2xl:px-20 my-20 gradient-bg-transactions" style={{ borderWidth: '4px', borderColor: 'black' }}>
      <div className="flex flex-col md:p-12 py-12 px-4">
      {isProposalActive ? (
        <div>
          <h3 className="text-white text-3xl text-center my-2">
            Blocks left until voting period ended: {durationvalues} <br />
            Votes casted: {timevalue} <br /><br />
          </h3>
        </div>
      ) : (
        <div>
          {/* Display something else when the proposal is not active */}
        </div>
      )}
        {true ? (




          

          <h3 className="text-white text-3xl text-center my-2">

            Current Value: {boxvalues} <br></br>            Connect your Wallet and propose a new Value!

          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <h2></h2>

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...structArray].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>

  );
};


export default Box;
