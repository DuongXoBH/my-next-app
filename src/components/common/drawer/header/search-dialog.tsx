"use client";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { DialogTitle } from "@/components/ui/dialog";
import { DASHBOARD, PAGE_DASHBOARD } from "@/constants/admin/dashboard";
import { SearchIcon, Settings, User } from "lucide-react";
import { useEffect, useState } from "react";
import LinkTag from "../../globals/link-tag";
import Image from "next/image";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <Button
        className="w-72 h-10 flex flex-row text-sm text-black hover:text-white rounded-2xl border  border-black bg-white"
        onClick={() => {
          setOpen(true);
        }}
      >
        <SearchIcon />
        <span>Search</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle></DialogTitle>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Dashboard">
            {DASHBOARD.map(
              (item: { text: string; href: string; icon: string }) => {
                return (
                  <CommandItem key={`${item.text}`}>
                    <LinkTag
                      href={item.href}
                      className="flex flex-row gap-5 items-center w-full "
                    >
                      <Image
                        alt=""
                        src={item.icon}
                        width={16}
                        height={16}
                      ></Image>{" "}
                      <span>{item.text}</span>
                    </LinkTag>
                  </CommandItem>
                );
              }
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Page">
            {PAGE_DASHBOARD.map(
              (item: { text: string; href: string; icon: string }) => {
                return (
                  <CommandItem key={`${item.text}`}>
                    <LinkTag
                      href={item.href}
                      className="flex flex-row gap-5 items-center w-full "
                    >
                      <Image
                        alt=""
                        src={item.icon}
                        width={16}
                        height={16}
                      ></Image>
                      <span>{item.text}</span>
                    </LinkTag>
                  </CommandItem>
                );
              }
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <LinkTag
                href="/admin/profile"
                className="flex flex-row gap-5 items-center w-full "
              >
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </LinkTag>
            </CommandItem>
            <CommandItem>
              <LinkTag
                href="/admin/settings"
                className="flex flex-row gap-5 items-center w-full "
              >
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </LinkTag>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
