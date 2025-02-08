import { RevenueCard } from "./components/RevenueCard";
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div className="grid grid-cols-4 p-4">
      <RevenueCard title={"Amount pending"} amount={"92,321.20"} orderCount={13}/>

      
    </div>
  );
}
