import { useQuery } from "@tanstack/react-query";

const useGetScores = (difficulty) => {
  const url = `http://localhost:3000/scores?difficulty=${difficulty}`;

  const { data } = useQuery({
    queryKey: ["scores", difficulty],
    queryFn: async () => {
      const response = await fetch(url);
      return response.json();
    },
  });
  return data;
};

export default useGetScores;
