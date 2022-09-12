import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import { animals } from '../../data';

export default function Main() {
  return <main>
    {animals.map((animal) => (
      <Animal key={animal.name} name={animal.name} says={animal.says} type={animal.type} />
    ))}
  </main>;
}
