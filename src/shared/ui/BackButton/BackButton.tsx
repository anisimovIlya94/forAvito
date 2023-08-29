import { useNavigate } from 'react-router-dom';
import cls from "./BackButton.module.scss"

const BackButton = () => {
  const navigate = useNavigate();
  return <button className={cls.BackButton} onClick={() => navigate("/")}>Go back</button>;
};

export default BackButton;