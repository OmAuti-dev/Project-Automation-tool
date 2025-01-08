import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type TaskProps = {
  
  _id: string;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  status: string
  onDelete: (id: string) => void; // Callback to handle deletion
};

const TaskCard: React.FC<TaskProps> = ({
  _id,
  title,
  description,
  deadline,
  priority,
  onDelete,
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <p>
            <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
          </p>
          <p>
            <strong>Priority:</strong> {priority}
          </p>
          <p>
            <strong>Status:</strong> {priority}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="secondary"> Assign </Button>
        <Button variant="destructive" onClick={() => onDelete(_id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
