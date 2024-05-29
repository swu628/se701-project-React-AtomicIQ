import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { UserSession } from "~/types/entities";
function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.classList.add("background-blur-opacitySignUp");

    return () => {
      document.body.classList.remove("background-blur-opacitySignUp");
    };
  }, []);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userSession: UserSession = {
      username: username,
      password: password,
      badges: [0],
      level: 1,
      progress: 0,
      avatar: "src/assets/avatar1.svg",
    };

    localStorage.setItem("userSession", JSON.stringify(userSession));

    navigate("/login");
  };

  return (
    <div className="w-1/4 bg-transparent border-2 border-white/20 backdrop-blur-[30px] shadow-[0_0_10px_rgba(0,0,0,0.8)] text-white rounded-[10px] p-[30px_40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="text-[2em] text-center font-semibold ">New account</h1>
        <div className="relative w-full h-[50px] my-[30px]">
          <span>Username :</span>
          <UserCircleIcon
            className="w-[3em] text-blue-200 absolute 
          right-[5%] top-[96%] transform -translate-y-1/2 text-[16px]"
          />
          <br />
          <Input
            type="text"
            className="w-full   border-2 border-white/20 rounded-[40px] text-[16px] text-black py-6"
            onChange={handleUsername}
            required
          />
        </div>

        <div className="input-box">
          <span>Password </span>
          <LockClosedIcon className=" w-[3em] text-blue-200 absolute  right-[12.5%] top-[57%] transform -translate-y-1/2 text-[16px]" />
          <br />
          <Input
            className="w-full  border-2 border-white/20 rounded-[40px] text-[16px] text-black py-6"
            type="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex justify-between pt-5">
          <NavLink
            to="/login"
            className="text-white no-underline text-[14.5px] bg-transparent border-none"
          >
            Already have account?{" "}
          </NavLink>
        </div>
        <div className="text-white no-underline text-[14.5px] bg-transparent border-none">
          <Button
            className="mt-[30px] w-full h-[50px] bg-white border-none outline-none rounded-[40px] 
             cursor-pointer text-[16px] text-[#333] 
             font-bold transform transition-transform duration-300 
             hover:scale-110  hover:bg-sky-200"
            type="submit"
          >
            SignUp
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
