import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function Login() {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  //Input Change Handler
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  //handleSubmit function
  const handleSubmit = (type) => {
    let data = type === "signup" ? signupInput : loginInput;
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => handleInputChange(e, "signup")}
                  required="true"
                  type="text"
                  placeholder="Your Name"
                />
                <Label htmlFor="name">Email</Label>
                <Input
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => handleInputChange(e, "signup")}
                  required="true"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => handleInputChange(e, "signup")}
                  required="true"
                  type="password"
                  placeholder="Your Password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  handleSubmit("signup");
                }}
              >
                Signup
              </Button>
              <Button className="ml-4 bg-blue-500 ">Continue wit google</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => handleInputChange(e, "login")}
                  type="text"
                  placeholder="Your email"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => handleInputChange(e, "login")}
                  type="password"
                  placeholder="Your password"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  handleSubmit("login");
                }}
              >
                Save password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
