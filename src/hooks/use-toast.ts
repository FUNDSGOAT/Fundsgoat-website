export function useToast() {
  return {
    toast: ({ title, description }) => {
      alert(`${title}\n\n${description}`);
    },
  };
}
