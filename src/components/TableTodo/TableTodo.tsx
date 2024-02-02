"use client";

import {
  Checkbox,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "flowbite-react";
import { useState } from "react";
import PaginationTodo from "@/components/TableTodo/TableHeader/PaginationTodo";
import SearchTodo from "@/components/TableTodo/TableHeader/SerarchTodo";
import ActionDropdownTodo from "@/components/TableTodo/TableListTodo/ActionDropdownTodo";
import PriorityDropdownTodo from "@/components/TableTodo/TableListTodo/PriorityDropdownTodo";
import TagsDropdownTodo from "@/components/TableTodo/TableListTodo/TagsDropdownTodo";
import ViewModalTodo from "@/components/TableTodo/TableListTodo/ViewModalTodo";
import { KeyedMutator } from "swr/_internal";

interface tableTodo {
  result: any;
  mutate: KeyedMutator<any>;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  page: number;
  totalPages: number;
}

function TableTodo({
  result,
  mutate,
  handleNextClick,
  handlePrevClick,
  page,
  totalPages,
}: tableTodo) {
  const { data } = result;
  const [openModal, setOpenModal] = useState(false);
  const [record, setRecord] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    handleUpdateData(id);
  };

  const handleUpdateData = (id) => {
    const status = checkedItems[id] ? "inprogress" : "done";

    fetch(`http://localhost:3001/todos/done/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
    mutate();
  };

  const showDetail = (id: string) => {
    fetch(`http://localhost:3001/todos/${id}`)
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res.data));

    setOpenModal(true);
  };

  return (
    <>
      <div className="overflow-x-auto w-3/4 border-2 rounded-md border-zinc-200  cursor-pointer ">
        <div className="flex justify-between gap-6 mx-4 my-7 ">
          <SearchTodo />
          <PaginationTodo
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
            page={page}
            totalPages={totalPages}
            mutate={mutate}
          />
        </div>
        <hr />
        <Table hoverable>
          <TableBody className="divide-y divide-x ">
            {data.map((todo) => (
              <TableRow key={todo._id}>
                <TableCell className="p-4 cursor-pointer peer">
                  <Checkbox
                    checked={checkedItems[todo._id] || todo.status === "done"}
                    onChange={() => handleCheckboxChange(todo._id)}
                  />
                </TableCell>

                <TableCell
                  onClick={() => showDetail(todo._id)}
                  className={
                    checkedItems[todo._id] || todo.status === "done"
                      ? "line-through whitespace-nowrap font-medium text-gray-900 dark:text-white  w-1/2"
                      : "whitespace-nowrap font-medium text-gray-900 dark:text-white  w-1/2"
                  }
                >
                  <h1>{todo.title}</h1>
                  <p>
                    {todo.description.length > 50
                      ? `${todo.description.slice(0, 80)}....`
                      : todo.description}
                  </p>
                </TableCell>

                <TableCell className="flex justify-end gap-2 items-center mt-4">
                  <TagsDropdownTodo
                    tags={todo.tags}
                    id={todo._id}
                    mutate={mutate}
                  />

                  <PriorityDropdownTodo
                    priority={todo.priority}
                    id={todo._id}
                    mutate={mutate}
                  />
                </TableCell>
                <TableCell
                  className={
                    checkedItems[todo._id] || todo.status === "done"
                      ? "line-through whitespace-nowrap font-medium text-gray-900 dark:text-white "
                      : "whitespace-nowrap font-medium text-gray-900 dark:text-white  "
                  }
                >
                  Jan, 17 2024
                </TableCell>

                <TableCell>
                  <ActionDropdownTodo
                    id={todo._id}
                    isImportant={todo.isImportant}
                    isDeleted={todo.isDeleted}
                    mutate={mutate}
                    todoData={todo}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ViewModalTodo data={record} />
      </Modal>
    </>
  );
}

export default TableTodo;
