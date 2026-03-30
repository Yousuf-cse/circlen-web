import type FriendCard from "../types/friendCard"

export const FRIENDS: FriendCard[] = [
  {
    id: "f1", emoji: "😎", name: "Ahmed", status: "study",
    badge: { label: "Locked in", type: "green" },
    rows: [
      { lbl: "Session", val: "1h 24m" },
      { lbl: "Streak", val: "🔥 7 days" },
    ],
    bar: 78,
  },
  {
    id: "f2", emoji: "🤡", name: "Rafi", status: "distract", busted: true,
    badge: { label: "Busted", type: "red" },
    rows: [
      { lbl: "Session", val: "2h 10m" },
    ],
    alert: { text: "Bro said he's studying. The app said otherwise. 14 times. In 40 mins. 💀", type: "red" },
  },
  {
    id: "f3", emoji: "🧠", name: "Priya", status: "study",
    badge: { label: "Different breed", type: "green" },
    rows: [
      { lbl: "Session", val: "3h 02m" },
      { lbl: "Streak", val: "🔥 21 days" },
    ],
    bar: 95,
  },
  {
    id: "f4", emoji: "😴", name: "Dev", status: "idle",
    badge: { label: "Ghost", type: "muted" },
    rows: [
      { lbl: "Last seen", val: "3h ago" },
      { lbl: "Today", val: "0 min 💀" },
    ],
    alert: { text: "Exam in 3 days. Hasn't shown up once today. We're not worried. We're praying. 🙏", type: "muted" },
  },
  {
    id: "f5", emoji: "✨", name: "Zara", status: "study",
    badge: { label: "On fire", type: "green" },
    rows: [
      { lbl: "Session", val: "45m" },
      { lbl: "Streak", val: "🔥 21 days" },
    ],
    bar: 62,
  },
];