import { useMutation } from "@tanstack/react-query";

const usePostScore = () => {
  const url = "http://localhost:3000/scores/newScore";

  const { mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  });
  return mutate;
};

export default usePostScore;
