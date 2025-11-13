import { Button } from "@app/_ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/_ui/card";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Card Title 1</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Button>Ahihi</Button>
    </div>
  );
}
