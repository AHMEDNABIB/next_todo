"use client";

import { Dropdown, Button } from "flowbite-react";
import Swal from "sweetalert2";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import MainModal from "@/components/Common/Modal";
import CommonButton from "@/components/Common/Button";
import InputTaskTitle from "@/components/form/inputTaskTitle";
import useTask from "@/hooks/useTask";
import SelectTag from "@/components/form/selectTag";
import InputDescription from "@/components/form/inputDescription";

export default function DropdownTodo({
  id,
  isImportant,
  isDeleted,
  mutate,
  todoData,
}: {
  id:any
  isImportant:any
  isDeleted:any
  mutate:any
  todoData:any
}) {
  const {
    handleSubmit,
    onSubmit,
    register,
    control,
    setValue,
    openModal,
    setOpenModal,
  } = useTask({
    onMutate: mutate,
    id: id,
  });
  const [formData, setFormData] = useState({
    title: todoData.title,
    tags: todoData.tags,
    priority: todoData.priority,
    description: todoData.description,
  });

  const handleSoftDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/todos/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            Swal.fire("Deleted!", "Todo move to trash.", "success");
            mutate();
          });
      }
    });
  };

  const handlePermanentDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/todos/permanent/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            Swal.fire("Deleted!", "Todo deleted Permanently.", "success");
          });

        mutate();
      }
    });
  };

  const handleRestoreTask = (id: string) => {
    fetch(`http://localhost:3001/todos/restore/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isDeleted: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    mutate();
  };

  const handleImportant = (id: string) => {
    fetch(`http://localhost:3001/todos/important/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isImportant: true,
        status: "important",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    mutate();
  };

  const handleUnimportant = (id: string) => {
    fetch(`http://localhost:3001/todos/unimportant/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isImportant: false,
        status: "inprogress",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    mutate();
  };

  return (
    <div>
      <Dropdown
        label="Action"
        dismissOnClick={false}
        renderTrigger={() => (
          <div>
            <CiMenuKebab />
          </div>
        )}
      >
        {isDeleted === true ? (
          <>
            <Dropdown.Item onClick={() => handlePermanentDelete(id)}>
              <div className="flex gap-1 items-center">
                <FaRegTrashCan />
                <div>Permanent Delete</div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRestoreTask(id)}>
              <div className="flex gap-1 items-center">
                <TbReload />
                <div>Restore Task</div>
              </div>
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item onClick={() => setOpenModal((prev) => !prev)}>
              <div className="flex gap-1 items-center">
                <FaRegPenToSquare />
                <div>Edit</div>
              </div>
            </Dropdown.Item>

            <Dropdown.Item onClick={() => handleSoftDelete(id)}>
              <div className="flex gap-1 items-center">
                <FaRegTrashCan />
                <div>Delete</div>
              </div>
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() =>
                isImportant === false
                  ? handleImportant(id)
                  : handleUnimportant(id)
              }
            >
              <div className="flex gap-1 items-center">
                <FaRegStar />
                <div>
                  {isImportant === false ? "Important" : "Not Important"}
                </div>
              </div>
            </Dropdown.Item>
          </>
        )}
      </Dropdown>

      <MainModal
        title="Edit Todo"
        show={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
      >
        <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <InputTaskTitle
                register={register}
                name="title"
                label="Task Title"
                id="title"
                value={formData.title}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <SelectTag
                register={control.register}
                setValue={setValue}
                name="tags"
                label="Tag"
                options={[
                  { value: "Team", label: "Team" },
                  { value: "Update", label: "Update" },
                ]}
                value={formData.tags}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <SelectTag
                register={control.register}
                setValue={setValue}
                name="priority"
                label="Priority"
                options={[
                  { value: "Low", label: "Low" },
                  { value: "Medium", label: "Medium" },
                  { value: "High", label: "High" },
                ]}
                value={formData.priority}
              />
            </div>
            <div className="col-span-2">
              <InputDescription
                register={register}
                name="description"
                label="Product Description"
                id="description"
                value={formData.description}
              />
            </div>
          </div>
          <div className="flex justify-end gap-5 text-sm font-medium text-gray-500 dark:text-gray-300">
            <CommonButton onClick={() => setOpenModal(false)} color="rose">
              Cancel
            </CommonButton>

            <Button gradientMonochrome="info" type="submit">
              Edit
            </Button>
          </div>
        </form>
      </MainModal>
    </div>
  );
}
