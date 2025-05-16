import React, { useEffect, useState } from 'react';
import {HashLink} from 'react-router-hash-link'
const Play = ({ player, computer }) => {
  const [imageIndexes, setImageIndexes] = useState([]);
  const [userValue, setUserValue] = useState(1);
  const [computerValue, setComputerValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [computerRolling, setComputerRolling] = useState(false);
const [playerindex,setPlayerindex]=useState(0)
const [computerindex,setComputerindex]=useState(0)
const [count,setCount]=useState(0)
let finalUserValue=0;
let finalUsersValue=0;
  const rollDice = () => {
    if (rolling || computerRolling) return;
    setRolling(true);

    const userInterval = setInterval(() => {
    let k=Math.floor(Math.random() * 6) + 1
      setUserValue(k);
    }, 100);

    setTimeout(() => {
      clearInterval(userInterval);
       finalUserValue = Math.floor(Math.random() * 6) + 1;
      setUserValue(finalUserValue);
      setPlayerindex(( imageIndexes.includes(playerindex+finalUserValue) || playerindex+finalUserValue>63  || computerindex+finalUsersValue===63 ) ? playerindex:playerindex+finalUserValue)
      setRolling(false);

      // Start computer roll after 0.5s
      
        setComputerRolling(true);
        const computerInterval = setInterval(() => {
          setComputerValue(Math.floor(Math.random() * 6) + 1);
        }, 100);

        setTimeout(() => {
          clearInterval(computerInterval);
           finalUsersValue = Math.floor(Math.random() * 6) + 1;
          setComputerValue(finalUsersValue);
          setComputerindex((imageIndexes.includes(computerindex+finalUsersValue) || computerindex+finalUsersValue>63 || playerindex+finalUserValue===63) ? computerindex:computerindex+finalUsersValue)
          setComputerRolling(false);
        }, 1000);
      
    }, 1000);
  };

  useEffect(() => {
  if(count===0){
    const generate = () => {
      const positions = [];

      for (let row = 0; row < 8; row++) {
        const usedCols = new Set();
        const forbiddenCols = new Set();
        if (row === 0) forbiddenCols.add(0);
        if (row === 7) forbiddenCols.add(7);

        while (usedCols.size < 2) {
          const col = Math.floor(Math.random() * 8);
          const index = row * 8 + col;

          if (
            !forbiddenCols.has(col) &&
            !usedCols.has(col) &&
            !usedCols.has(col - 1) &&
            !usedCols.has(col + 1)
          ) {
            usedCols.add(col);
            positions.push(index);
          }
        }
      }

      setImageIndexes(positions);
      setCount(1);
    };

    generate();
    }
  }, [count]);

  return (
    <div className="w-full my-10 justify-center flex items-center flex-col">
      <div className="grid grid-rows-8 gap-px w-80 h-80 bg-white">
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="grid grid-cols-8">
            {Array.from({ length: 8 }).map((_, col) => {
              const index = row * 8 + col;
              const hasImage = imageIndexes.includes(index);
              return (
                <div
                  key={col}
                  className="bg-gray-900 flex justify-start   border border-gray-300 overflow-x-scroll text-center"
                >
                {
                  !hasImage && playerindex!=index && computerindex!=index && <>
                  <h1 className=" text-center font-bold text-slate-300 text-xs">{index+1}</h1>
                  </>
                }
                  {hasImage && (
                    <img
                      src="Piggies/Pig.jpeg"
                      alt="random"
                      className="w-10 h-9.5"
                    />
                  )}
            {
              playerindex===index && 
             <img
                      src={player}
                      alt="random"
                      className="w-10 h-9.5"
                    />
            }
                        {
              computerindex===index && 
             <img
                      src={computer}
                      alt="random"
                      className="w-10 h-9.5"
                    />
            }
                </div>
              );
            })}
          </div>
        ))}
      </div>
{ playerindex!=63 && computerindex!=63 && <>
      {/* Dice display */}
      <div className="flex gap-8 mt-2">
        {/* User Dice */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-2">Player</span>
        <div className="w-full flex items-center justify-center">
        <img src={player} className="w-12 h-12 rounded-md transition duration-300 ease-in-out transform hover:scale-105" />
        </div>
          <div
            className={`w-24 h-24 my-2 bg-white text-4xl font-bold flex items-center justify-center rounded-lg shadow-md transition-transform duration-300 ${
              rolling ? 'animate-spin' : ''
            }`}
          >
            {userValue}
          </div>
        </div>

        {/* Computer Dice */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-2">Computer</span>
                  <div className="w-full flex items-center justify-center">
        <img src={computer} className="w-12 h-12 rounded-md transition duration-300 ease-in-out transform hover:scale-105" />
        </div>
          <div
            className={`w-24 h-24 my-2 bg-white text-4xl font-bold flex items-center justify-center rounded-lg shadow-md transition-transform duration-300 ${
              computerRolling ? 'animate-spin' : ''
            }`}
          >
            {computerValue}
          </div>
        </div>
      </div>

      {/* Roll Button */}
{!(rolling || computerRolling) && (
  <button
    onClick={rollDice}
    className="mt-6 px-4 font-bold py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Roll Dice
  </button>
)}
      </>
      }
      {
       ( playerindex===63 || computerindex===63 )
       &&
       <>
       <h1 className="my-4 text-center font-bold text-xl">Winner is {playerindex==63?"Player":"Computer"}
       </h1>
      <div className="w-full flex justify-center items-center">
      <img src={playerindex==63?player:computer} className="w-24 rounded-md h-24 transition duration-300 ease-in-out transform hover:scale-105" />
      </div>
       <div className="w-full mt-10 flex justify-center items-center gap-8">   
      <button
        onClick={()=>{
          window.location.reload()
        }
        }
        className="px-4 font-bold py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Restart
      </button>
            <HashLink smooth to="/">
            <button
        
        className=" px-4 font-bold py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Go Back
      </button>
      </HashLink>
      </div>
    </>
    }

    </div>
  );
};

export default Play;