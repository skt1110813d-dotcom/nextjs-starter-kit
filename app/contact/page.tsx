"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("문의 내용:", formData);
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container py-12 md:py-24 max-w-screen-2xl">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
        <Badge variant="outline" className="mb-4">
          연락처
        </Badge>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          문의하기
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground">
          질문이나 제안사항이 있으시면 언제든지 연락주세요
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {/* 연락 정보 */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Mail className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>이메일</CardTitle>
              <CardDescription>
                이메일로 문의하시면 24시간 내에 답변드립니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:support@starterkit.com"
                className="text-primary hover:underline"
              >
                support@starterkit.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>라이브 채팅</CardTitle>
              <CardDescription>
                업무 시간(평일 9-18시)에는 라이브 채팅으로 즉시 도움을 받으실 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">채팅 시작하기</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Phone className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>전화</CardTitle>
              <CardDescription>
                긴급한 문의는 전화로 연락주세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:+82-2-1234-5678" className="text-primary hover:underline">
                +82-2-1234-5678
              </a>
            </CardContent>
          </Card>
        </div>

        {/* 문의 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>문의 양식</CardTitle>
            <CardDescription>
              아래 양식을 작성하여 문의해주세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">제목</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">메시지</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button type="submit" className="w-full">
                전송하기
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
