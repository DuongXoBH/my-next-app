"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { EventResizeDoneArg } from "@fullcalendar/interaction";
import {
  DateSelectArg,
  EventClickArg,
  EventDropArg,
} from "@fullcalendar/core";
import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useAtom } from "jotai";
import { eventAtom } from "@/store/event";

export default function MyCalendar(){
  const [events, setEvents] = useAtom(eventAtom);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<{
    start: string;
    end: string;
  } | null>(null);
  const [newNote, setNewNote] = useState("");
  console.log("🚀 ~ MyCalendar ~ newNote:", newNote)

  const handleSelect = (info: DateSelectArg) => {
    setSelectedDate({ start: info.startStr, end: info.endStr });
    setOpenAddModal(true);
  };

  const addEvent = () => {
    if (newNote && selectedDate) {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          id: Date.now().toString(),
          title: newNote,
          member: Math.floor(Math.random() * 100).toString(),
          start: selectedDate.start,
          end: selectedDate.end,
        },
      ]);

      setOpenAddModal(false);
      setNewNote("");
    }
  };

  const handleEventClick = (info: EventClickArg) => {
    if (confirm(`Bạn có muốn xóa sự kiện "${info.event.title}" không?`)) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== info.event.id)
      );
    }
  };

  const handleEventDrop = (info: EventDropArg) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === info.event.id
          ? {
              ...event,
              start: info.event.startStr,
              end: info.event.endStr,
            }
          : event
      )
    );
  };

  const handleEventResize = (info: EventResizeDoneArg) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === info.event.id
          ? {
              ...event,
              start: info.event.startStr,
              end: info.event.endStr,
            }
          : event
      )
    );
  }
  return (
    <div className="p-4 bg-white shadow rounded-lg overflow-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "dayGridDay,timeGridWeek,dayGridMonth",
        }}
        editable={true}
        selectable={true}
        select={handleSelect}
        events={events}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
      />

      {/* Add event Dialog */}
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <DialogTitle>ADD NEW EVENT</DialogTitle>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <Button variant="contained" sx={{ mt: 2 }} onClick={addEvent}>
            Add event
          </Button>
        </Box>
      </Dialog>
    </div>
  );
};

