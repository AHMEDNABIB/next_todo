"use client";
import { Sidebar, Button } from "flowbite-react";
import { BsListCheck } from "react-icons/bs";
import { FaClipboardList, FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import MainModal from "@/components/Common/Modal";
import CommonButton from "@/components/Common/Button";
import InputTaskTitle from "../form/inputTaskTitle";
import useTask from "@/hooks/useTask";
import InputDescription from "../form/inputDescription";
import SelectTag from "../form/selectTag";

interface sideBar {
  onStatusChange: any;
  mutate: any;
}

export default function Sidb0arTodo({ onStatusChange, mutate }: sideBar) {
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
  });

  return (
    <Sidebar
      className=" mx-3 rounded-lg   border-2 bg-white border-gray-200 "
      aria-label="Sidebar with content separator example"
    >
      <Sidebar.Items>
        <div className="flex flex-col h-[580px] text-white">
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={FaClipboardList}>TodoList</Sidebar.Item>
          </Sidebar.ItemGroup>
          <div className="flex-1 cursor-pointer   group py-4 overflow-hidden hover:overflow-y-scroll transition-all duration-300  ">
            <Sidebar.ItemGroup>
              <Sidebar.Item
                className="text-md"
                onClick={() => onStatusChange("inprogress")}
              >
                <div className="flex gap-3 items-center">
                  <BsListCheck />
                  Inbox
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                className="text-sm "
                onClick={() => onStatusChange("done")}
              >
                <div className="flex gap-3 items-center">
                  <FaRegThumbsUp />
                  Done
                </div>
              </Sidebar.Item>
              <Sidebar.Item onClick={() => onStatusChange("important")}>
                <div className="flex gap-3 items-center">
                  <FaRegStar />
                  Important
                </div>
              </Sidebar.Item>
              <Sidebar.Item onClick={() => onStatusChange("trash")}>
                <div className="flex gap-3 items-center">
                  <FaRegTrashCan />
                  Trash
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
              <Sidebar.Item className="text-sm">Tags</Sidebar.Item>

              <Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
                <div className="flex gap-1 items-center text-green-600">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgb(22 163 74)"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-45  shrink-0 rotate-45 fill-success"
                  >
                    <path
                      d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
                      stroke="currentColor"
                      stroke-width=".5"
                    />
                  </svg>
                  Team
                </div>
              </Sidebar.Item>

              <Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
                <div className="flex gap-1 items-center text-yellow-800">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgb(202 138 4)"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-45  shrink-0 rotate-45 fill-success"
                  >
                    <path
                      d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
                      stroke="currentColor"
                      stroke-width=".5"
                    />
                  </svg>
                  Low
                </div>
              </Sidebar.Item>

              <Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
                <div className="flex gap-1 items-center text-blue-800">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgb(30 64 175)"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-45  shrink-0 rotate-45 fill-success"
                  >
                    <path
                      d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
                      stroke="currentColor"
                      stroke-width=".5"
                    />
                  </svg>
                  Medium
                </div>
              </Sidebar.Item>

              <Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
                <div className="flex gap-1 items-center text-red-600">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgb(220 38 38)"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-45  shrink-0 rotate-45 fill-success"
                  >
                    <path
                      d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
                      stroke="currentColor"
                      stroke-width=".5"
                    />
                  </svg>
                  High
                </div>
              </Sidebar.Item>

              <Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
                <div className="flex gap-1 items-center text-emerald-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgb(110 231 183)"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-45  shrink-0 rotate-45 fill-success"
                  >
                    <path
                      d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
                      stroke="currentColor"
                      stroke-width=".5"
                    />
                  </svg>
                  Update
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </div>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <Button
                className="w-full "
                onClick={() => setOpenModal((prev) => !prev)}
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add New Task
              </Button>
              {/* <Button>LOGOUT</Button> */}
              <MainModal
                title="Add Todo"
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
                        placeholder="Type task title"
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
                      />
                    </div>
                    <div className="col-span-2">
                      <InputDescription
                        register={register}
                        name="description"
                        label="Product Description"
                        id="description"
                        placeholder="Write Your task description"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-5 text-sm font-medium text-gray-500 dark:text-gray-300">
                    <CommonButton
                      onClick={() => setOpenModal(false)}
                      color="rose"
                    >
                      Cancel
                    </CommonButton>

                    <Button gradientMonochrome="info" type="submit">
                      Add
                    </Button>
                  </div>
                </form>
              </MainModal>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </div>
      </Sidebar.Items>
    </Sidebar>
  );
}
