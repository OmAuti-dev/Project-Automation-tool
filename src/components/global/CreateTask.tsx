'use client';
import React, { useState } from 'react';
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
import { toast } from "sonner";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'low',
    skillset: '',
    status: 'todo', // Default status is 'todo'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/tasks/createtask/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          skillset: formData.skillset.split(',').map((skill) => skill.trim()),
        }),
      });

      if (response.ok) {
        setMessage('Task created successfully!');
        setFormData({
          title: '',
          description: '',
          deadline: '',
          priority: 'low',
          skillset: '',
          status: 'todo', // Reset the status after task creation
        });
        toast("Task created successfully!", {
          description: formData.title,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo clicked"),
          },
        });
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.errors?.map((err: any) => err.msg).join(', ')}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while creating the task.');
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
        <CardDescription>Fill out the details below to create a new task.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Task title"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Task description"
              required
            />
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="priority">Priority</Label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border px-2 py-1"
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <Label htmlFor="skillset">Skillset</Label>
            <Input
              id="skillset"
              name="skillset"
              value={formData.skillset}
              onChange={handleChange}
              placeholder="e.g., nodejs, sql"
              required
            />
          </div>
          {/* Status field */}
          <div>
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border px-2 py-1"
              required
            >
              <option value="todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleSubmit}>Submit</Button>
        {message && <p>{message}</p>}
      </CardFooter>
    </Card>
  );
};

export default CreateTask;
