import { Dispatch, SetStateAction } from "react";
import { KeyedMutator } from "swr";

const tableTodoUtils = () =>{

    const handleUpdateData = (id:string, checkedItems:Record<string, boolean>, mutate:KeyedMutator<any>) => {
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

  const showDetail = (id: string, setRecord:Dispatch<SetStateAction<{}>>, setOpenModal:Dispatch<SetStateAction<boolean>>, mutate: KeyedMutator<any>) => {
    
    fetch(`http://localhost:3001/todos/${id}`)
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res.data));

    setOpenModal(true);
  };
  return{
    handleUpdateData,
    showDetail
  };
};
export default tableTodoUtils;