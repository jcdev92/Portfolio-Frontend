import { useMutation, useQueryClient } from "@tanstack/react-query";

/* eslint-disable react/prop-types */
export const DeleteAlert = ({ selectedId, setEditMode, deleteFn, keyword }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries(keyword);
    },
  });
  const { mutate } = mutation;

  const handelDelete = () => {
    mutate(selectedId);
  };
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow z-20">
      <div className="px-4 py-4 w-full text-center">
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
          Are you sure you want to delete {`ID:  ${selectedId}`} ?
        </h5>
      </div>
      <div className="flex justify-around py-4">
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => {
            handelDelete(), setEditMode("table");
          }}
        >
          YES
        </button>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => setEditMode("table")}
        >
          NO
        </button>
      </div>
    </div>
  );
};
