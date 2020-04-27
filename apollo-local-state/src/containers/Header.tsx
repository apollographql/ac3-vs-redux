
import React from 'react';
import Header from '../components/Header'
import { useTodos } from '../operations/mutations';

export default function () {
  const { addTodo } = useTodos();
  return <Header addTodo={addTodo} />;
}