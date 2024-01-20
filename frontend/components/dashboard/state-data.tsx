import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";

export interface StateDataProps {
  name: string;
  health: number;
  options: string[];
}

export function StateData({ name, health, options }: StateDataProps) {
  return (
    <>
      <div className="flex">
        <div className="flex-1 flex flex-row justify-space-around">
          <span className="flex-1 px-16 text-xl font-semibold">
            {name} Live Data
            <div className="pt-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pick Measurement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> Measurement </SelectLabel>
                    {options.map((o) => {
                      return (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </span>
          <span className="flex-1 px-16 py-8 bg-gray-200 rounded-xl">
            <div className="uppercase font-extralight text-xl"> Health </div>
            <div className="font-semibold text-5xl pt-2"> {health}% </div>
          </span>
        </div>
      </div>
      <div className="ml-16  mt-16">
        <Button className="w-full p-8">
          Book a Maintenance Appointment <IconArrowRight></IconArrowRight>
        </Button>
      </div>
    </>
  );
}
