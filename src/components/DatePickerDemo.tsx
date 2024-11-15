"use client";
import React from "react";
import { CalendarDate } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const DatePickerDemo: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<CalendarDate | null>(
    null
  );

  const handleDateChange = (date: CalendarDate | null) => {
    setSelectedDate(date);
  };

  return (
    <Card>
      <CardHeader>
        <h1>Date Picker Demo</h1>
      </CardHeader>
      <CardBody>
        <DatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-40"
        />
      </CardBody>
      <CardFooter>
        <Button
          color="primary"
          className="mt-2"
          onClick={() => setSelectedDate(null)}
        >
          Clear
        </Button>
        {selectedDate && (
          <span className="ml-2 text-gray-700">
            Selected Date: {selectedDate.toString()}
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default DatePickerDemo;
