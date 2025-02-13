import { Appbar } from "../components/Appbar";
import Users from "../components/Users"
export default function Dashboard() {
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <balance value={"10,000"} />
        <Users />
      </div>
    </div>
  );
}
1;
