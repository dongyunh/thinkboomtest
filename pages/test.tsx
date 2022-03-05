import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../redux/modules/counter"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1>
        Welcome to the greatest app in the world
      </h1>
      <h2>
        The current number is {count}
      </h2>
      <div>
        <label>count
          <input id="count" value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value))} 
        type="number"/>
        </label>
         <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
            increment by Amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  )
}

export default Home
