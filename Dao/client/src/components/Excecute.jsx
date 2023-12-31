import React, { useContext } from "react";
import { BoxContext } from "../context/BoxContext";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChangeExecute }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChangeExecute(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Excecute = () => {

  const { currentAccount, connectWallet, handleChangeVote, sendTransaction, formData, isLoading, propose, vote, voteData, execute, handleChangeExecute, proposalId, voteTime, isLoadingExecute } = useContext(BoxContext);

  const handleSubmit = (e) => {

    e.preventDefault();



    execute();
  };



  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">


      {proposalId === 4
        ? <span class="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">Queue now
          <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </span>
        : (
          <h2 >



          </h2>
        )}

      {proposalId === 5
        ? <span class="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">Execute now
          <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </span>
        : (
          <h2 >



          </h2>
        )}



      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center" style={{ backgroundColor: 'brown', borderWidth: '4px', borderColor: 'black',borderRadius: '10px' }} >
      <h2 className="text-black text-3xl sm:text-3xl font-bold text-base text-center mx-2 m-6"> Queue & Execute </h2>
          




        {isLoadingExecute
          ? <Loader />
          : (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-black text-2xl sm:text-2xl w-full mt-2 border-[3px] p-2 border-solid border-black hover:bg-black hover:text-white rounded-md cursor-pointer"
              >
              Execute
            </button>
          )}


      </div>






    </div>
  );



};

export default Excecute;
