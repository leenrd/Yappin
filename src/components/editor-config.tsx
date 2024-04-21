import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bird, Rabbit, Share, Turtle, MessageCircleOff } from "lucide-react";
import Editor from "./editor";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";

const EditorConfig = () => {
  const contentSchema = z.object({
    content: z.string().min(30, "Content too short").trim(),
    name: z.string().min(10),
  });

  const configSchema = z.object({
    title: z
      .string()
      .min(5, "Title too short")
      .max(30, "Title too long")
      .trim(),
    description: z
      .string()
      .min(10, "Description too short")
      .max(40, "Description too long")
      .trim(),
  });

  const ContentForm = useForm<z.infer<typeof contentSchema>>({
    resolver: zodResolver(contentSchema),
    mode: "onChange",
  });

  const ConfigForm = useForm<z.infer<typeof configSchema>>({
    resolver: zodResolver(configSchema),
    mode: "onChange",
  });

  return (
    <div className="grid h-screen w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Editor</h1>
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              className="ml-auto gap-1.5 text-sm"
            >
              <MessageCircleOff className="size-3.5" />
              Cancel
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5 text-sm">
              <Share className="size-3.5" />
              Publish
            </Button>
          </div>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <Config />
          <div className="col-span-2">
            <Form {...ContentForm}>
              <fieldset className="w-full rounded-lg border p-4">
                <legend className="text-sm font-medium px-1">Editor</legend>
                <FormField
                  control={ContentForm.control}
                  name="Start typing..."
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Editor
                          content={field.name}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Your content gets pushed upstream every onChange.
                </p>
              </fieldset>
            </Form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditorConfig;

const Config = () => {
  return (
    <div
      className="relative flex-col items-start gap-8 md:flex"
      x-chunk="dashboard-03-chunk-0"
    >
      <form className="grid w-full items-start gap-6 sticky top-0 ">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Paper Config
          </legend>
          <div className="grid gap-3">
            <Label htmlFor="PaperType">Type</Label>
            <Select>
              <SelectTrigger
                id="PaperType"
                className="items-center [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="genesis">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Rabbit className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Normal{" "}
                        <span className="font-medium text-foreground">
                          Blog
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Regular blog for informal purposes.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="explorer">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Bird className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Tryna{" "}
                        <span className="font-medium text-foreground">
                          Play
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Follow your hearts desire.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="quantum">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Turtle className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Portfolio{" "}
                        <span className="font-medium text-foreground">
                          Docs
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Docs of projects is linked here.
                      </p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="role">Title</Label>
            <Input id="role" placeholder="Title of the document" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Keep it short and simple mwuah 😽..."
              className="min-h-[9.5rem]"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
