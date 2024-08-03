import React,{useState } from 'react';
import './App.css'
function Square({value,onClick}){
    return(
        <button className="square" onClick={onClick}>{value}</button>
    );
}
function Board(){
    const [squares,setSquares]=useState(Array(9).fill(null));
    const xIsNext=squares.filter(s=> s==='X').length===squares.filter(s=>  s==='O').length;

function handleClick(i){
    if (squares[i] || calculateWinner(squares)){
        return;
    }
    const nextSquares =squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
}
const winner=calculateWinner(squares);
const status = winner ? `Winner : ${winner}`:`Next player : ${xIsNext ? 'X' : 'O'}`;
return(
    <div className='board'>
        <div className='status'>{status}</div>
        <div className='board-row'>
    {squares.map((value,i)=>(
        <Square key={i} value={value} onClick={()=>handleClick(i)}/>
    )
    )}
</div>
</div>
);
}
function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (const [a,b,c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}
export default Board;