import type FriendCard from "../types/friendCard"
export const FRIENDS: FriendCard[] = [
  {
    id: "f1", emoji: "😎", name: "Ahmed", status: "study",
    badge: { label: "Studying", type: "green" },
    rows: [
      { lbl: "App", val: "Notion" },
      { lbl: "Session", val: "1h 24m" },
      { lbl: "Subject", val: "Physics" },
    ],
    bar: 78,
  },
  {
    id: "f2", emoji: "🤡", name: "Rafi", status: "distract", busted: true,
    badge: { label: "Busted", type: "red" },
    rows: [{ lbl: "Session", val: "2h 10m" }],
    alert: { text: "📱 Opened Instagram 14× in 40 mins. Aura farming confirmed.", type: "red" },
  },
  {
    id: "f3", emoji: "🧠", name: "Priya", status: "study",
    badge: { label: "Grinding", type: "green" },
    rows: [
      { lbl: "App", val: "Udemy" },
      { lbl: "Session", val: "3h 02m" },
      { lbl: "Streak", val: "🔥 12 days" },
    ],
    bar: 95,
  },
  {
    id: "f4", emoji: "😴", name: "Dev", status: "idle",
    badge: { label: "Idle", type: "muted" },
    rows: [
      { lbl: "Last seen", val: "3h ago" },
      { lbl: "Today", val: "0 min 💀" },
    ],
    alert: { text: "Hasn't opened the app today. Classic Dev.", type: "muted" },
  },
  {
    id: "f5", emoji: "✨", name: "Zara", status: "study",
    badge: { label: "On fire", type: "green" },
    rows: [
      { lbl: "App", val: "Khan Academy" },
      { lbl: "Session", val: "45m" },
      { lbl: "Streak", val: "🔥 21 days" },
    ],
    bar: 62,
  },
];