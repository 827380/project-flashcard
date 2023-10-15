import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  const navigate = useNavigate(); //Custom hook used to navigate one page back with the help of navigate(-1)
  return () => navigate(-1);
}
