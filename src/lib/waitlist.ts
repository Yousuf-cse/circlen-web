export async function joinWaitlist(
  email: string,
  onSuccess: () => void,
  onError: (msg: string) => void,
  setLoading: (val: boolean) => void
) {
  if (!email || !email.includes("@")) {
    onError("Enter a valid email");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      onSuccess();
    } else {
      onError(data.error || "Something went wrong");
    }
  } catch {
    onError("Something went wrong, try again");
  } finally {
    setLoading(false);
  }
}