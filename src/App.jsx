import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";
const defaultList = [
  {
    id: 0,
    isDone: false,
    content: "노래",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "react",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "복습Action",
    date: new Date().getTime(),
  },
];

function App() {
  const [list, setList] = useState(defaultList);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setList([newTodo, ...list]);
  };

  const onUpdate = (targetId) => {
    setList(
      list.map((lists) => {
        return lists.id === targetId
          ? { ...lists, isDone: !lists.isDone }
          : lists;
      })
    );
  };

  const onDelete = (targetId) => {
    setList(
      list.filter((lists) => {
        return lists.id !== targetId;
      })
    );
  };

  return (
    <div className="App">
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List onUpdate={onUpdate} onDelete={onDelete} list={list} /> */}
    </div>
  );
}

export default App;
