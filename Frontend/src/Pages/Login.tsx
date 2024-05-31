import { useState, useEffect } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import Loader from "~/components/Loader/FullScreenLoader";
import { UserSession } from "~/types/entities";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }

    document.body.classList.add("background-blur-opacitySignin");

    return () => {
      document.body.classList.remove("background-blur-opacitySignin");
    };
  }, []);
  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleusername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const registName = userSession?.username.toLowerCase();
    const registPassword = userSession?.password;
    console.log(registName);
    console.log(username);
    console.log(registPassword);
    console.log(password);
    if (registName === username.toLowerCase() && registPassword === password) {
      navigate("/home");
      setIsLoading(false);
    } else {
      alert("Wrong user name or password");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="w-1/4 bg-transparent border-2 border-white/20 backdrop-blur-[30px] shadow-[0_0_10px_rgba(0,0,0,0.8)] text-white rounded-[10px] p-[30px_40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="text-[2em] text-center  font-semibold text-black">
            Login
          </h1>
          <div className="relative w-full h-[50px] my-[30px]">
            <UserCircleIcon className="w-[3em] text-blue-200 absolute right-[20px] top-1/2 transform -translate-y-1/2 text-[16px]" />
            <Input
              type="text"
              onChange={handleusername}
              placeholder="Username"
              className="w-full h-full  border-2 border-white/20 rounded-[40px] text-[16px] text-black p-[20px_45px_20px_20px]"
              required
            />
          </div>
          <div className="relative w-full h-[50px] my-[30px]">
            <Input
              type="password"
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full h-full  border-2 border-white/20 rounded-[40px] text-[16px] text-black p-[20px_45px_20px_20px]"
              required
            />
            <LockClosedIcon className=" w-[3em] text-blue-200 absolute right-[20px] top-1/2 transform -translate-y-1/2 text-[16px]" />
          </div>

          <div className="flex justify-between">
            <NavLink
              to="/signup"
              className="text-white no-underline text-[14.5px] bg-transparent border-transparent hover:underline cursor-pointer"
            >
              New Account?
            </NavLink>
          </div>
          {isLoading ? (
            <Loader isLoading={isLoading} loadingText={"Logging in."} />
          ) : (
            <Button
              className="mt-[30px] w-full h-[50px] bg-white border-none outline-none rounded-[40px] 
             cursor-pointer text-[16px] text-[#333] 
             font-bold transform transition-transform duration-300 
             hover:scale-110  hover:bg-sky-200"
              type="submit"
            >
              Login
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
