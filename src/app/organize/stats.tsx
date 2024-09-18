import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaChartSimple } from "react-icons/fa6";

export default function Stats() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className=" bg-emerald-600">
          <FaChartSimple className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Статистика</DialogTitle>
          <DialogDescription>Информация по посещению события</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap2">
          <div className="flex flex-row gap-1">
            <p className="font-semibold">Всего записались:</p>
            <p>32</p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="font-semibold">Явка:</p>
            <p>28</p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Закрыть</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
