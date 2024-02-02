import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";

const useTask = ({ onMutate, id }: { onMutate: any; id?: any }) => {
  const { handleSubmit, register, control, setValue } = useForm();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (id) {
      fetch(`http://localhost:3001/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      onMutate();
      setOpenModal(false);
    } else {
      fetch("http://localhost:3001/todos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Todo is Added",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      onMutate();
      setOpenModal((prev) => !prev);
    }
  };

  return {
    register,
    control,
    setValue,
    handleSubmit,
    onSubmit,
    openModal,
    setOpenModal,
  };
};
export default useTask;
