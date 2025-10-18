import { cn } from "@/app/lib/utils";
import { styled } from "@app/hoc/styled";

type AbcProps = {
  className?: string;
};

const Abc = ({ className, ...props }: AbcProps) => {
  return (
    <h1 className={cn(className, "text-blue-500")} {...props}>
      Ahihi
    </h1>
  );
};

const StyledAbc = styled(Abc);

export { StyledAbc };
