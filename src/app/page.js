import Image from "next/image";

export default function Home() {
  return (
      <div>
        <h1>
          Tic Tac Toe
        </h1>
        <div className="game">
          <div className="game-menu">
            <p>Turn</p>
          </div>
          <div className="game_board">
            {[...Array(9)].map((v, idx) => {
              return (
                  <div

                      key={idx}
                      className="square">
                    X
                  </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}
