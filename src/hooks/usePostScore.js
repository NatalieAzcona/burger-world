import { useMutation } from "@tanstack/react-query";

const usePostScore = () => {
  const url = "http://localhost:3000/scores/newScore";

  const { mutate, isError } = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Error al guardar la puntuación");
      return response.text();
    },
  });
  return { mutate, isError };
};

export default usePostScore;
