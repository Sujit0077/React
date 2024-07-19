export default function GameBoard({ isSelectSquare, board }) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);




    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         // console.log(prevGameBoard)
    //         const updatedGameBoard = [...prevGameBoard].map(innerArray => [...innerArray]);
    //         // const updatedGameBoard=[...prevGameBoard]
    //         updatedGameBoard[rowIndex][colIndex] = activeSymbol;
    //         // console.log(updatedGameBoard)
    //         return updatedGameBoard;
    //     });
    //     isSelectSquare()
    // }
    // console.log(initialGameBoard)



    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => isSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}