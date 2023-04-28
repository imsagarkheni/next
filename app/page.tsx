'use client';
import Link from 'next/link'

import styles from './page.module.css'

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';
import Navbar from './components/Navbar';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <Navbar/>
      
      <button
        className={styles.increment}
        onClick={() => dispatch(increment())}
      >Increment</button>
      <span className='text-primary-dark text-lg'>{count}</span>
      <button
        className={styles.increment}
        onClick={() => dispatch(decrement())}
      >Decrement</button>
      <button
        className={styles.increment}
        onClick={() => dispatch(incrementByAmount(2))}
      >Increment by 2</button>
    </main>
  )
}
