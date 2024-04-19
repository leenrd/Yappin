import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

const BlogItem = () => {
  return (
    <Card className="hover:border-accent-foreground transition-colors hover:shadow-lg cursor-pointer">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Card Title</CardTitle>
          <SquareArrowOutUpRight
            className="h-5 w-5"
            color="#475569"
            strokeWidth={1}
          />
        </div>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BlogItem;
