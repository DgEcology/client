import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FaQrcode } from "react-icons/fa6";

interface QrCodeProps {
  data: string;
}

export default function QrCode({ data }: QrCodeProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="bg-emerald-600">
          <FaQrcode className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Код для отметки</DialogTitle>
          <DialogDescription>
            Покажите QR код участникам для отметки.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full h-full">
          <img className="w-64 h-64" src={data} alt="QR Code" />
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
