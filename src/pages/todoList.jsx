import axios from "axios";
import { useState } from "react";
function TodoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expireDate, setExpireDate] = useState("");

  function addList() {
    console.log(title);
    axios.post("http://127.0.0.1:4000/addLists", {
        title: title,
        description: description,
        expireDate: expireDate
    }).then(()=>{
        alert("Added Succesfully.")
    })
  }
  return (
    <div className="todoList">
      <div>
        <input
          type="text"
          className="input"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          id=""
          cols="30"
          rows="5"
          name="description"
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div>
        <input
          type="date"
          className="input"
          name="expireDate"
          value={expireDate}
          onChange={(e) => setExpireDate(e.target.value)}
        />
      </div>
      <div>
        <input type="button" value="Add" onClick={addList} />
      </div>
    </div>
  );
}
export default TodoList;
