import { useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onType={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onType={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onType={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="harkirat@gmail.com"
            label={"Email"}
          />
          <InputBox
            onType={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onPress={async () => {
                try {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      username: username,
                      password: password,
                      firstName: firstName,
                      lastName: lastName,
                    }
                  );
                  console.log(response); // now we need to store the token in localStorage. as in future req that user will send we need to send token along with it.response.data.token

                  localStorage.setItem("token", response.data.token); // storing the token in local storage
                  // so when user will logout just clear the stored token -> localStorage.removeItem("token")
                  navigate("/dashboard");
                } catch (error) {
                  console.log(
                    error.response ? error.response.data : error.message
                  );
                }
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

// onType/onPress I gave this name just to diffrentiate between "onClick" & onType
