import { useQuery } from "@tanstack/react-query";

const useGetScores = (difficulty) => {
  const url = `http://localhost:3000/scores?difficulty=${difficulty}`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["scores", difficulty],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al mostrar la puntuación");
      return response.json();
    },
  });
  return { data, isLoading, isError };
};

export default useGetScores;
