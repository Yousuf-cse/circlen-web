export default interface FriendCard {
  id: string;
  emoji: string;
  name: string;
  status: "study" | "distract" | "idle";
  busted?: boolean;
  badge: { label: string; type: "green" | "red" | "muted" };
  rows?: { lbl: string; val: string }[];
  bar?: number;
  alert?: { text: string; type: "red" | "muted" };
  flipUp?: boolean;
}