import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
        <CardHeader className="bg-blue-500 p-6 text-white">
          <CardTitle>登录Sgin</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">用户名</Label>
                <Input id="name" placeholder="用户名或邮箱" className="border-2 border-gray-200 p-2 rounded-md" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">密码</Label>
                <Input id="password" placeholder="密码" className="border-2 border-gray-200 p-2 rounded-md" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="bg-gray-100 p-6 flex justify-between">
          <Button variant="outline" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">取消</Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-700">登录</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
