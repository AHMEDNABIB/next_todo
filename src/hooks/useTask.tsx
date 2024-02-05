import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import fetcher from "../../services/requestUtils";

const useTask = ({ onMutate, id }: { onMutate: any; id?: any }) => {
  const { handleSubmit, register, control, setValue } = useForm();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const baseUrl = process.env.NEXTAUTH_SERVER_URL || 'http://localhost:3001';
    if (id) {
      const url = `${baseUrl}/todos/${id}`
      fetcher(url, {
        method: "PATCH",
        body: JSON.stringify(data),
      })
        .then((data) => {
          console.log(data);
        });
      onMutate();
      setOpenModal(false);
    } else {
      const url = `${baseUrl}/todos/`
      fetcher(url, {
        method: "POST",
        body: JSON.stringify(data),
      })
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
