import { PlusIcon, MinusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NumberControlProps {
  value: number;
  onClickReduce: () => void;
  onClickIncrement: () => void;
}

export const NumberControl = ({
  value,
  onClickReduce,
  onClickIncrement,
}: NumberControlProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onClickReduce}
        data-testid="reduce-button"
      >
        <MinusIcon />
      </Button>
      <span className="text-sm">{value}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onClickIncrement}
        data-testid="increment-button"
      >
        <PlusIcon />
      </Button>
    </div>
  );
};
