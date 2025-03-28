"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, {
  EventResizeDoneArg,
} from "@fullcalendar/interaction";
import { DateSelectArg, EventClickArg, EventDropArg } from "@fullcalendar/core";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { eventAtom } from "@/store/event";
import Image from "next/image";

export default function MyCalendar() {
  const [events, setEvents] = useAtom(eventAtom);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openHoverModal, setOpenHoverModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState<{
    start: string;
    end: string;
  } | null>(null);
  const [newNote, setNewNote] = useState<{ title: string; member: string }>({
    title: "",
    member: "",
  });
  const [hoveredEvent, setHoveredEvent] = useState<EventClickArg | null>(null);

  // const colors = ["#516FE9", "#F87171", "#34D399", "#FBBF24", "#818CF8"];

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
          title: newNote.title,
          member: newNote.member,
          start: selectedDate.start,
          end: selectedDate.end,
        },
      ]);

      setOpenAddModal(false);
      setNewNote({ title: "", member: "" });
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
  };

  const handleMouseEnter = (info: EventClickArg) => {
    setOpenHoverModal(true);
    setHoveredEvent(info);
  };

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
        eventClassNames={
          "w-full h-9 text-center flex justify-center items-center"
        }
        eventClick={handleMouseEnter}
        eventBackgroundColor="#516FE9"
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
      />

      {/* Add event Dialog */}
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <DialogTitle>ADD NEW EVENT</DialogTitle>
        <Box sx={{ p: 2 }}>
          <label htmlFor="event-title">Title</label>
          <TextField
            id="event-title"
            fullWidth
            placeholder="Title of the event"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />

          <label htmlFor="event-member" className="mt-5">Number of members</label>
          <TextField
            id="event-member"
            fullWidth
            placeholder="Number of members who will participate in the event"
            value={newNote.member}
            onChange={(e) => setNewNote({ ...newNote, member: e.target.value })}
          />

          <Button variant="contained" sx={{ mt: 2 }} onClick={addEvent}>
            Add event
          </Button>
        </Box>
      </Dialog>

      {/* Hover Event Dialog */}
      <Dialog
        sx={{ width: "100%" }}
        open={openHoverModal}
        onClose={() => setOpenHoverModal(false)}
      >
        <Box
          sx={{
            minWidth: "290px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "18px",
          }}
        >
          <Image alt="" src="/event-image.png" width={241} height={155}></Image>
          <DialogContent sx={{ width: "100%" }}>
            {hoveredEvent && (
              <div className="w-full mt-7">
                <Typography variant="h6">{hoveredEvent.event.title}</Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    mt: "16px",
                    color: "#919191",
                  }}
                >
                  Start: {hoveredEvent.event.startStr?.toLocaleString()}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    mt: "16px",
                    color: "#919191",
                  }}
                >
                  End: {hoveredEvent.event.endStr || "Không xác định"}
                </Typography>
                <div className="w-full flex justify-between">
                  <button
                    className="w-[45%] rounded-[8px] h-10 flex justify-center items-center bg-[#5186FF] mt-6   text-white"
                    onClick={() => {
                      setEvents((prevEvents) =>
                        prevEvents.filter(
                          (event) => event.id !== hoveredEvent.event.id
                        )
                      );
                      setOpenHoverModal(false);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="w-[45%] rounded-[8px] h-10 flex justify-center items-center bg-[#5186FF] mt-6   text-white"
                    onClick={() => {
                      setOpenHoverModal(false);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
