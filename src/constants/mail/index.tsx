
export const EMAILPAGES = [
  {
    text: "inbox",
    href: "#inbox",
    icon: "/mail/inbox.png",
  },
  {
    text: "starred",
    href: "#starred",
    icon: "/mail/starred.png",
  },
  {
    text: "sent",
    href: "#sent",
    icon: "/mail/sent.png",
  },
  {
    text: "draft",
    href: "#draft",
    icon: "/mail/draft.png",
  },
  {
    text: "spam",
    href: "#spam",
    icon: "/mail/spam.png",
  },
  {
    text: "important",
    href: "#important",
    icon: "/mail/important.png",
  },
  {
    text: "bin",
    href: "#bin",
    icon: "/mail/bin.png",
  },
];

export interface IMail {
  id: number;
  starred: boolean;
  userFrom: string;
  group: { label: string; title: string };
  time: string;
}

// create fake inbox data
export const INBOXLIST : IMail[] = [
  {
    id: 1,
    starred: false,
    userFrom: "Jullu Jalal",
    group: {
      label: "Primary",
      title: "Our Bachelor of Commerce program is ACBSP-accredited.",
    },
    time: "8:38 AM",
  },
  {
    id: 2,
    starred: false,
    userFrom: "Minerva Barnett",
    group: {
      label: "Work",
      title: "Get Best Advertiser In Your Side Pocket",
    },
    time: "8:13 AM",
  },
  {
    id: 3,
    starred: false,
    userFrom: "Peter Lewis",
    group: {
      label: "Friends",
      title: "Vacation Home Rental Success",
    },
    time: "7:52 PM",
  },
  {
    id: 4,
    starred: true,
    userFrom: "Anthony Briggs",
    group: {
      label: "",
      title: "Free Classifieds Using Them To Promote Your Stuff Online",
    },
    time: "7:52 PM",
  },
  {
    id: 5,
    starred: false,
    userFrom: "Clifford Morgan",
    group: {
      label: "Social",
      title: "Enhance Your Brand Potential With Giant Advertising Blimps",
    },
    time: "4:13 PM",
  },
  {
    id: 6,
    starred: false,
    userFrom: "Cecilia Webster",
    group: {
      label: "Friends",
      title: "Always Look On The Bright Side Of Life",
    },
    time: "3:52 PM",
  },
  {
    id: 7,
    starred: false,
    userFrom: "Harvey Manning",
    group: {
      label: "",
      title: "Curling Irons Are As Individual As The Women Who Use Them",
    },
    time: "2:30 PM",
  },
  {
    id: 8,
    starred: false,
    userFrom: "Willie Blake",
    group: {
      label: "Primary",
      title: "Our Bachelor of Commerce program is ACBSP-accredited.",
    },
    time: "8:38 AM",
  },
  {
    id: 9,
    starred: false,
    userFrom: "Minerva Barnett",
    group: {
      label: "Work",
      title: "Get Best Advertiser In Your Side Pocket",
    },
    time: "8:13 AM",
  },
  {
    id: 10,
    starred: true,
    userFrom: "Fanny Weaver",
    group: {
      label: "",
      title: "Free Classifieds Using Them To Promote Your Stuff Online",
    },
    time: "7:52 PM",
  },
  {
    id: 11,
    starred: false,
    userFrom: "Olga Hogan",
    group: {
      label: "Social",
      title: "Enhance Your Brand Potential With Giant Advertising Blimps",
    },
    time: "4:13 PM",
  },
  {
    id: 12,
    starred: false,
    userFrom: "Lora Houston",
    group: {
      label: "Friends",
      title: "Vacation Home Rental Success",
    },
    time: "7:52 PM",
  },
  {
    id: 13,
    starred: true,
    userFrom: "Walter Perry",
    group: {
      label: "Updates",
      title: "Your Subscription Has Been Renewed",
    },
    time: "9:15 AM",
  },
  {
    id: 14,
    starred: false,
    userFrom: "Gloria Barnes",
    group: {
      label: "Primary",
      title: "Exclusive Offer Just For You",
    },
    time: "10:22 AM",
  },
  {
    id: 15,
    starred: false,
    userFrom: "Vincent Owens",
    group: {
      label: "Social",
      title: "You Have New Friend Requests",
    },
    time: "5:45 PM",
  },
  {
    id: 16,
    starred: false,
    userFrom: "Gordon Austin",
    group: {
      label: "Promotions",
      title: "Special Discounts On Your Favorite Products",
    },
    time: "11:30 AM",
  },
  {
    id: 17,
    starred: false,
    userFrom: "Lucille Hughes",
    group: {
      label: "Work",
      title: "Meeting Rescheduled To Next Week",
    },
    time: "2:15 PM",
  },
  {
    id: 18,
    starred: true,
    userFrom: "Dennis Mitchell",
    group: {
      label: "Friends",
      title: "Let's Catch Up This Weekend!",
    },
    time: "6:05 PM",
  },
  {
    id: 19,
    starred: false,
    userFrom: "Genevieve Ferguson",
    group: {
      label: "Primary",
      title: "Important Account Notification",
    },
    time: "7:10 AM",
  },
  {
    id: 20,
    starred: false,
    userFrom: "Marsha Spencer",
    group: {
      label: "Updates",
      title: "Your Order Has Been Shipped",
    },
    time: "3:00 PM",
  },
  {
    id: 21,
    starred: false,
    userFrom: "Felix Hawkins",
    group: {
      label: "Social",
      title: "New Event Invitation: Don't Miss Out!",
    },
    time: "12:45 PM",
  },
  {
    id: 22,
    starred: false,
    userFrom: "Eunice Castro",
    group: {
      label: "Friends",
      title: "Happy Birthday! Let's Celebrate!",
    },
    time: "4:30 PM",
  },
];
